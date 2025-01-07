import Image from "next/image";

export const Parallel = () => {
  return (
    <div className="container-fluid py-5 space_for_icon">
      <div className="container py-3">
        <div className="row g-2">
          <div className="col-12 col-md-8 d-block mx-auto">
            <Image
              className="icon"
              src="/images/icon.png"
              alt="icon"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
