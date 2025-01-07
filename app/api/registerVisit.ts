"use server";
import axios from "axios";
import { VisitPayload, TrackingParams } from "@/app/lib/types";
import { cookies } from "next/headers";

export const registerVisit = async () => {
  try {
    const cookieStore = cookies();
    const trackingParamsFromCookies: TrackingParams = {
      utm_source: cookieStore.get("utm_source")?.value || "",
      utm_medium: cookieStore.get("utm_medium")?.value || "",
      utm_campaign: cookieStore.get("utm_campaign")?.value || "",
      utm_source_platform: cookieStore.get("utm_source_platform")?.value || "",
      utm_term: cookieStore.get("utm_term")?.value || "",
      utm_content: cookieStore.get("utm_content")?.value || "",
      gclid: cookieStore.get("gclid")?.value || "",
      keywordid: cookieStore.get("keywordid")?.value || "",
      placementid: cookieStore.get("placementid")?.value || "",
      networkid: cookieStore.get("networkid")?.value || "",
      publisher: cookieStore.get("publisher")?.value || "",
      preview: cookieStore.get("preview")?.value || "",
    };
    const payload: VisitPayload = {
      landingId: Number(process.env.NEXT_PUBLIC_LANDING_ID),
      uuid: cookieStore.get("uuid")?.value,
      url: "https://thecontentcollection.com",
      ip: cookieStore.get("ipAddress")?.value,
      userAgent: cookieStore.get("userAgent")?.value,
    };
    const requestPayload = {
      ...trackingParamsFromCookies,
      ...payload,
    };

    // Build URL with tracking parameters
    const url = new URL(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/external-landing/visit`
    );

    // Add tracking parameters to URL if they exist
    if (trackingParamsFromCookies) {
      Object.entries(trackingParamsFromCookies).forEach(([key, value]) => {
        if (value) {
          url.searchParams.append(key, value);
        }
      });
    }

    const response = await axios.post(url.toString(), requestPayload, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_BEARER_TOKEN}`,
      },
      validateStatus: (status) => status < 500,
    });

    return response.data;
  } catch (error) {
    console.error("Failed to register visit:", error);
    throw error;
  }
};
