"use client";

import { usePriceData } from "@/app/hooks/usePriceData";

export const SignupHeroDisclaimer = () => {
  const { priceData, isLoading } = usePriceData();
  return (
    <p className="main-text text-center pt-4">
      {isLoading ? (
        "Loading pricing..."
      ) : (
        <>
          The first day is only ${priceData.trialPrice}, then ${priceData.price}{" "}
          USD/month (cancel anytime).
        </>
      )}{" "}
      <br />
      <br />
      Enjoy unlimited access to over 1,000 movies, 50 sports channels, 500
      games, and a vast selection of music stations. Upgrade with an optional
      package featuring 200+ live concert streams!
    </p>
  );
};
