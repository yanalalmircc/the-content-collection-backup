"use server";

import axios from "axios";
import { SignUpPayload, TrackingParams } from "@/app/lib/types";
import { cookies } from "next/headers";

export const signUpVisitor = async (formData: Partial<SignUpPayload>) => {
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
    const payload: SignUpPayload = {
      landingId: Number(process.env.NEXT_PUBLIC_LANDING_ID),
      uuid: cookieStore.get("uuid")?.value,
      url: "https://thecontentcollection.com",
      ip: cookieStore.get("ipAddress")?.value,
      userAgent: cookieStore.get("userAgent")?.value,
    };
    const requestPayload = {
      ...payload,
      ...formData, // Allow any passed parameters to override defaults
      ...trackingParamsFromCookies,
    };

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/external-landing/user`,
      requestPayload,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_BEARER_TOKEN}`,
        },
        validateStatus: (status) => status < 500,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Failed to sign up visitor:", error);
    throw error;
  }
};
