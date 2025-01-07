import Image from "next/image";

export const About = () => {
  return (
    <div className="container-fluid py-5" id="about">
      <div className="container pt-3">
        <div className="row g-2">
          <div className="col-12">
            <h1 className="title text-center border_bottom py-3">
              Keep the excitement rolling
            </h1>
          </div>
          <div className="col-12 col-md-6 d-block mx-auto pt-3">
            <p className="about-text text-center">
              Why settle for boring when you can have the best? Our top-tier
              entertainment bundles bring non-stop fun with the hottest movies,
              keeping every moment packed with excitement and unforgettable
              thrills!&quot;
            </p>
          </div>
          <div className="col-12 col-md-8 d-block mx-auto pt-3">
            <Image
              src="/images/content.png"
              alt="content"
              width={860}
              height={450}
            />
          </div>
          <div className="col-12 col-md-6 d-block mx-auto pt-5">
            <p className="about-text text-center">
              Enjoy unlimited access to over 1,000 movies, 50 sports channels,
              500 games, and a vast selection of music stations. Upgrade with an
              optional package featuring 200+ live concert streams!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
