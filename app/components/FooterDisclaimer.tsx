"use client";

import { usePriceData } from "@/app/hooks/usePriceData";

export const FooterDisclaimer = () => {
  const { priceData, isLoading } = usePriceData();
  return (
    <p className="footer-disclaimer">
      {isLoading ? (
        "Loading disclaimer..."
      ) : (
        <>
          the contentcollection.com offers subscription-based health and
          lifestyle services. Your subscription will automatically renew. By
          subscribing to our service, you accept all terms and conditions. Offer
          and billing terms: try our service for ${priceData.trialPrice} for the
          first day. If you decide the service isn&apos;t for you, you may
          cancel anytime within the 1-day membership. At the end of this period,
          we will automatically continue your membership on a monthly basis,
          charging the credit card provided with the applicable monthly $
          {priceData.price} fee, for as long as you remain subscribed. You may
          cancel at any time to stop future recurring charges. For inquiries,
          please contact help@thecontentcollection.com or call +18882349172.
        </>
      )}
    </p>
  );
};
