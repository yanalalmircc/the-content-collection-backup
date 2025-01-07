"use server";

import axios from "axios";
import { SignUpPayload } from "@/app/lib/types";
import { cookies } from "next/headers";

export const signUpVisitor = async (formData: Partial<SignUpPayload>) => {
  try {
    const cookieStore = cookies();
    const visitorCookie = cookieStore.get("visitor");
    const visitorData = visitorCookie ? JSON.parse(visitorCookie.value) : {};

    const payload: SignUpPayload = {
      landingId: Number(process.env.NEXT_PUBLIC_LANDING_ID),
      uuid: visitorData.uuid,
      url: "https://thecontentcollection.com",
      ip: visitorData.ipAddress,
      userAgent: visitorData.userAgent,
    };

    const requestPayload = {
      ...payload,
      ...formData, // Allow any passed parameters to override defaults
      ...visitorData,
    };

    // Build URL with tracking parameters
    const url = new URL(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/external-landing/sign-up`
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
    console.error("Failed to sign up visitor:", error);
    throw error;
  }
};
