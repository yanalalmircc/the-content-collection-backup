import { FooterDisclaimer } from "@/app/components";

export const Footer = () => {
  return (
    <div className="container-fluid footer-box">
      <div className="row gx-2">
        <div className="col-12 mx-auto p-4 mt-2 text-center footer-link-box">
          <p className="footer-address">thecontentcollection</p>
          <div className="footer-links">
            {/* <a href="/faq">FAQ</a> */}
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            {/* <a href="/cancel">Disclaimer</a> */}
          </div>
          <FooterDisclaimer />
        </div>
      </div>
    </div>
  );
};
