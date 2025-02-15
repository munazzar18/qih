import CarousalComponent from '@/components/CarousalComponent'
import MakeAppointment from '@/components/MakeAppointment'
import Image from 'next/image'
import Link from 'next/link'
import { getDepartments } from '../lib/getDepartments'

interface Department {
  status: string
  message: string
  data: [
    {
      id: number
      title: string
      description: string
      image: string
      is_featured: number
    }
  ]
}

const page = async () => {
  const departments: Department = await getDepartments()

  function stripHtmlTags(str: string) {
    return str.replace(/<[^>]*>?/gm, '')
  }

  return (
    <div className="wrapper clearfix" id="wrapperParallax">
      <section className="slider slider-2" id="slider-2">
        <CarousalComponent />
      </section>
      <section className="features-bar" id="featuresBar-1">
        <div className="bg-section">
          {' '}
          <Image
            src="/assets/images/background/pattern-2.jpg"
            width={500}
            height={500}
            alt="background"
          />
        </div>
        <div className="container">
          <div className="row g-0 features-holder">
            <div className="col-12 col-lg-3">
              <div className="feature-panel feature-reservation">
                <Link href="/about/message-from-ceo">
                  <div
                    className="feature-content"
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '265px',
                    }}
                  >
                    {/* Image fills the whole container */}
                    <div
                      style={{
                        position: 'absolute',
                        top: -28,
                        left: -45,
                        width: '332px',
                        height: '332px',
                        borderRadius: '50%',
                      }}
                    >
                      <Image
                        src="/assets/photos/DrShb.jpeg"
                        alt="Dr. Shaukat A. Bangash, M.D"
                        fill
                        objectFit="cover"
                      />
                    </div>

                    {/* Text overlay positioned at the bottom */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: -40,
                        left: -45,
                        width: '332px',
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 2,
                        background: 'rgba(0, 0, 0, 0.7)',
                      }}
                    >
                      <h5
                        className="text-center"
                        style={{ margin: 0, color: '#fff' }}
                      >
                        Dr. Shaukat A. Bangash, M.D
                      </h5>
                      <h6
                        className="text-center"
                        style={{ margin: 0, color: '#fff' }}
                      >
                        Founder, Chairman, Ceo
                      </h6>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div
                className="feature-panel feature-timetable bg-secondary"
                style={{ height: '333px', minHeight: '333px' }}
              >
                <div className="feature-content">
                  <i className="flaticon-028-book"></i>
                  <h5>Evening Clinic</h5>
                  <p>Evening clininc is open from 7:00 pm to 10:00 pm</p>
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
              <div className="feature-panel feature-opening-hours ">
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
              <div
                className="feature-panel feature-location"
                style={{ height: '333px', minHeight: '333px' }}
              >
                <a href="https://portal.qih.com.pk/" target="_blank">
                  <div className="feature-content">
                    <i className="flaticon-042-clinic"></i>
                    <h5>Lab Reports</h5>
                    <p>Get your lab reports in one click</p>
                    <p>
                      <span className="fas fa-phone-alt"></span> (051) 8449100
                    </p>
                  </div>
                </a>
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
                  src="/assets/images/departments/21.jpg"
                  width={500}
                  height={500}
                  alt="about Image"
                />
                <a
                  className="popup-video btn-video"
                  href="/assets/videos/videoplayback_4.mp4"
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

      {/* featured Department */}
      <section className="blog blog-grid blog-grid-3" id="blog-2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-3">
              <div className="heading heading-7 text-center">
                <h2 className="heading-title">Featured Departments</h2>
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
            {departments && departments.data.length ? (
              departments.data
                .filter((dept) => dept.is_featured === 1)
                .map((dept, index) => (
                  <div key={dept.id}>
                    <div className="blog-entry" data-hover="">
                      <div className="entry-img">
                        <a href="">
                          <Image
                            src={
                              dept.image
                                ? `https://driveo.pk/${dept.image}`
                                : `/assets/images/departments/${index + 1}.jpg`
                            }
                            width={500}
                            height={500}
                            alt="6 tips to protect your mental health when sick"
                          />
                        </a>
                      </div>

                      <div className="entry-content">
                        <div className="entry-title">
                          <h4>
                            <a href="">{dept.title}</a>
                          </h4>
                        </div>
                        <div className="entry-bio">
                          <p>
                            {stripHtmlTags(dept.description).substring(0, 150)}
                            ...
                          </p>
                        </div>
                        <div className="entry-more">
                          {' '}
                          <Link
                            className="btn btn--white btn-line btn-line-before btn-line-inversed"
                            href={`/departments/${dept.id}`}
                          >
                            <div className="line">
                              {' '}
                              <span> </span>
                            </div>
                            <span>read more</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <p>No Departments found</p>
            )}
          </div>
        </div>
      </section>
      {/* featured Department */}

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
            {/* <MakeAppointment /> */}
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
                      src="/assets/images/departments/10.jpg"
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
                      src="/assets/images/departments/15.jpg"
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
                    src="/assets/images/departments/8.jpg"
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
