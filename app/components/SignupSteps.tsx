export const SignupSteps = () => {
  return (
    <div className="container-fluid py-3 steps">
      <div className="container pt-0">
        <div className="row g-2">
          <div className="col-12 py-md-3">
            <h1 className="title text-center capitalize">
              Gain Access in Three simple steps
            </h1>
            <div className="row gx-2 py-1 pt-md-4 pb-md-3 border_bottom">
              <div className="col-12 col-md-4 mb-2 mb-md-0 dots">
                <p className="steps-text text-center">
                  <span className="me-1">1</span> Register Account
                </p>
              </div>
              <div className="col-12 col-md-4 mb-2 mb-md-0 dots">
                <p className="steps-text text-center">
                  <span className="me-1">2</span> Confirm Account
                </p>
              </div>
              <div className="col-12 col-md-4 mb-0 mb-md-0 dots">
                <p className="steps-text text-center">
                  <span className="me-1">3</span> Download Content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
