const CarousalComponent = () => {
  return (
    <div className="container-fluid pr-0 pl-0">
      <div
        className="slider-carousel owl-carousel carousel-navs"
        data-slide="1"
        data-slide-rs="1"
        data-autoplay="true"
        data-nav="true"
        data-dots="false"
        data-space="0"
        data-loop="true"
        data-speed="800"
        data-slider-id="#custom-carousel"
      >
        <div className="slide ">
          <div className="bg-section">
            <img src="/assets/photos/0-main.jpg" alt="Background" />
          </div>
          <div className="container">
            <div className="slide-content">
              <div className="row">
                <div className="col-12 col-lg-7">
                  <h1 className="slide-headline">
                    true healthcare for your family
                  </h1>
                </div>
                <div className="col-12 col-lg-6">
                  <p className="slide-desc">
                    The health and well-being of our patients and their health
                    care team will always be our priority, so we follow the best
                    practices.{' '}
                  </p>
                  <div className="slide-list">
                    <div className="icon">
                      {' '}
                      <i className=" flaticon-025-examination"></i>
                      <p>exmination</p>
                    </div>
                    <div className="icon">
                      {' '}
                      <i className=" flaticon-019-prescription"></i>
                      <p>prescription</p>
                    </div>
                    <div className="icon">
                      {' '}
                      <i className=" flaticon-043-cardiogram"></i>
                      <p>cardiogram</p>
                    </div>
                    <div className="icon">
                      {' '}
                      <i className=" flaticon-046-blood-pressure"></i>
                      <p>blood pressure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide ">
          <div className="bg-section">
            <img src="/assets/photos/1-lobby-pharmacy.jpg" alt="Background" />
          </div>
          <div className="container">
            <div className="slide-content">
              <div className="row">
                <div className="col-12 col-lg-7">
                  <h1 className="slide-headline">
                    provide aspects of medical care
                  </h1>
                </div>
                <div className="col-12 col-lg-6">
                  <p className="slide-desc">
                    The health and well-being of our patients and their health
                    care team will always be our priority, so we follow the best
                    practices.{' '}
                  </p>
                  <div className="slide-list">
                    <div className="icon">
                      {' '}
                      <i className=" flaticon-025-examination"></i>
                      <p>exmination</p>
                    </div>
                    <div className="icon">
                      {' '}
                      <i className=" flaticon-019-prescription"></i>
                      <p>prescription</p>
                    </div>
                    <div className="icon">
                      {' '}
                      <i className=" flaticon-043-cardiogram"></i>
                      <p>cardiogram</p>
                    </div>
                    <div className="icon">
                      {' '}
                      <i className=" flaticon-046-blood-pressure"></i>
                      <p>blood pressure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarousalComponent
