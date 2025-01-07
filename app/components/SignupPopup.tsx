"use client";
import { SignupForm } from "./SignupForm";

export const SignupPopup = () => {
  const closePopup = () => {
    const popup = document.getElementById("popupOverlay");
    popup?.classList.remove("show");
  };
  return (
    <div className="popup-overlay" id="popupOverlay">
      <div className="container popup-content p-0 mb-5">
        <span className="close-btn" onClick={closePopup}>
          &times;
        </span>
        <div className="row align-items-center m-0 p-0">
          <div className="col-12 col-lg-6 d-md-flex flex-md-column pt-3 pb-2  py-md-5">
            <p className="upper-text mb-0 pb-0">Access your materials</p>
            <p className="guide">
              in <span>3 Simple</span> steps
            </p>
            <div className="steps-popup text-start d-flex mx-auto align-items-center py-2">
              <span className="me-1 bulb purple">1</span>
              <span className="popup_step-text d-flex">
                Set up your complimentary account
              </span>
            </div>
            <div className="steps-popup text-start d-flex mx-auto align-items-center py-2">
              <span className="me-1 bulb">2</span>
              <span className="popup_step-text d-flex">
                Validate your account with a credit card
              </span>
            </div>
            <div className="steps-popup text-start d-flex mx-auto align-items-center py-2">
              <span className="me-1 bulb">3</span>
              <span className="popup_step-text d-flex">
                Access your materials
              </span>
            </div>
          </div>
          <div className="col-12 col-lg-6 input-part py-2 py-md-5">
            <p className="upper-text mb-0 pb-0">
              Set up your
              <br />
              complimentary account
            </p>
            <SignupForm />
            <p className="main-text text-center py-4 pb-md-0">
              By pressing &quot;Proceed&quot;, you consent to the{" "}
              <a
                href="https://thecontentcollection.com/terms"
                target="_blank"
                className="main-text"
              >
                Terms & Agreements
              </a>{" "}
              and the{" "}
              <a
                href="https://thecontentcollection.com/privacy"
                target="_blank"
                className="main-text"
              >
                Privacy Statement
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
