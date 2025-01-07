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
  // Collect data
  const ipAddress = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(
    ","
  )[0];
  const userAgent = req.headers.get("user-agent") || "";
  const uuid = uuidv4();

  // Store tracking parameters in cookies
  Object.entries(trackingParams).forEach(([key, value]) => {
    if (value) {
      response.cookies.set(key, value, { path: "/", httpOnly: true });
    }
  });
  response.cookies.set("ipAddress", ipAddress, {
    path: "/",
    httpOnly: true,
    secure: true,
    maxAge: 3600, // 1 hour
  });
  response.cookies.set("userAgent", userAgent, {
    path: "/",
    httpOnly: true,
    secure: true,
    maxAge: 3600, // 1 hour
  });
  response.cookies.set("uuid", uuid, {
    path: "/",
    httpOnly: true,
    secure: true,
    maxAge: 3600, // 1 hour
  });

  return response;
}

export const config = {
  matcher: ["/signup", "/"],
};
