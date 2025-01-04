import Topbar from "@/components/Topbar";
import React from "react";


const page = () => {
  return (
    <>
   <Topbar />
    <div>
      {/* <div className="preloader">
        <div className="spinner">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div>
      </div> */}
      <div className="wrapper clearfix" id="wrapperParallax">
        <div className="module-content module-fullscreen module-search-box">
          <div className="pos-vertical-center">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                  <form className="form-search">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="type words then enter"
                    />
                    <button></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <a className="module-cancel" href="#">
            <i className="fas fa-times"></i>
          </a>
        </div>

        <header className="header header-light header-topbar" id="navbar-spy"> 
          <nav
            className="navbar navbar-expand-xl navbar-sticky"
            id="primary-menu"
          >
            <a className="navbar-brand" href="index.html">
              <img
                className="logo logo-dark"
                src="assets/images/logo/logo.png"
                alt="Medisch Logo"
              />
            
              <img
                className="logo logo-mobile"
                src="assets/images/logo/logo.png"
                alt="Medisch Logo"
              />
            </a>
            <div className="module-holder module-holder-phone">
              <div className="module module-search float-left">
                <div className="module-icon search-icon">
                  <i className="icon-search" data-hover=""></i>
                </div>
              </div>
              <div className="module module-language">
                <div className="selected">
                  <img src="assets/images/module-language/en.png" alt="alt" />
                  <span>english</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="lang-list">
                  <ul>
                    <li>
                      {" "}
                      <img
                        src="assets/images/module-language/en.png"
                        alt="alt"
                      />
                      <a href="#">english</a>
                    </li>
                    <li>
                      {" "}
                      <img
                        src="assets/images/module-language/ar.png"
                        alt="alt"
                      />
                      <a href="#">arabic</a>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav ">
                <li className="nav-item has-dropdown active" data-hover="">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <span>Home</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item current">
                      <a href="/">
                        <span>Home main</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="home-modern.html">
                        <span>home modern</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="home-classicName.html">
                        <span>home classicName</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="home-dentist.html">
                        <span>home dentist</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="home-pharmacy.html">
                        <span>home pharmacy</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-dropdown" data-hover="">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <span>about us</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="page-about.html">
                        <span>about us</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="page-our-services.html">
                        <span>medical services</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="single-service.html">
                        <span>single service</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="page-pricing.html">
                        <span>pricing &amp; plans</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="page-appointments.html">
                        <span>appointments</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="page-faqs.html">
                        <span>help &amp; fAQs</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="page-gallery.html">
                        <span>our gallery</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-dropdown" data-hover="">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <span>Service</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="doctors-timetable.html">
                        <span>doctors timetable</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="doctors-standard.html">
                        <span>doctors standard</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="doctors-modern.html">
                        <span>doctors modern</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="doctors-grid.html">
                        <span>doctors grid</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="doctors-single-modern.html">
                        <span>single doctor modern</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="doctors-single-standard.html">
                        <span>single doctor classicName</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-dropdown" data-hover="">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <span>car</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="blog-grid-fullwidth.html">
                        <span>our blog</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-standard.html">
                        <span>blog-standard</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-single-sidebar.html">
                        <span>single blog post</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-dropdown" data-hover="">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <span>Gallery</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="shop-products.html">
                        <span>our products</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="shop-single.html">
                        <span>single product</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="shop-cart.html">
                        <span>cart</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="shop-checkout.html">
                        <span>checkout</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="shop-account.html">
                        <span>my account</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="nav-item has-dropdown"
                  id="departments"
                  data-hover=""
                >
                  <a
                    className="dropdown-toggle"
                    href="page-departments.html"
                    data-toggle="dropdown"
                  >
                    <span>departments</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="neurology-clinic.html">
                        <span>neurology clinic</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pathology-clinic.html">
                        <span>pathology clinic</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="laboratory-analysis.html">
                        <span>laboratory analysis</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pediatric-clinic.html">
                        <span>pediatric clinic</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="cardiac-clinic.html">
                        <span>cardiac clinic</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="ophthalmology-clinic.html">
                        <span>ophthalmology clinic</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item" id="contact" data-hover="">
                  <a href="contact.html">
                    <span>contact</span>
                  </a>
                </li>
              </ul>
              <div className="module-holder">
                <div className="module module-search float-left">
                  <div className="module-icon search-icon">
                    <i className="icon-search" data-hover=""></i>
                  </div>
                </div>
                <div className="module-contact">
                  <a
                    className="btn btn--secondary"
                    href="doctors-timetable.html"
                  >
                    doctors' timetable
                  </a>
                  <a
                    className="btn btn--primary btn-line btn-line-after"
                    href="page-appointments.html"
                  >
                    {" "}
                    <span>make appointment</span>
                    <span className="line">
                      {" "}
                      <span></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          
        </header>
        <section className="slider slider-2" id="slider-2">
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
              <div className="slide bg-overlay bg-overlay-dark-slider">
                <div className="bg-section">
                  <img src="assets/images/sliders/1.jpg" alt="Background" />
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
                          The health and well-being of our patients and their
                          health care team will always be our priority, so we
                          follow the best practices.{" "}
                        </p>
                        <div className="slide-list">
                          <div className="icon">
                            {" "}
                            <i className=" flaticon-025-examination"></i>
                            <p>exmination</p>
                          </div>
                          <div className="icon">
                            {" "}
                            <i className=" flaticon-019-prescription"></i>
                            <p>prescription</p>
                          </div>
                          <div className="icon">
                            {" "}
                            <i className=" flaticon-043-cardiogram"></i>
                            <p>cardiogram</p>
                          </div>
                          <div className="icon">
                            {" "}
                            <i className=" flaticon-046-blood-pressure"></i>
                            <p>blood pressure</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide bg-overlay bg-overlay-dark-slider">
                <div className="bg-section">
                  <img src="assets/images/sliders/2.jpg" alt="Background" />
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
                          The health and well-being of our patients and their
                          health care team will always be our priority, so we
                          follow the best practices.{" "}
                        </p>
                        <div className="slide-list">
                          <div className="icon">
                            {" "}
                            <i className=" flaticon-025-examination"></i>
                            <p>exmination</p>
                          </div>
                          <div className="icon">
                            {" "}
                            <i className=" flaticon-019-prescription"></i>
                            <p>prescription</p>
                          </div>
                          <div className="icon">
                            {" "}
                            <i className=" flaticon-043-cardiogram"></i>
                            <p>cardiogram</p>
                          </div>
                          <div className="icon">
                            {" "}
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
        </section>

        <section className="features-bar" id="featuresBar-1">
          <div className="bg-section">
            {" "}
            <img
              src="assets/images/background/pattern-2.jpg"
              alt="background"
            />
          </div>
          <div className="container">
            <div className="row g-0 features-holder">
              <div className="col-12 col-lg-3">
                <div className="feature-panel feature-reservation">
                  <div className="feature-content">
                    <i className="flaticon-022-medical"></i>
                    <h5>emergency cases</h5>
                    <p>
                      Please feel welcome to contact our staff with any general
                      or medical enquiry call us
                    </p>
                    <a href="tel:0106123214">
                      <span className="fas fa-phone-alt"></span> 0106123214
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="feature-panel feature-timetable">
                  <div className="feature-content">
                    <i className="flaticon-028-book"></i>
                    <h5>doctors timetable</h5>
                    <p>
                      Qualified doctors available six days a week, view our
                      timetable to make an appointment.
                    </p>
                    <a
                      className="btn btn--transparent btn-line btn-line-before"
                      href="#"
                    >
                      {" "}
                      <span className="line">
                        {" "}
                        <span> </span>
                      </span>
                      <span>view timetable</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="feature-panel feature-opening-hours">
                  <div className="feature-content">
                    <i className="flaticon-014-uniform"></i>
                    <h5>opening hours </h5>
                    <ul className="list-unstyled">
                      <li>
                        {" "}
                        <span>monday-friday</span>
                        <span>8:00 - 7:00 pm</span>
                      </li>
                      <li>
                        {" "}
                        <span>saturday</span>
                        <span>9:00 - 8:00 pm</span>
                      </li>
                      <li>
                        {" "}
                        <span>sunday</span>
                        <span>10:00 - 9:00 pm</span>
                      </li>
                      <li>
                        {" "}
                        <span>emergency</span>
                        <span>24HR / 7DAYS</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="feature-panel feature-location">
                  <div className="feature-content">
                    <i className="flaticon-042-clinic"></i>
                    <h5>location, directions </h5>
                    <p>
                      2307 Beverley Rd Brooklyn, New York 11226 United States.
                    </p>
                    <div className="map-img">
                      {" "}
                      <a href="contact.html"></a>
                      <img src="assets/images/background/map.jpg" alt="map" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="heading heading-15">
              <div className="row">
                <div className="col-12 col-lg-5">
                  <h2 className="heading-title">
                    Caring For The Health And Well Being Of You And Your Family.
                  </h2>
                </div>
                <div className="col-12 col-lg-6 offset-lg-1">
                  <p className="paragraph">
                    We provide all aspects of medical practice for your whole
                    family, including general check-ups or assisting you with
                    specific injuries.
                  </p>
                  <p className="heading-desc">
                    We will work with you to develop individualised care plans,
                    including management of chronic diseases. If we cannot
                    assist, we can provide referrals or advice about the type of
                    practitioner you require. We treat all enquiries sensitively
                    and in the strictest
                  </p>
                  <div className="actions-holder">
                    <a
                      className="btn btn--primary btn-line btn-line-after"
                      href="doctors-grid.html"
                    >
                      {" "}
                      <span>find a doctor</span>
                      <span className="line">
                        {" "}
                        <span></span>
                      </span>
                    </a>
                    <a className="btn btn--white" href="page-about.html">
                      more about us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about about-2" id="about-2">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="about-img">
                  <img
                    className="img-fluid"
                    src="assets/images/about/5.jpg"
                    alt="about Image"
                  />
                  <a
                    className="popup-video btn-video"
                    href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                  >
                    {" "}
                    <i className="fas fa-play"></i>
                    <span>watch our presentation!</span>
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-3 offset-lg-1">
                <div className="heading heading-16">
                  <p className="heading-desc">
                    We’re here to care for you and your entire family. Regular
                    visits to the doctor will depend on your age and general
                    health!
                  </p>
                </div>
                <ul className="advantages-list">
                  <li>
                    <i className="fas fa-check"></i> Health assessments
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Home medicine review
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Fractures and dislocations
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Desensitisation injections
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="departments departments-2" id="departments-2">
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
                      <a href="page-departments.html"></a>
                      <img
                        src="assets/images/departments/1.jpg"
                        alt="department img"
                      />
                    </div>
                    <div className="department-content">
                      <div className="department-title">
                        <h4>
                          <a href="page-departments.html">Neurology Clinic</a>
                        </h4>
                      </div>
                      <div className="department-desc">
                        <p>
                          Some neurologists receive subspecialty training
                          focusing on a particular area of the fields, these
                          training programs called fellowships, and one to two
                          years.
                        </p>
                      </div>
                      <ul className="department-list list-unstyled">
                        <li>
                          <i className="fas fa-check"></i>{" "}
                          <span>neurocritical care</span>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>{" "}
                          <span>neuro oncolgy</span>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>{" "}
                          <span>geriatric neurology</span>
                        </li>
                      </ul>
                      <div className="department-more">
                        <a
                          className="btn btn--white btn-line btn-line-before btn-line-inversed"
                          href="page-departments.html"
                        >
                          {" "}
                          <span className="line">
                            {" "}
                            <span></span>
                          </span>
                          <span>read more</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-md-6 col-lg-4">
                <div className="department-panel" data-hover="">
                  <div className="department-panel-holder">
                    <div className="department-img">
                      <a href="page-departments.html"></a>
                      <img
                        src="assets/images/departments/2.jpg"
                        alt="department img"
                      />
                    </div>
                    <div className="department-content">
                      <div className="department-title">
                        <h4>
                          <a href="page-departments.html">Cardiology Clinic</a>
                        </h4>
                      </div>
                      <div className="department-desc">
                        <p>
                          All cardiologists study the disorders of the heart,
                          but the study of adult and child heart disorders are
                          trained to take care of small children...
                        </p>
                      </div>
                      <ul className="department-list list-unstyled">
                        <li>
                          <i className="fas fa-check"></i>{" "}
                          <span>neurocritical care</span>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>{" "}
                          <span>neuro oncolgy</span>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>{" "}
                          <span>geriatric neurology</span>
                        </li>
                      </ul>
                      <div className="department-more">
                        <a
                          className="btn btn--white btn-line btn-line-before btn-line-inversed"
                          href="page-departments.html"
                        >
                          {" "}
                          <span className="line">
                            {" "}
                            <span></span>
                          </span>
                          <span>read more</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-md-6 col-lg-4">
                <div className="department-panel" data-hover="">
                  <div className="department-panel-holder">
                    <div className="department-img">
                      <a href="page-departments.html"></a>
                      <img
                        src="assets/images/departments/3.jpg"
                        alt="department img"
                      />
                    </div>
                    <div className="department-content">
                      <div className="department-title">
                        <h4>
                          <a href="page-departments.html">Pathology Clinic</a>
                        </h4>
                      </div>
                      <div className="department-desc">
                        <p>
                          Pathology is the study of disease, it is the bridge
                          between science and medicine. Also it underpins every
                          aspect of patient care, from diagnostic testing...
                        </p>
                      </div>
                      <ul className="department-list list-unstyled">
                        <li>
                          <i className="fas fa-check"></i>{" "}
                          <span>neurocritical care</span>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>{" "}
                          <span>neuro oncolgy</span>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>{" "}
                          <span>geriatric neurology</span>
                        </li>
                      </ul>
                      <div className="department-more">
                        <a
                          className="btn btn--white btn-line btn-line-before btn-line-inversed"
                          href="page-departments.html"
                        >
                          {" "}
                          <span className="line">
                            {" "}
                            <span></span>
                          </span>
                          <span>read more</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="departments-action">
              <div className="row">
                <div className="col-12 col-lg-5">
                  <p>
                    Today hospital is recognised as a world renowned
                    institution, not only providing outstanding care and
                    treatment, but improving the outcomes for all.
                  </p>
                </div>
                <div className="col-12 col-lg-5 offset-lg-2">
                  <div className="doctor-action">
                    <a
                      className="btn btn--secondary btn-line btn-line-after"
                      href="page-appointments.html"
                    >
                      {" "}
                      <span>make appointment</span>
                      <span className="line">
                        {" "}
                        <span></span>
                      </span>
                    </a>
                    <div className="doctor-info">
                      <div className="doctor-img">
                        {" "}
                        <img
                          src="assets/images/testimonial/5.jpg"
                          alt="image"
                        />
                      </div>
                      <div className="doctor-body">
                        {" "}
                        <a href="tel:0106123214">01061245741</a>
                        <p>Call 24HR / 7Days</p>
                      </div>
                      <i className="fas fa-phone-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="features features-2 bg-overlay bg-overlay-theme3 bg-parallax"
          id="features-2"
        >
          <div className="bg-section">
            {" "}
            <img src="assets/images/background/1.jpg" alt="Background" />
          </div>
          <div className="container">
            <div className="heading heading-14 heading-light">
              <div className="row">
                <div className="col-12 col-lg-5">
                  <p className="heading-subtitle">
                    Sets The Standard For High Quality Care Since
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-5">
                  <h2 className="heading-title">1987</h2>
                </div>
                <div className="col-12 col-lg-6 offset-lg-1">
                  <p className="paragraph">
                    Our doctors include highly qualified male and female
                    practitioners who come from a range of backgrounds and bring
                    a diversity of skills. Our administration and support staff
                    all have exceptional people skills.
                  </p>
                  <p className="heading-desc">
                    Our administration and support staff all have exceptional
                    people skills and trained to assist you with all medical
                    enquiries.
                  </p>
                  <div className="signature-block">
                    <a
                      className="btn btn--primary btn--inversed btn-line btn-line-after"
                      href="#"
                    >
                      <span>our core values</span>
                      <span className="line">
                        {" "}
                        <span></span>
                      </span>
                    </a>
                    <div className="signature-body">
                      <h6>john winston</h6>
                      <p>pediatrician</p>
                      <img
                        className="signature-img"
                        src="assets/images/signature/2.png"
                        alt="signature"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-holder">
              <div>
                <div className="feature-panel-holder" data-hover="">
                  <div className="feature-panel feature-panel-dark">
                    <div className="feature-icon">
                      <i className="flaticon-007-stethoscope"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Medical Advices &amp; Check Ups</h4>
                      <p>Consult our doctors any time.</p>
                    </div>
                    <a href="javascript:void(0)">
                      <i className="fas fa-angle-down"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="feature-panel-holder" data-hover="">
                  <div className="feature-panel feature-panel-dark">
                    <div className="feature-icon">
                      <i className="flaticon-026-education"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Trusted Medical Treatment</h4>
                      <p>Free coverage adults with limited income.</p>
                    </div>
                    <a href="javascript:void(0)">
                      <i className="fas fa-angle-down"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="feature-panel-holder" data-hover="">
                  <div className="feature-panel feature-panel-dark">
                    <div className="feature-icon">
                      <i className="flaticon-036-aid"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Emergency Help Available</h4>
                      <p>Contact our reception staff any time.</p>
                    </div>
                    <a href="javascript:void(0)">
                      <i className="fas fa-angle-down"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="feature-panel-holder" data-hover="">
                  <div className="feature-panel feature-panel-dark">
                    <div className="feature-icon">
                      <i className="flaticon-032-medicine"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Medical Research</h4>
                      <p>Provide all medical aspects practice</p>
                    </div>
                    <a href="javascript:void(0)">
                      <i className="fas fa-angle-down"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="feature-panel-holder" data-hover="">
                  <div className="feature-panel feature-panel-dark">
                    <div className="feature-icon">
                      <i className="flaticon-046-blood-pressure"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Only Qualified Doctors</h4>
                      <p>Qualified doctors available 24/7</p>
                    </div>
                    <a href="javascript:void(0)">
                      <i className="fas fa-angle-down"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="more-features more-features-2">
              <p>
                Delivering tomorrow’s health care for your family.{" "}
                <a href="doctors-timetable.html">view doctors' timetable </a>
              </p>
            </div>
            <div className="features-card">
              <div className="card-panel reversed">
                <div className="panel-icon">
                  <i className="flaticon-004-transplant-box"></i>
                </div>
                <div className="panel-body">
                  <h4>Healthcare Programs</h4>
                  <p>
                    We have put protocols to protect our patients to provide
                    medically necessary care.
                  </p>
                  <a className="btn btn-line btn-line-after" href="#">
                    <span>explore programs</span>
                    <span className="line">
                      {" "}
                      <span> </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="card-panel">
                <div className="panel-icon">
                  {" "}
                  <i className="flaticon-042-clinic"></i>
                </div>
                <div className="panel-body">
                  <h4>Locations & Directions</h4>
                  <p>
                    Feel welcome to contact our friendly reception staff, our
                    doctors will receive your urgent calls.
                  </p>
                  <a className="btn btn-line btn-line-before" href="#">
                    <span className="line">
                      {" "}
                      <span> </span>
                    </span>
                    <span>get directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="testimonial testimonial-1 testimonial-2"
          id="testimonial-2"
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-5">
                <div className="clients-img">
                  {" "}
                  <img src="assets/images/testimonial/image.png" alt="image" />
                </div>
              </div>
              <div className="col-12 col-lg-6 offset-lg-1">
                <h6 className="section-head">
                  hear the inspiring stories of our patients
                </h6>
                <div
                  className="carousel owl-carousel carousel-dots"
                  data-slide="1"
                  data-slide-rs="1"
                  data-autoplay="true"
                  data-nav="false"
                  data-dots="true"
                  data-space="0"
                  data-loop="true"
                  data-speed="800"
                >
                  <div className="testimonial-panel testimonial-panel-2">
                    <div className="testimonial-body">
                      <div className="testimonial-content">
                        <div className="testimonial-icon"></div>
                        <p>
                          Their doctors include highly qualified practitioners
                          who come from a range of backgrounds &amp; bring with
                          them a diversity of skills and special interests. They
                          also registered nurses available to triage any urgent
                          matters, and the administration and staff all have
                          exceptional skills!!
                        </p>
                        <div className="testimonial-thumb">
                          <div className="thumb-img">
                            {" "}
                            <img
                              src="assets/images/testimonial/1.jpg"
                              alt="Testimonial Author"
                            />
                            <i className="icon-Quote-Icon"></i>
                          </div>
                          <div className="thumb-body">
                            <h6>sami wade</h6>
                            <p>promina</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-panel testimonial-panel-2">
                    <div className="testimonial-body">
                      <div className="testimonial-content">
                        <div className="testimonial-icon"></div>
                        <p>
                          Their doctors include highly qualified practitioners
                          who come from a range of backgrounds &amp; bring with
                          them a diversity of skills and special interests. They
                          also registered nurses available to triage any urgent
                          matters, and the administration and staff all have
                          exceptional skills!!
                        </p>
                        <div className="testimonial-thumb">
                          <div className="thumb-img">
                            {" "}
                            <img
                              src="assets/images/testimonial/2.jpg"
                              alt="Testimonial Author"
                            />
                            <i className="icon-Quote-Icon"></i>
                          </div>
                          <div className="thumb-body">
                            <h6>john peter</h6>
                            <p>optima inc</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-panel testimonial-panel-2">
                    <div className="testimonial-body">
                      <div className="testimonial-content">
                        <div className="testimonial-icon"></div>
                        <p>
                          Their doctors include highly qualified practitioners
                          who come from a range of backgrounds &amp; bring with
                          them a diversity of skills and special interests. They
                          also registered nurses available to triage any urgent
                          matters, and the administration and staff all have
                          exceptional skills!!
                        </p>
                        <div className="testimonial-thumb">
                          <div className="thumb-img">
                            {" "}
                            <img
                              src="assets/images/testimonial/3.jpg"
                              alt="Testimonial Author"
                            />
                            <i className="icon-Quote-Icon"></i>
                          </div>
                          <div className="thumb-body">
                            <h6>sony blake</h6>
                            <p>koira ind</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team team-modern team-carousel" id="teamCarousel-1">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-5">
                <div className="heading heading-5">
                  <h2 className="heading-title">meet our doctors</h2>
                  <p className="heading-desc">
                    Our administration and support staff have exceptional skills
                    and trained to assist you with all enquiries.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div
                  className="carousel owl-carousel carousel-navs"
                  data-slide="3"
                  data-slide-rs="2"
                  data-autoplay="true"
                  data-nav="true"
                  data-dots="false"
                  data-space="30"
                  data-loop="true"
                  data-speed="3000"
                >
                  <div>
                    <div className="team-member" data-hover="">
                      <div className="team-member-holder">
                        <div className="team-img">
                          <a
                            className="link"
                            href="doctors-single-modern.html"
                          ></a>
                          <img
                            src="assets/images/team/grid/1.jpg"
                            alt="team member"
                          />
                        </div>

                        <div className="team-content-holder">
                          <div className="team-content">
                            <div className="team-title">
                              <h4>
                                <a href="doctors-single-modern.html">
                                  Richard Muldoone
                                </a>
                              </h4>
                            </div>
                            <div className="team-cat">
                              <a href="#">Cardiology Specialist</a>
                            </div>
                            <div className="team-desc">
                              <p>
                                Muldoone obtained his undergraduate degree in
                                Biomedical Engineering at Tulane University
                                prior to attending St George University School
                                of Medicine.
                              </p>
                            </div>
                            <div className="team-social">
                              {" "}
                              <a href="javascript:void(0)">
                                <i className="fab fa-facebook-f"> </i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fas fa-envelope"></i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fas fa-phone-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="team-member" data-hover="">
                      <div className="team-member-holder">
                        <div className="team-img">
                          <a
                            className="link"
                            href="doctors-single-modern.html"
                          ></a>
                          <img
                            src="assets/images/team/grid/2.jpg"
                            alt="team member"
                          />
                        </div>

                        <div className="team-content-holder">
                          <div className="team-content">
                            <div className="team-title">
                              <h4>
                                <a href="doctors-single-modern.html">
                                  Michael Brian
                                </a>
                              </h4>
                            </div>
                            <div className="team-cat">
                              <a href="#">Dermatologists</a>
                            </div>
                            <div className="team-desc">
                              <p>
                                Brian specializes in treating skin, hair, nail,
                                and mucous membrane. He also address cosmetic
                                issues, helping to revitalize the skin, hair,
                                and...
                              </p>
                            </div>
                            <div className="team-social">
                              {" "}
                              <a href="javascript:void(0)">
                                <i className="fab fa-facebook-f"> </i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fas fa-envelope"></i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fas fa-phone-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="team-member" data-hover="">
                      <div className="team-member-holder">
                        <div className="team-img">
                          <a
                            className="link"
                            href="doctors-single-modern.html"
                          ></a>
                          <img
                            src="assets/images/team/grid/3.jpg"
                            alt="team member"
                          />
                        </div>

                        <div className="team-content-holder">
                          <div className="team-content">
                            <div className="team-title">
                              <h4>
                                <a href="doctors-single-modern.html">
                                  Maria Andaloro
                                </a>
                              </h4>
                            </div>
                            <div className="team-cat">
                              <a href="#">Pediatrician</a>
                            </div>
                            <div className="team-desc">
                              <p>
                                Andaloro graduated from medical school and
                                completed 3 years residency program in
                                pediatrics. She passed by the American Board of
                                Pediatrics.
                              </p>
                            </div>
                            <div className="team-social">
                              {" "}
                              <a href="javascript:void(0)">
                                <i className="fab fa-facebook-f"> </i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fas fa-envelope"></i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fas fa-phone-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="team-member" data-hover="">
                      <div className="team-member-holder">
                        <div className="team-img">
                          <a
                            className="link"
                            href="doctors-single-modern.html"
                          ></a>
                          <img
                            src="assets/images/team/grid/4.jpg"
                            alt="team member"
                          />
                        </div>
                        =
                        <div className="team-content-holder">
                          <div className="team-content">
                            <div className="team-title">
                              <h4>
                                <a href="doctors-single-modern.html">
                                  Dupree Black
                                </a>
                              </h4>
                            </div>
                            <div className="team-cat">
                              <a href="#">Urologist</a>
                            </div>
                            <div className="team-desc">
                              <p>
                                Black diagnose and treat diseases of the urinary
                                tract in both men and women. He also diagnose
                                and treat anything involving...
                              </p>
                            </div>
                            <div className="team-social">
                              {" "}
                              <a href="javascript:void(0)">
                                <i className="fab fa-facebook-f"> </i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fas fa-envelope"></i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fas fa-phone-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="team-member" data-hover="">
                      <div className="team-member-holder">
                        <div className="team-img">
                          <a
                            className="link"
                            href="doctors-single-modern.html"
                          ></a>
                          <img
                            src="assets/images/team/grid/5.jpg"
                            alt="team member"
                          />
                        </div>

                        <div className="team-content-holder">
                          <div className="team-content">
                            <div className="team-title">
                              <h4>
                                <a href="doctors-single-modern.html">
                                  Markus Skar
                                </a>
                              </h4>
                            </div>
                            <div className="team-cat">
                              <a href="#">laboratory</a>
                            </div>
                            <div className="team-desc">
                              <p>
                                Skar play a very important role in your health
                                care. People working in the clinical laboratory
                                are responsible for conducting tests.
                              </p>
                            </div>
                            <div className="team-social">
                              {" "}
                              <a href="javascript:void(0)">
                                <i className="fab fa-facebook-f"> </i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fas fa-envelope"></i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fas fa-phone-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="team-member" data-hover="">
                      <div className="team-member-holder">
                        <div className="team-img">
                          <a
                            className="link"
                            href="doctors-single-modern.html"
                          ></a>
                          <img
                            src="assets/images/team/grid/6.jpg"
                            alt="team member"
                          />
                        </div>

                        <div className="team-content-holder">
                          <div className="team-content">
                            <div className="team-title">
                              <h4>
                                <a href="doctors-single-modern.html">
                                  Kiano Barker
                                </a>
                              </h4>
                            </div>
                            <div className="team-cat">
                              <a href="#">Pathologist</a>
                            </div>
                            <div className="team-desc">
                              <p>
                                Barker help care for patients every day by
                                providing their doctors with the information
                                needed to ensure appropriate care.
                              </p>
                            </div>
                            <div className="team-social">
                              {" "}
                              <a href="javascript:void(0)">
                                <i className="fab fa-facebook-f"> </i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fas fa-envelope"></i>
                              </a>
                              <a href="javascript:void(0)">
                                <i className="fas fa-phone-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="action-bar">
                  <p className="note">
                    <span>
                      <i className="fas fa-calendar-day"></i> on monday,{" "}
                    </span>{" "}
                    Doctors will be available from 8 am : 12 am , kindly call to
                    confirm your Appointment{" "}
                  </p>
                  <a
                    className="btn btn--primary btn-line btn-line-after"
                    href="page-appointments.html"
                  >
                    <span>make appointment</span>
                    <span className="line">
                      <span></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta cta-3" id="cta-3">
          <div className="container">
            <div className="heading heading-6">
              <div className="row">
                <div className="col-12 col-lg-5">
                  <p className="heading-subtitle">
                    Caring For The Health Of You And Your Family.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-5">
                  <h2 className="heading-title">
                    We Provide All Aspects Of Medical Practice For Your Whole
                    Family!
                  </h2>
                </div>

                <div className="col-12 col-lg-6 offset-lg-1">
                  <div className="prief-set">
                    <p>
                      We pride ourselves on providing the best transport and
                      shipping services available allover the world. Our skilled
                      personnal and processing software, combined with decades
                      of experience! Through integrated supply chain solutions,
                      Equita drives sustainable competitive advantages to some
                      of Australia's largest companies.
                    </p>
                    <ul className="list-unstyled advantages-list">
                      <li>
                        <i className="fas fa-check"></i> Quality Control System
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Unrivalled workmanship
                      </li>
                      <li>
                        <i className="fas fa-check"></i> 100% Satisfaction
                        Guarantee
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="processes">
            <div className="row g-0">
              <div className="col-12 col-md-6 col-xl-3">
                <div className="process-panel" data-hover="">
                  <p className="process-number">01.</p>
                  <div className="process-body">
                    <div className="process-icon">
                      {" "}
                      <i className="flaticon-023-medical-history"></i>
                    </div>
                    <div className="process-content">
                      <h5>fill our medical application</h5>
                      <p>
                        Medisch offers free or low-cost health coverage for
                        adults.
                      </p>
                      <a
                        className="btn-line btn-line-before btn-line-inversed"
                        href="doctors-timetable.html"
                      >
                        <span className="line">
                          {" "}
                          <span> </span>
                        </span>
                        <span>doctors timetable</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <div className="process-panel" data-hover="">
                  <p className="process-number">02.</p>
                  <div className="process-body">
                    <div className="process-icon">
                      {" "}
                      <i className="flaticon-043-cardiogram"></i>
                    </div>
                    <div className="process-content">
                      <h5>Review Your Family History</h5>
                      <p>
                        Health exams help find problems with early chances which
                        helps.
                      </p>
                      <a
                        className="btn-line btn-line-before btn-line-inversed"
                        href="javascript:void(0)"
                      >
                        <span className="line">
                          {" "}
                          <span> </span>
                        </span>
                        <span>Start A Check Up</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <div className="process-panel" data-hover="">
                  <p className="process-number">03.</p>
                  <div className="process-body">
                    <div className="process-icon">
                      {" "}
                      <i className="flaticon-027-medical-report"></i>
                    </div>
                    <div className="process-content">
                      <h5>Choose Between Our Programs </h5>
                      <p>
                        We have protocols to protect our patients to provide
                        necessary care.
                      </p>
                      <a
                        className="btn-line btn-line-before btn-line-inversed"
                        href="javascript:void(0)"
                      >
                        <span className="line">
                          {" "}
                          <span> </span>
                        </span>
                        <span>explore programs</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <div className="process-panel" data-hover="">
                  <p className="process-number">04.</p>
                  <div className="process-body">
                    <div className="process-icon">
                      {" "}
                      <i className=".flaticon-021-medical-1"></i>
                    </div>
                    <div className="process-content">
                      <h5>Introduce To Qualified Doctors </h5>
                      <p>
                        Our administration and support staff all have
                        exceptional people skills
                      </p>
                      <a
                        className="btn-line btn-line-before btn-line-inversed"
                        href="page-appointments.html"
                      >
                        <span className="line">
                          {" "}
                          <span> </span>
                        </span>
                        <span>meet our doctors</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="donations donations-3 bg-overlay bg-parallax bg-overlay-theme"
          id="donations-3"
        >
          <div className="bg-section">
            <img src="assets/images/background/3.jpg" alt="background" />
          </div>
          <div className="container">
            <div className="contact-panel contact-panel-3">
              <div className="heading heading-light heading-11">
                <h2 className="heading-title">
                  Helping Patients From Around the Globe!!
                </h2>
                <p className="heading-desc">
                  Our staff strives to make each interaction with patients
                  clear, concise, and inviting. Support the important work of
                  Medicsh Hospital by making a much-needed donation today
                </p>
                <div className="donations-action">
                  <a className="btn btn--white" href="contact.html">
                    make a gift <i className="fas fa-heart"></i>
                  </a>
                  <a
                    className="btn btn--transparent btn--inversed"
                    href="page-faqs.html"
                  >
                    help &amp; faqs
                  </a>
                </div>
                <div className="img-hotspot">
                  <div className="img-hotspot-wrap">
                    <div className="img-hotspot-bg">
                      {" "}
                      <img
                        src="assets/images/background/world-map.png"
                        alt="image"
                      />
                    </div>
                    <div className="img-hotspot-pointers">
                      <div
                        className="img-hotspot-pointer"
                        data-spot-x="15%"
                        data-spot-y="29%"
                      >
                        <img
                          src="assets/images/background/map-pointer.png"
                          alt="pointer"
                        />
                        <div
                          className="info right"
                          data-info-x="18px"
                          data-info-y="-97px"
                        >
                          <span>
                            2307 Beverley Rd Brooklyn, New York 11226 U.S.
                          </span>
                        </div>
                      </div>
                      <div
                        className="img-hotspot-pointer"
                        data-spot-x="48%"
                        data-spot-y="48%"
                      >
                        <img
                          src="assets/images/background/map-pointer.png"
                          alt="pointer"
                        />
                        <div
                          className="info left"
                          data-info-x="-160px"
                          data-info-y="-97px"
                        >
                          <span>
                            2307 Beverley Rd Brooklyn, New York 11226 U.S.
                          </span>
                        </div>
                      </div>
                      <div
                        className="img-hotspot-pointer"
                        data-spot-x="68%"
                        data-spot-y="23%"
                      >
                        <img
                          src="assets/images/background/map-pointer.png"
                          alt="pointer"
                        />
                        <div
                          className="info left"
                          data-info-x="-160px"
                          data-info-y="-97px"
                        >
                          <span>
                            2307 Beverley Rd Brooklyn, New York 11226 U.S.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-body">
                  <h5 className="card-heading">book an appointment</h5>
                  <p className="card-desc">
                    Please feel welcome to contact our staff with any general or
                    medical enquiry. Our doctors will receive or return any
                    urgent calls.
                  </p>
                  <form
                    className="contactForm"
                    method="post"
                    action="assets/php/contact.php"
                  >
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="select-holder">
                          <select className="form-control">
                            <option value="default">bathology clinic</option>
                            <option value="AL">neurology clinic </option>
                            <option value="AK">cardiology clinic </option>
                          </select>
                          <div className="badge">department</div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="select-holder">
                          <select className="form-control">
                            <option value="default">michael brian</option>
                            <option value="AL">maria andoloro</option>
                            <option value="AK">richard muldoone</option>
                          </select>
                          <div className="badge">choose doctor</div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-6">
                        <input
                          className="form-control"
                          type="text"
                          name="contact-name"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 col-lg-6">
                        <input
                          className="form-control"
                          type="text"
                          name="contact-email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <input
                          className="form-control"
                          type="text"
                          name="contact-phone"
                          placeholder="Phone"
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="date-select">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="select date"
                            name="contact-date"
                            required
                          />
                          <i className="fas fa-calendar-day"></i>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="time-select">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="select time"
                            name="contact-date"
                            required
                          />
                          <i className="fas fa-clock"></i>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn--secondary btn-line btn-line-before btn--block">
                          <span className="line">
                            {" "}
                            <span> </span>
                          </span>
                          <span>make appointment</span>
                        </button>
                      </div>
                      <div className="col-12">
                        <div className="contact-result"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blog blog-grid blog-grid-3" id="blog-2">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 offset-lg-3">
                <div className="heading heading-7 text-center">
                  <p className="heading-subtitle">health essentials</p>
                  <h2 className="heading-title">recent articles</h2>
                </div>
              </div>
            </div>

            <div
              className="carousel owl-carousel carousel-dots"
              data-slide="3"
              data-slide-rs="2"
              data-autoplay="true"
              data-nav="false"
              data-dots="true"
              data-space="30"
              data-loop="true"
              data-speed="200"
            >
              <div>
                <div className="blog-entry" data-hover="">
                  <div className="entry-img">
                    <div className="entry-date">
                      <div className="entry-content">
                        <span className="day">20</span>
                        <span className="month">jan</span>
                        <span className="year">2021</span>
                      </div>
                    </div>
                    <a href="blog-single-sidebar.html">
                      <img
                        src="assets/images/blog/grid/1.jpg"
                        alt="6 tips to protect your mental health when sick"
                      />
                    </a>
                  </div>

                  <div className="entry-content">
                    <div className="entry-meta">
                      <div className="entry-category">
                        <a href="javascript:void(0)">mental health</a>
                        <a href="javascript:void(0)">wellness</a>
                      </div>
                      <div className="divider"></div>
                      <div className="entry-author">
                        <p>martin king</p>
                      </div>
                    </div>
                    <div className="entry-title">
                      <h4>
                        <a href="blog-single-sidebar.html">
                          6 tips to protect your mental health when sick
                        </a>
                      </h4>
                    </div>
                    <div className="entry-bio">
                      <p>
                        It’s normal to feel anxiety, worry and grief any time
                        you’re diagnosed with a condition that’s certainly true
                        if you test positive for COVID-19, or...
                      </p>
                    </div>
                    <div className="entry-more">
                      {" "}
                      <a
                        className="btn btn--white btn-line btn-line-before btn-line-inversed"
                        href="blog-single-sidebar.html"
                      >
                        <div className="line">
                          {" "}
                          <span> </span>
                        </div>
                        <span>read more</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="blog-entry" data-hover="">
                  <div className="entry-img">
                    <div className="entry-date">
                      <div className="entry-content">
                        <span className="day">20</span>
                        <span className="month">jan</span>
                        <span className="year">2021</span>
                      </div>
                    </div>
                    <a href="blog-single-sidebar.html">
                      <img
                        src="assets/images/blog/grid/2.jpg"
                        alt="Unsure About Wearing a Face Mask? How and Why"
                      />
                    </a>
                  </div>

                  <div className="entry-content">
                    <div className="entry-meta">
                      <div className="entry-category">
                        <a href="javascript:void(0)">infectious</a>
                        <a href="javascript:void(0)">tips</a>
                      </div>
                      <div className="divider"></div>
                      <div className="entry-author">
                        <p>John Ezak</p>
                      </div>
                    </div>
                    <div className="entry-title">
                      <h4>
                        <a href="blog-single-sidebar.html">
                          Unsure About Wearing a Face Mask? How and Why
                        </a>
                      </h4>
                    </div>
                    <div className="entry-bio">
                      <p>
                        That means that you should still be following any
                        shelter-in-place orders in your community. But when
                        you’re venturing out to the grocery store, pharmacy
                        or...
                      </p>
                    </div>
                    <div className="entry-more">
                      {" "}
                      <a
                        className="btn btn--white btn-line btn-line-before btn-line-inversed"
                        href="blog-single-sidebar.html"
                      >
                        <div className="line">
                          {" "}
                          <span> </span>
                        </div>
                        <span>read more</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="blog-entry" data-hover="">
                  <div className="entry-img">
                    <div className="entry-date">
                      <div className="entry-content">
                        <span className="day">20</span>
                        <span className="month">jan</span>
                        <span className="year">2021</span>
                      </div>
                    </div>
                    <a href="blog-single-sidebar.html">
                      <img
                        src="assets/images/blog/grid/3.jpg"
                        alt="Tips for Eating Healthy When Working From Home"
                      />
                    </a>
                  </div>

                  <div className="entry-content">
                    <div className="entry-meta">
                      <div className="entry-category">
                        <a href="javascript:void(0)">lifestyle</a>
                        <a href="javascript:void(0)">nutrition</a>
                      </div>
                      <div className="divider"></div>
                      <div className="entry-author">
                        <p>Saul Wade</p>
                      </div>
                    </div>
                    <div className="entry-title">
                      <h4>
                        <a href="blog-single-sidebar.html">
                          Tips for Eating Healthy When Working From Home
                        </a>
                      </h4>
                    </div>
                    <div className="entry-bio">
                      <p>
                        You’re on a conference call and somehow wandered into
                        the kitchen. Next thing know you’re eating crackers and
                        dry cereal out of the box. Or...
                      </p>
                    </div>
                    <div className="entry-more">
                      {" "}
                      <a
                        className="btn btn--white btn-line btn-line-before btn-line-inversed"
                        href="blog-single-sidebar.html"
                      >
                        <div className="line">
                          {" "}
                          <span> </span>
                        </div>
                        <span>read more</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="blog-entry" data-hover="">
                  <div className="entry-img">
                    <div className="entry-date">
                      <div className="entry-content">
                        <span className="day">20</span>
                        <span className="month">jan</span>
                        <span className="year">2021</span>
                      </div>
                    </div>
                    <a href="blog-single-sidebar.html">
                      <img
                        src="assets/images/blog/grid/4.jpg"
                        alt="Why Coronavirus Cases Among Adults Is Bad News"
                      />
                    </a>
                  </div>

                  <div className="entry-content">
                    <div className="entry-meta">
                      <div className="entry-category">
                        <a href="javascript:void(0)">mental health</a>
                        <a href="javascript:void(0)">wellness</a>
                      </div>
                      <div className="divider"></div>
                      <div className="entry-author">
                        <p>Mark Ezak</p>
                      </div>
                    </div>
                    <div className="entry-title">
                      <h4>
                        <a href="blog-single-sidebar.html">
                          Why Coronavirus Cases Among Adults Is Bad News
                        </a>
                      </h4>
                    </div>
                    <div className="entry-bio">
                      <p>
                        A new surge of coronavirus cases has spread across the
                        country and while there’s still so much to learn about
                        the virus, how it’s transmitted...
                      </p>
                    </div>
                    <div className="entry-more">
                      {" "}
                      <a
                        className="btn btn--white btn-line btn-line-before btn-line-inversed"
                        href="blog-single-sidebar.html"
                      >
                        <div className="line">
                          {" "}
                          <span> </span>
                        </div>
                        <span>read more</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="blog-entry" data-hover="">
                  <div className="entry-img">
                    <div className="entry-date">
                      <div className="entry-content">
                        <span className="day">20</span>
                        <span className="month">jan</span>
                        <span className="year">2021</span>
                      </div>
                    </div>
                    <a href="blog-single-sidebar.html">
                      <img
                        src="assets/images/blog/grid/5.jpg"
                        alt="Why Do People Get Kidney Stones in the Summer?"
                      />
                    </a>
                  </div>

                  <div className="entry-content">
                    <div className="entry-meta">
                      <div className="entry-category">
                        <a href="javascript:void(0)">infectious</a>
                        <a href="javascript:void(0)">tips</a>
                      </div>
                      <div className="divider"></div>
                      <div className="entry-author">
                        <p>Janette Baker</p>
                      </div>
                    </div>
                    <div className="entry-title">
                      <h4>
                        <a href="blog-single-sidebar.html">
                          Why Do People Get Kidney Stones in the Summer?
                        </a>
                      </h4>
                    </div>
                    <div className="entry-bio">
                      <p>
                        Summer may have just officially started, but kidney
                        stone season began a couple of weeks ago. Doctors see an
                        increase in kidney stone cases when...
                      </p>
                    </div>
                    <div className="entry-more">
                      {" "}
                      <a
                        className="btn btn--white btn-line btn-line-before btn-line-inversed"
                        href="blog-single-sidebar.html"
                      >
                        <div className="line">
                          {" "}
                          <span> </span>
                        </div>
                        <span>read more</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="blog-entry" data-hover="">
                  <div className="entry-img">
                    <div className="entry-date">
                      <div className="entry-content">
                        <span className="day">20</span>
                        <span className="month">jan</span>
                        <span className="year">2021</span>
                      </div>
                    </div>
                    <a href="blog-single-sidebar.html">
                      <img
                        src="assets/images/blog/grid/6.jpg"
                        alt="Do Any Drugs Really Work to Treat Coronavirus?"
                      />
                    </a>
                  </div>

                  <div className="entry-content">
                    <div className="entry-meta">
                      <div className="entry-category">
                        <a href="javascript:void(0)">lifestyle</a>
                        <a href="javascript:void(0)">nutrition</a>
                      </div>
                      <div className="divider"></div>
                      <div className="entry-author">
                        <p>Marie Black</p>
                      </div>
                    </div>
                    <div className="entry-title">
                      <h4>
                        <a href="blog-single-sidebar.html">
                          Do Any Drugs Really Work to Treat Coronavirus?
                        </a>
                      </h4>
                    </div>
                    <div className="entry-bio">
                      <p>
                        While most people who get COVID-19 are able to recover
                        at home, the rush is on to find a treatment that’s safe
                        and effective against...
                      </p>
                    </div>
                    <div className="entry-more">
                      {" "}
                      <a
                        className="btn btn--white btn-line btn-line-before btn-line-inversed"
                        href="blog-single-sidebar.html"
                      >
                        <div className="line">
                          {" "}
                          <span> </span>
                        </div>
                        <span>read more</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer footer-1">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="footer-widget widget-contact">
                    <div className="footer-widget-title">
                      <h5>quick contact</h5>
                    </div>
                    <div className="widget-content">
                      <p>
                        If you have any questions or need help, feel free to
                        contact with our team.
                      </p>
                      <ul>
                        <li className="phone">
                          <a href="tel:+01061245741">
                            <i className="fas fa-phone-alt"></i> 01061245741
                          </a>
                        </li>
                        <li className="address">
                          <a href="#">
                            2307 Beverley Rd Brooklyn, New York 11226 United
                            States.
                          </a>
                        </li>
                      </ul>
                      <a className="directions" href="javascript:void(0)">
                        <i className="icon-arrow-right"></i>get directions
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2 offset-lg-0">
                  <div className="footer-widget widget-links">
                    <div className="footer-widget-title">
                      <h5>departments</h5>
                    </div>
                    <div className="widget-content">
                      <ul>
                        <li>
                          <a href="javascript:void(0)">neurology clinic</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">pathology clinic</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">laboratory analysis</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">pediatric clinic</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">cardiac clinic</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3 col-lg-2">
                  <div className="footer-widget widget-links">
                    <div className="footer-widget-title">
                      <h5>links</h5>
                    </div>
                    <div className="widget-content">
                      <ul>
                        <li>
                          <a href="javascript:void(0)">abouts us</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">our clinic</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">our doctors</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">news &amp; media</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">appointments</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-2 offset-lg-0">
                  <div className="footer-widget widget-links">
                    <div className="footer-widget-title">
                      <h5>help</h5>
                    </div>
                    <div className="widget-content">
                      <ul>
                        <li>
                          <a href="javascript:void(0)">help &amp; FAQs</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">contacts</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">careers</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">site map</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="footer-widget widget-newsletter">
                    <div className="footer-widget-title">
                      <h5>newsletter</h5>
                    </div>
                    <div className="widget-content">
                      <form className="form-newsletter mailchimp">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            required
                          />
                          <div className="submit">
                            <input type="submit" />
                          </div>
                        </div>
                        <div className="custom-radio-group">
                          <div className="custom-control custom-radio custom-control-inline">
                            <input
                              className="custom-control-input"
                              type="radio"
                              id="customRadioInline2"
                              name="customRadioInline2"
                              required
                            />
                            <label htmlFor="customRadioInline2">
                              i accept the privacy and terms
                            </label>
                          </div>
                        </div>
                        <div className="subscribe-alert"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="footer-copyright">
                    <div className="copyright">
                      <span>
                        &copy; 2021 medisch by{" "}
                        <a href="https://1.envato.market/kP9BV"> Zytheme.com</a>
                        . all rights reserved.{" "}
                      </span>
                      <ul className="list-unstyled social-icons">
                        <li>
                          {" "}
                          <a className="share-facebook" href="#">
                            <i className="fab fa-facebook-f"> </i>
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="share-instagram" href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="share-twitter" href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="backtop" id="back-to-top" data-hover="">
          <svg
            className="bi bi-chevron-up"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    </>
  );
};

export default page;
