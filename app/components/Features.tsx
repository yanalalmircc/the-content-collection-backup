import Image from "next/image";

export const Features = () => {
  return (
    <div className="container-fluid pt-3 pb-5 info">
      <div className="container">
        <div className="row gx-2">
          <div className="col-12 col-md-4 mb-5 mb-md-0 dots">
            <Image
              className="info_icon p-4 mx-auto"
              src="/images/fortified_security.png"
              alt="fortified security"
              width={100}
              height={100}
            />
            <p className="info-text-sub text-center">Fortified Security</p>
            <p className="info-text text-center pt-2">
              Your data, always protected
            </p>
          </div>
          <div className="col-12 col-md-4 mb-5 mb-md-0 dots">
            <Image
              className="info_icon p-4 mx-auto"
              src="/images/unlimited_flexibility.png"
              alt="unlimited flexibility"
              width={100}
              height={100}
            />
            <p className="info-text-sub text-center">Unlimited Flexibility</p>
            <p className="info-text text-center pt-2">
              Stream and share with no limits
            </p>
          </div>
          <div className="col-12 col-md-4 mb-0 mb-md-0 dots">
            <Image
              className="info_icon p-4 mx-auto"
              src="/images/universal_access.png"
              alt="universal access"
              width={100}
              height={100}
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
