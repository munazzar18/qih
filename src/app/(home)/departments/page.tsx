import Link from 'next/link'
import React from 'react'

const DepartmentsPage = () => {
  return (
    <div className="wrapper clearfix" id="wrapperParallax">
      <section className="hero hero-9 bg-overlay bg-overlay-dark">
        <div className="bg-section">
          {' '}
          <img src="/assets/images/sliders/3.jpg" alt="background" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-12 col-lg-5">
                <h2 className="hero-title">
                  wide range of medical services for your family
                </h2>
                <p className="hero-desc">
                  The healt and well-being of our patients and their health care
                  teamwill always be our priorty, so we best practices
                </p>
                <div className="hero-action">
                  {' '}
                  <a
                    className="btn btn--white btn-line btn-line-after btn-line-inversed"
                    href="#"
                  >
                    {' '}
                    <span>more about us</span>
                    <span className="line">
                      <span></span>
                    </span>
                  </a>
                  <a
                    className="popup-video btn-video btn-video-2"
                    href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                  >
                    {' '}
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
              <div className="col-12">
                <ol className="breadcrumb d-flex justify-content-center">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/departments">departments</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="departments" id="departments-1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-3">
              <div className="heading heading-12 heading-13 text-center">
                <p className="heading-subtitle">
                  the best medical and general practice care!
                </p>
                <h2 className="heading-title">
                  providing medical care for stickest in our community.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" col-12 col-md-6 col-lg-4">
              <div className="department-panel" data-hover="">
                <div className="department-panel-holder">
                  <div className="department-img">
                    <Link href="/departments"></Link>
                    <img
                      src="assets/images/departments/1.jpg"
                      alt="department img"
                    />
                  </div>
                  <div className="department-content">
                    <div className="department-title">
                      <h4>
                        <Link href="/departments">Neurology Clinic</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-12 col-md-6 col-lg-4">
              <div className="department-panel" data-hover="">
                <div className="department-panel-holder">
                  <div className="department-img">
                    <Link href="/departments"></Link>
                    <img
                      src="assets/images/departments/2.jpg"
                      alt="department img"
                    />
                  </div>
                  <div className="department-content">
                    <div className="department-title">
                      <h4>
                        <Link href="/departments">Cardiology Clinic</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-12 col-md-6 col-lg-4">
              <div className="department-panel" data-hover="">
                <div className="department-panel-holder">
                  <div className="department-img">
                    <Link href="/departments"></Link>
                    <img
                      src="assets/images/departments/3.jpg"
                      alt="department img"
                    />
                  </div>
                  <div className="department-content">
                    <div className="department-title">
                      <h4>
                        <Link href="/departments">Pathology Clinic</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-12 col-md-6 col-lg-4">
              <div className="department-panel" data-hover="">
                <div className="department-panel-holder">
                  <div className="department-img">
                    <Link href="/departments"></Link>
                    <img
                      src="assets/images/departments/4.jpg"
                      alt="department img"
                    />
                  </div>
                  <div className="department-content">
                    <div className="department-title">
                      <h4>
                        <Link href="/departments">Pediatric Clinic</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-12 col-md-6 col-lg-4">
              <div className="department-panel" data-hover="">
                <div className="department-panel-holder">
                  <div className="department-img">
                    <Link href="/departments"></Link>
                    <img
                      src="assets/images/departments/5.jpg"
                      alt="department img"
                    />
                  </div>
                  <div className="department-content">
                    <div className="department-title">
                      <h4>
                        <Link href="/departments">Laboratory Analysis</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-12 col-md-6 col-lg-4">
              <div className="department-panel" data-hover="">
                <div className="department-panel-holder">
                  <div className="department-img">
                    <Link href="/departments"></Link>
                    <img
                      src="assets/images/departments/6.jpg"
                      alt="department img"
                    />
                  </div>
                  <div className="department-content">
                    <div className="department-title">
                      <h4>
                        <Link href="/departments">ophthalmology Clinic</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DepartmentsPage
