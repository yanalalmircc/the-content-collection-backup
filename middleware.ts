import { NextRequest, NextResponse } from "next/server";
import { TrackingParams } from "@/app/lib/types";
import { v4 as uuidv4 } from "uuid";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { searchParams } = url;

  // Extract tracking parameters
  const trackingParams: TrackingParams = {
    utm_source: searchParams.get("utm_source") || "",
    utm_medium: searchParams.get("utm_medium") || "",
    utm_campaign: searchParams.get("utm_campaign") || "",
    utm_source_platform: searchParams.get("utm_source_platform") || "",
    utm_term: searchParams.get("utm_term") || "",
    utm_content: searchParams.get("utm_content") || "",
    gclid: searchParams.get("gclid") || "",
    keywordid: searchParams.get("keywordid") || "",
    placementid: searchParams.get("placementid") || "",
    networkid: searchParams.get("networkid") || "",
    publisher: searchParams.get("publisher") || "",
    preview: searchParams.get("preview") || "",
  };

  // Create a response object
  const response = NextResponse.next();

  // Check for existing visitor data or UUID
  const existingVisitorCookie = req.cookies.get("visitor");
  const existingUuidCookie = req.cookies.get("uuid");

  let uuid;

  if (existingVisitorCookie) {
    // Try to get UUID from visitor cookie
    const visitorData = JSON.parse(existingVisitorCookie.value);
    uuid = visitorData.uuid;
  } else if (existingUuidCookie) {
    // If no visitor cookie but UUID exists, use that
    uuid = existingUuidCookie.value;
  }

  // If no UUID found anywhere, generate a new one
  if (!uuid) {
    uuid = uuidv4();
  }

  // Collect data
  const ipAddress = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(
    ","
  )[0];
  const userAgent = req.headers.get("user-agent") || "";

  // Create visitor data object
  const visitorData = {
    uuid, // Ensure UUID is included
    ipAddress,
    userAgent,
    ...trackingParams,
  };

  // Set visitor cookie
  response.cookies.set("visitor", JSON.stringify(visitorData), {
    path: "/",
    httpOnly: true,
    secure: true,
    maxAge: 3600,
  });

  // Also set a separate UUID cookie for backward compatibility
  response.cookies.set("uuid", uuid, {
    path: "/",
    httpOnly: true,
    secure: true,
    maxAge: 3600,
  });

  return response;
}

export const config = {
  matcher: ["/signup", "/"],
};
