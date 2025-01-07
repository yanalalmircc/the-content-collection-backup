"use client";

import React from "react";
import { PriceData } from "@/app/lib/types";
import { registerVisit } from "@/app/api/registerVisit";

export const usePriceData = () => {
  const [priceData, setPriceData] = React.useState<PriceData>({
    trialPrice: "",
    price: "",
  });
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);
  const [retryCount, setRetryCount] = React.useState(0);
  const maxRetries = 3;

  React.useEffect(() => {
    async function fetchPriceData() {
      try {
        const data = await registerVisit();
        setPriceData({
          trialPrice: data?.trialPrice,
          price: data?.price,
        });
      } catch (err) {
        console.error("Failed to fetch price data:", err);
        if (retryCount < maxRetries) {
          // Wait for 1 second before retrying
          setTimeout(() => {
            setRetryCount((prev) => prev + 1);
          }, 1000);
        } else {
          setError(
            err instanceof Error ? err : new Error("Failed to fetch price data")
          );
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchPriceData();
  }, [retryCount]);

  return { priceData, isLoading, error };
};
