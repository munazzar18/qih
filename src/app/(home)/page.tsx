import CarousalComponent from '@/components/CarousalComponent'
import Image from 'next/image'

const page = () => {
  return (
    <div className="wrapper clearfix" id="wrapperParallax">
      <section className="slider slider-2" id="slider-2">
        <CarousalComponent />
      </section>
      <section className="features-bar" id="featuresBar-1">
        <div className="bg-section">
          {' '}
          <Image
            src="/assets/images/departments/28.jpg"
            width={500}
            height={500}
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
                    Please feel welcome to contact our staff with any general or
                    medical enquiry call us
                  </p>
                  <a href="">
                    <span className="fas fa-phone-alt"></span> (051) 8449100
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
                    {' '}
                    <span className="line">
                      {' '}
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
                      {' '}
                      <span>monday-friday</span>
                      <span>8:00 - 7:00 pm</span>
                    </li>
                    <li>
                      {' '}
                      <span>saturday</span>
                      <span>9:00 - 8:00 pm</span>
                    </li>
                    <li>
                      {' '}
                      <span>sunday</span>
                      <span>10:00 - 9:00 pm</span>
                    </li>
                    <li>
                      {' '}
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
                  <p>Quaid-e-Azam International Hospital, Near Golra Morr,</p>
                  <div className="map-img">
                    <p>Peshawar Road, Islamabad, Pakistan</p>
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
                  including management of chronic diseases. If we cannot assist,
                  we can provide referrals or advice about the type of
                  practitioner you require. We treat all enquiries sensitively
                  and in the strictest
                </p>
                <div className="actions-holder">
                  <a
                    className="btn btn--primary btn-line btn-line-after"
                    href=""
                  >
                    {' '}
                    <span>find a doctor</span>
                    <span className="line">
                      {' '}
                      <span></span>
                    </span>
                  </a>
                  <a className="btn btn--white" href="">
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
                <Image
                  className="img-fluid"
                  src="/assets/images/departments/7.jpg"
                  width={500}
                  height={500}
                  alt="about Image"
                />
                <a
                  className="popup-video btn-video"
                  href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                >
                  {' '}
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
                    <a href=""></a>
                    <Image
                      src="/assets/images/departments/18.jpg"
                      width={500}
                      height={500}
                      alt="department img"
                    />
                  </div>
                  <div className="department-content">
                    <div className="department-title">
                      <h4>
                        <a href="">Neurology Clinic</a>
                      </h4>
                    </div>
                    <div className="department-desc">
                      <p>
                        Some neurologists receive subspecialty training focusing
                        on a particular area of the fields, these training
                        programs called fellowships, and one to two years.
                      </p>
                    </div>
                    <ul className="department-list list-unstyled">
                      <li>
                        <i className="fas fa-check"></i>{' '}
                        <span>neurocritical care</span>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>{' '}
                        <span>neuro oncolgy</span>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>{' '}
                        <span>geriatric neurology</span>
                      </li>
                    </ul>
                    <div className="department-more">
                      <a
                        className="btn btn--white btn-line btn-line-before btn-line-inversed"
                        href=""
                      >
                        {' '}
                        <span className="line">
                          {' '}
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
                    <a href=""></a>
                    <Image
                      src="/assets/images/departments/2.jpg"
                      width={500}
                      height={500}
                      alt="department img"
                    />
                  </div>
                  <div className="department-content">
                    <div className="department-title">
                      <h4>
                        <a href="">Cardiology Clinic</a>
                      </h4>
                    </div>
                    <div className="department-desc">
                      <p>
                        All cardiologists study the disorders of the heart, but
                        the study of adult and child heart disorders are trained
                        to take care of small children...
                      </p>
                    </div>
                    <ul className="department-list list-unstyled">
                      <li>
                        <i className="fas fa-check"></i>{' '}
                        <span>neurocritical care</span>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>{' '}
                        <span>neuro oncolgy</span>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>{' '}
                        <span>geriatric neurology</span>
                      </li>
                    </ul>
                    <div className="department-more">
                      <a
                        className="btn btn--white btn-line btn-line-before btn-line-inversed"
                        href=""
                      >
                        {' '}
                        <span className="line">
                          {' '}
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
                    <a href=""></a>
                    <Image
                      src="/assets/images/departments/3.jpg"
                      width={500}
                      height={500}
                      alt="department img"
                    />
                  </div>
                  <div className="department-content">
                    <div className="department-title">
                      <h4>
                        <a href="">Pathology Clinic</a>
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
                        <i className="fas fa-check"></i>{' '}
                        <span>neurocritical care</span>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>{' '}
                        <span>neuro oncolgy</span>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>{' '}
                        <span>geriatric neurology</span>
                      </li>
                    </ul>
                    <div className="department-more">
                      <a
                        className="btn btn--white btn-line btn-line-before btn-line-inversed"
                        href=""
                      >
                        {' '}
                        <span className="line">
                          {' '}
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
                  Today hospital is recognised as a world renowned institution,
                  not only providing outstanding care and treatment, but
                  improving the outcomes for all.
                </p>
              </div>
              <div className="col-12 col-lg-5 offset-lg-2">
                <div className="doctor-action">
                  <a
                    className="btn btn--secondary btn-line btn-line-after"
                    href=""
                  >
                    {' '}
                    <span>make appointment</span>
                    <span className="line">
                      {' '}
                      <span></span>
                    </span>
                  </a>
                  <div className="doctor-info">
                    <div className="doctor-img">
                      {' '}
                      <Image
                        src="/assets/images/departments/20.jpg"
                        width={60}
                        height={60}
                        alt="image"
                      />
                    </div>
                    <div className="doctor-body">
                      {' '}
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
          {' '}
          <Image
            src="/assets/images/departments/1.jpg"
            width={500}
            height={500}
            alt="Background"
          />
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
                  practitioners who come from a range of backgrounds and bring a
                  diversity of skills. Our administration and support staff all
                  have exceptional people skills.
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
                      {' '}
                      <span></span>
                    </span>
                  </a>
                  <div className="signature-body">
                    <h6>john winston</h6>
                    <p>pediatrician</p>
                    <Image
                      className="signature-img"
                      src="/assets/images/signature/2.png"
                      width={500}
                      height={500}
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
                    <i className="fas fa-angle-down"></i>{' '}
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
                    <i className="fas fa-angle-down"></i>{' '}
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
                    <i className="fas fa-angle-down"></i>{' '}
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
                    <i className="fas fa-angle-down"></i>{' '}
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
                    <i className="fas fa-angle-down"></i>{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="more-features more-features-2">
            <p>
              Delivering tomorrow’s health care for your family.{' '}
              <a href="">view doctors' timetable </a>
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
                    {' '}
                    <span> </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="card-panel">
              <div className="panel-icon">
                {' '}
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
                    {' '}
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
                {' '}
                <Image
                  src="/assets/images/departments/23.jpg"
                  width={700}
                  height={300}
                  alt="image"
                />
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
                        Their doctors include highly qualified practitioners who
                        come from a range of backgrounds &amp; bring with them a
                        diversity of skills and special interests. They also
                        registered nurses available to triage any urgent
                        matters, and the administration and staff all have
                        exceptional skills!!
                      </p>
                      <div className="testimonial-thumb">
                        <div className="thumb-img">
                          {' '}
                          <Image
                            src="/assets/images/departments/24.jpg"
                            width={80}
                            height={80}
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
                        Their doctors include highly qualified practitioners who
                        come from a range of backgrounds &amp; bring with them a
                        diversity of skills and special interests. They also
                        registered nurses available to triage any urgent
                        matters, and the administration and staff all have
                        exceptional skills!!
                      </p>
                      <div className="testimonial-thumb">
                        <div className="thumb-img">
                          {' '}
                          <Image
                            src="/assets/images/departments/32.jpg"
                            width={80}
                            height={80}
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
                        Their doctors include highly qualified practitioners who
                        come from a range of backgrounds &amp; bring with them a
                        diversity of skills and special interests. They also
                        registered nurses available to triage any urgent
                        matters, and the administration and staff all have
                        exceptional skills!!
                      </p>
                      <div className="testimonial-thumb">
                        <div className="thumb-img">
                          {' '}
                          <Image
                            src="/assets/images/departments/30.jpg"
                            width={80}
                            height={80}
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
                    personnal and processing software, combined with decades of
                    experience! Through integrated supply chain solutions,
                    Equita drives sustainable competitive advantages to some of
                    Australia's largest companies.
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
                    {' '}
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
                      href=""
                    >
                      <span className="line">
                        {' '}
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
                    {' '}
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
                        {' '}
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
                    {' '}
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
                        {' '}
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
                    {' '}
                    <i className=".flaticon-021-medical-1"></i>
                  </div>
                  <div className="process-content">
                    <h5>Introduce To Qualified Doctors </h5>
                    <p>
                      Our administration and support staff all have exceptional
                      people skills
                    </p>
                    <a
                      className="btn-line btn-line-before btn-line-inversed"
                      href=""
                    >
                      <span className="line">
                        {' '}
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
          <Image
            src="/assets/images/departments/3.jpg"
            width={500}
            height={500}
            alt="background"
          />
        </div>
        <div className="container">
          <div className="contact-panel contact-panel-3">
            <div className="heading heading-light heading-11">
              <h2 className="heading-title">
                Helping Patients From Around the Globe!!
              </h2>
              <p className="heading-desc">
                Our staff strives to make each interaction with patients clear,
                concise, and inviting. Support the important work of Medicsh
                Hospital by making a much-needed donation today
              </p>
              <div className="donations-action">
                <a className="btn btn--white" href="">
                  make a gift <i className="fas fa-heart"></i>
                </a>
                <a className="btn btn--transparent btn--inversed" href="">
                  help &amp; faqs
                </a>
              </div>
              <div className="img-hotspot">
                <div className="img-hotspot-wrap">
                  <div className="img-hotspot-bg">
                    {' '}
                    <Image
                      src="/assets/images/background/world-map.png"
                      width={500}
                      height={300}
                      alt="image"
                    />
                  </div>
                  <div className="img-hotspot-pointers">
                    <div
                      className="img-hotspot-pointer"
                      data-spot-x="15%"
                      data-spot-y="29%"
                    >
                      <Image
                        src="/assets/images/background/map-pointer.png"
                        width={30}
                        height={30}
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
                      <Image
                        src="/assets/images/background/map-pointer.png"
                        width={30}
                        height={30}
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
                      <Image
                        src="/assets/images/background/map-pointer.png"
                        width={30}
                        height={30}
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
                  medical enquiry. Our doctors will receive or return any urgent
                  calls.
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
                      />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                        name="contact-email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <input
                        className="form-control"
                        type="text"
                        name="contact-phone"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="date-select">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="select date"
                          name="contact-date"
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
                        />
                        <i className="fas fa-clock"></i>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn--secondary btn-line btn-line-before btn--block">
                        <span className="line">
                          {' '}
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
                  <a href="">
                    <Image
                      src="/assets/images/departments/1.jpg"
                      width={500}
                      height={500}
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
                      <a href="">
                        6 tips to protect your mental health when sick
                      </a>
                    </h4>
                  </div>
                  <div className="entry-bio">
                    <p>
                      It’s normal to feel anxiety, worry and grief any time
                      you’re diagnosed with a condition that’s certainly true if
                      you test positive for COVID-19, or...
                    </p>
                  </div>
                  <div className="entry-more">
                    {' '}
                    <a
                      className="btn btn--white btn-line btn-line-before btn-line-inversed"
                      href=""
                    >
                      <div className="line">
                        {' '}
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
                  <a href="">
                    <Image
                      src="/assets/images/departments/12.jpg"
                      width={500}
                      height={500}
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
                      <a href="">
                        Unsure About Wearing a Face Mask? How and Why
                      </a>
                    </h4>
                  </div>
                  <div className="entry-bio">
                    <p>
                      That means that you should still be following any
                      shelter-in-place orders in your community. But when you’re
                      venturing out to the grocery store, pharmacy or...
                    </p>
                  </div>
                  <div className="entry-more">
                    {' '}
                    <a
                      className="btn btn--white btn-line btn-line-before btn-line-inversed"
                      href=""
                    >
                      <div className="line">
                        {' '}
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
                  <a href="">
                    <Image
                      src="/assets/images/departments/17.jpg"
                      width={500}
                      height={500}
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
                      <a href="">
                        Tips for Eating Healthy When Working From Home
                      </a>
                    </h4>
                  </div>
                  <div className="entry-bio">
                    <p>
                      You’re on a conference call and somehow wandered into the
                      kitchen. Next thing know you’re eating crackers and dry
                      cereal out of the box. Or...
                    </p>
                  </div>
                  <div className="entry-more">
                    {' '}
                    <a
                      className="btn btn--white btn-line btn-line-before btn-line-inversed"
                      href="l"
                    >
                      <div className="line">
                        {' '}
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
                  <a href="">
                    <Image
                      src="/assets/images/departments/4.jpg"
                      width={500}
                      height={500}
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
                      <a href="">
                        Why Coronavirus Cases Among Adults Is Bad News
                      </a>
                    </h4>
                  </div>
                  <div className="entry-bio">
                    <p>
                      A new surge of coronavirus cases has spread across the
                      country and while there’s still so much to learn about the
                      virus, how it’s transmitted...
                    </p>
                  </div>
                  <div className="entry-more">
                    {' '}
                    <a
                      className="btn btn--white btn-line btn-line-before btn-line-inversed"
                      href=""
                    >
                      <div className="line">
                        {' '}
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
                  <a href="">
                    <Image
                      src="/assets/images/departments/40.jpg"
                      width={500}
                      height={500}
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
                      <a href="">
                        Why Do People Get Kidney Stones in the Summer?
                      </a>
                    </h4>
                  </div>
                  <div className="entry-bio">
                    <p>
                      Summer may have just officially started, but kidney stone
                      season began a couple of weeks ago. Doctors see an
                      increase in kidney stone cases when...
                    </p>
                  </div>
                  <div className="entry-more">
                    {' '}
                    <a
                      className="btn btn--white btn-line btn-line-before btn-line-inversed"
                      href=""
                    >
                      <div className="line">
                        {' '}
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
                  <Image
                    src="/assets/images/departments/6.jpg"
                    width={500}
                    height={500}
                    alt="Do Any Drugs Really Work to Treat Coronavirus?"
                  />
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
                      <a href="">
                        Do Any Drugs Really Work to Treat Coronavirus?
                      </a>
                    </h4>
                  </div>
                  <div className="entry-bio">
                    <p>
                      While most people who get COVID-19 are able to recover at
                      home, the rush is on to find a treatment that’s safe and
                      effective against...
                    </p>
                  </div>
                  <div className="entry-more">
                    {' '}
                    <a
                      className="btn btn--white btn-line btn-line-before btn-line-inversed"
                      href=""
                    >
                      <div className="line">
                        {' '}
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
    </div>
  )
}

export default page
