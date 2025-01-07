import Image from "next/image";

export const SignupInfo = () => {
  return (
    <div className="container-fluid pt-3 pb-5 info">
      <div className="container">
        <div className="row gx-2">
          <div className="col-12 col-md-4 mb-5 mb-md-0 dots">
            <Image
              alt="fortified_security"
              className="info_icon p-4 mx-auto"
              src="/images/fortified_security.png"
              width={150}
              height={150}
            />
            <p className="info-text-sub text-center">Fortified Security</p>
            <p className="info-text text-center pt-2">
              Your data, always protected
            </p>
          </div>
          <div className="col-12 col-md-4 mb-5 mb-md-0 dots">
            <Image
              alt="unlimited_flexibility"
              className="info_icon p-4 mx-auto"
              src="/images/unlimited_flexibility.png"
              width={150}
              height={150}
            />
            <p className="info-text-sub text-center">Unlimited Flexibility</p>
            <p className="info-text text-center pt-2">
              Stream and share with no limits
            </p>
          </div>
          <div className="col-12 col-md-4 mb-0 mb-md-0 dots">
            <Image
              alt="universal_access"
              className="info_icon p-4 mx-auto"
              src="/images/universal_access.png"
              width={150}
              height={150}
            />
            <p className="info-text-sub text-center">Universal Access</p>
            <p className="info-text text-center pt-2">
              Any device, anytime, anywhere
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
