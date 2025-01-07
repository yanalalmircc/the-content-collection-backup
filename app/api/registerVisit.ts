"use server";
import axios from "axios";
import { VisitPayload } from "@/app/lib/types";
import { cookies } from "next/headers";

export const registerVisit = async () => {
  try {
    const cookieStore = cookies();
    const visitorCookie = cookieStore.get("visitor");
    const visitorData = visitorCookie ? JSON.parse(visitorCookie.value) : {};

    const payload: VisitPayload = {
      landingId: Number(process.env.NEXT_PUBLIC_LANDING_ID),
      uuid: visitorData.uuid,
      url: "https://thecontentcollection.com",
      ip: visitorData.ipAddress,
      userAgent: visitorData.userAgent,
    };

    const requestPayload = {
      ...visitorData,
      ...payload,
    };

    // Build URL with tracking parameters
    const url = new URL(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/external-landing/visit`
    );

    // Add tracking parameters to URL if they exist
    if (visitorData) {
      Object.entries(visitorData).forEach(([key, value]) => {
        if (
          value &&
          key !== "uuid" &&
          key !== "ipAddress" &&
          key !== "userAgent"
        ) {
          url.searchParams.append(key, value as string);
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
