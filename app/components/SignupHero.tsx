import { Button, SignupHeroDisclaimer } from "@/app/components";
import { usePriceData } from "@/app/hooks/usePriceData";

export const SignupHero = () => {
  return (
    <div className="container-fluid pt-0 py-md-5 mb-5" id="main">
      <div className="container">
        <div className="row g-2">
          <div className="col-12 col-lg-8 mx-auto">
            <div className="row g-2 align-items-center glow_bg pt-0 py-md-5">
              <div className="col-12 col-md-6 d-flex flex-column py5">
                <p className="main_title text-center py-0 d-block d-md-none">
                  <span>mobile</span> Activation
                </p>
                <p className="main_title text-center py-5 d-none d-md-block">
                  <span>Web</span> Activation
                </p>
              </div>
              <div className="col-12 col-md-6">
                <Button />
                <SignupHeroDisclaimer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
