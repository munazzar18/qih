import { getPublicDepartmentById } from '@/app/lib/getDepartments'
import Image from 'next/image'
import React from 'react'

const Page = async (props: { params: Promise<{ depart: number }> }) => {
  const params = await props.params

  const department = await getPublicDepartmentById(params.depart)


  return (
    <div>
      <section
        className="page-title page-title-4 bg-overlay bg-overlay-dark bg-parallax"
        id="page-title"
      >
        <div className="bg-section">
          <Image
            src="/assets/images/departments/3.jpg"
            width={500}
            height={500}
            alt="Background"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-0">
              <div className="title">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="">services</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {department.data.title}
                  </li>
                </ol>
                <div className="title-card">
                  <div className="card-icon">
                    {' '}
                    <i className="flaticon-029-cardiogram-1"></i>
                  </div>
                  <div className="card-content">
                    <div className="title-heading">
                      <h1>{department.data.title}</h1>
                    </div>
                    <div className="title-sub-heading">
                      <p>
                        All cardiologists study the disorders of the heart, but
                        the study of adult and child heart disorders are trained
                        to take care of small children.
                      </p>
                    </div>
                    <a
                      className="btn btn--white btn-line btn-line-before btn-line-inversed"
                      href=""
                    >
                      <span className="line">
                        {' '}
                        <span></span>
                      </span>
                      <span>find a doctor </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="single-service single-department">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="entry-infos entry-infos-2">
                <h5 className="entry-heading">overview</h5>
                <p className="entry-desc strong">
                  A neurologist is a medical doctor with specialized training in
                  diagnosing, treating, and managing disorders of the brain and
                  nervous system including, but not limited to, Alzheimer’s
                  disease, amyotrophic lateral sclerosis (ALS), concussion,
                  epilepsy, migraine, multiple sclerosis, Parkinson’s disease,
                  and stroke.
                </p>
                <p className="entry-desc">
                  A child or pediatric, neurologist specializes in the diagnosis
                  and treatment of neurologic disorders in children from the
                  neonatal period through adolescence. Some of the conditions
                  overlap with those seen by adult neurologists, and others are
                  unique to this younger population. Child neurologists treat
                  many of the same common conditions found in adults such as
                  migraine, epilepsy, stroke, and Tourette’s and are also
                  trained in conditions related to neurogenetics and
                  developmental problems.
                </p>
              </div>

              <div
                className="video video-2 video-3 bg-overlay bg-overlay-video"
                id="video-3"
              >
                <div className="bg-section">
                  <Image
                    src="/assets/images/departments/6.jpg"
                    width={500}
                    height={500}
                    alt="background"
                  />
                </div>
                <a
                  className="popup-video btn-video"
                  href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                >
                  {' '}
                  <i className="fas fa-play"></i>
                  <span>watch our presentation!</span>
                </a>
              </div>
              <div className="entry-infos entry-introduction">
                <h5 className="entry-heading">Symptoms & Diagnosis</h5>
                <p className="entry-desc">
                  Neurologists are highly trained clinicians capable of
                  diagnosing complex conditions through detailed history and
                  physical examination, including testing of mental status,
                  vision, speech, strength, sensation, coordination, reflexes,
                  and gait. Even as medicine becomes more dependent on
                  technology, the neurological exam will remain a critical
                  component of the patient evaluation.
                </p>
                <p className="entry-desc">
                  We are different from neurosurgeons as we do not perform brain
                  or spinal cord surgery. However, neurologists and
                  neurosurgeons work closely together for several conditions,
                  sometimes even in the operating room.
                </p>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <ul className="list-unstyled advantages mb-0">
                      <li>
                        <i className="fas fa-check"></i> Computed tomography
                        (CT) or (CAT) scans
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Magnetic resonance
                        imaging (MRI)
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Electroencephalography
                        (EEG)
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Nerve conduction
                        studies
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-6">
                    <ul className="list-unstyled advantages">
                      <li>
                        <i className="fas fa-check"></i> Seizure disorders, such
                        as epilepsy
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Speech and language
                        disorders
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Spinal cord disorders
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="entry-infos services-price">
                <h5 className="entry-heading">our services</h5>
                <p className="entry-desc">
                  He actively participates in clinical research trials and has
                  been published in peer reviewed journals such as the Journal
                  of the State Medical Society and Baylor University Medical
                  Center's Proceedings. At Hahnemann Hospital in conjunction
                  with Drexel University, where he received extensive training
                  in coronary as well as peripheral interventions and limb
                  salvage procedures.
                </p>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="prices-list prices-list-2">
                      <h6>investigations price list </h6>
                      <div className="row">
                        <div className="col-12">
                          <ul className="list-unstyled">
                            <li>
                              Umbilical Cord Appearance
                              <span className="price">$50</span>
                            </li>
                            <li>
                              Cardiac Electrophysiology
                              <span className="price">$50</span>
                            </li>
                            <li>
                              Repositioning Techniques
                              <span className="price">$60</span>
                            </li>
                            <li>
                              Geriatric Neurology
                              <span className="price">$75</span>
                            </li>
                            <li>
                              Nuclear Cardiology
                              <span className="price">$45</span>
                            </li>
                            <li>
                              Neurocritical Care
                              <span className="price">$55</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="prices-list">
                      <h6>treatments price list </h6>
                      <div className="row">
                        <div className="col-12">
                          <ul className="list-unstyled">
                            <li>
                              Colonoscopy<span className="price">$50</span>
                            </li>
                            <li>
                              Allergy testing<span className="price">$50</span>
                            </li>
                            <li>
                              Gastroscopy<span className="price">$60</span>
                            </li>
                            <li>
                              Bronchoscopy<span className="price">$75</span>
                            </li>
                            <li>
                              Cardiac Ablation<span className="price">$45</span>
                            </li>
                            <li>
                              Holter monitoring
                              <span className="price">$55</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="entry-infos tips-info">
                <h5 className="entry-heading">health & tips info</h5>
                <p className="entry-desc">
                  We help create a care plan that addresses your specific
                  condition and we are here to answer all of your questions &
                  acknowledge your concerns. Today the hospital is recognised as
                  a world renowned institution, not only providing outstanding
                  care and treatment, but improving the outcomes.
                </p>
                <div className="accordion accordion-3" id="accordion03">
                  <div className="card">
                    <div className="card-heading">
                      <a
                        className="card-link collapsed"
                        data-hover=""
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapse01-1"
                        href="#collapse01-1"
                      >
                        Which Plan Is Right For Me?
                      </a>
                    </div>
                    <div
                      className="collapse"
                      id="collapse01-1"
                      data-bs-parent="#accordion03"
                    >
                      <div className="card-body">
                        Our staff strives to make each interaction with patients
                        clear, concise, and inviting. Support the important work
                        of Medicsh Hospital by making a much-needed donation
                        today. We will work with you to develop individualised
                        care plans, including management of chronic diseases.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a
                        className="card-link collapsed"
                        data-hover=""
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapse01-2"
                        href="#collapse01-2"
                      >
                        Do I have to commit to a contract?{' '}
                      </a>
                    </div>
                    <div
                      className="collapse"
                      id="collapse01-2"
                      data-bs-parent="#accordion03"
                    >
                      <div className="card-body">
                        Our staff strives to make each interaction with patients
                        clear, concise, and inviting. Support the important work
                        of Medicsh Hospital by making a much-needed donation
                        today. We will work with you to develop individualised
                        care plans, including management of chronic diseases.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a
                        className="card-link  "
                        data-hover=""
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapse01-3"
                        href="#collapse01-3"
                      >
                        What Payment Methods Are Available?{' '}
                      </a>
                    </div>
                    <div
                      className="collapse show"
                      id="collapse01-3"
                      data-bs-parent="#accordion03"
                    >
                      <div className="card-body">
                        Our staff strives to make each interaction with patients
                        clear, concise, and inviting. Support the important work
                        of Medicsh Hospital by making a much-needed donation
                        today. We will work with you to develop individualised
                        care plans, including management of chronic diseases.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="entry-infos health-plans">
                <h5 className="entry-heading">health care plans</h5>
                <p className="entry-desc">
                  Our doctors include highly qualified practitioners came from a
                  range of backgrounds and bring with a diversity of skills and
                  special interests. Our administration and support staff all
                  have exceptional people skills and trained to assist you with
                  all medical enquiries.
                </p>
                <div className="advantages-box">
                  <ul className="advantages-list">
                    <li>
                      <i className="fas fa-check"></i> Review your medical
                      records.
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Check and test blood
                      pressure.
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Run tests such as blood
                      tests.
                    </li>
                  </ul>
                  <ul className="advantages-list">
                    <li>
                      <i className="fas fa-check"></i> Check and test lung
                      function.
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Narrowing of the
                      arteries.
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Other specialized tests.
                    </li>
                  </ul>
                </div>
                <div className="entry-action">
                  <p>
                    {' '}
                    <span className="currency">$50</span>
                    <span className="time"> Monthly</span>
                  </p>
                  <a
                    className="btn btn--secondary btn-line btn-line-before"
                    href=""
                  >
                    <span className="line">
                      <span></span>
                    </span>
                    <span>explore other plans</span>
                  </a>
                </div>
              </div>
              <div className="entry-infos doctors-prief">
                <h5 className="entry-heading">Meet Our Doctors</h5>
                <p className="entry-desc">
                  Our administration and support staff all have exceptional
                  people skills and trained to assist you with all medical
                  enquiries. Doctors will be available from 8 am : 12 am ,
                  kindly call to confirm your Appointment.
                </p>
                <div className="row team-grid team-grid-4" id="team-all">
                  {department ? (
                    department.data.consultants.map(
                      (consultant: any, index: number) => {
                        return (
                          <div key={index} className="col-12 col-md-6 col-lg-4">
                            <div className="team-member" data-hover="">
                              <div className="team-member-holder">
                                <div className="team-img">
                                  <a className="link" href=""></a>
                                  <Image
                                    src="/assets/images/departments/1.jpg"
                                    width={500}
                                    height={500}
                                    alt="team member"
                                  />
                                </div>
                                <div className="team-content">
                                  <div className="team-title">
                                    <h4>
                                      <a href="">{consultant.name}</a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      }
                    )
                  ) : (
                    <p>no consultant founds</p>
                  )}
                </div>
              </div>
              <div className="entry-contact">
                <div className="contact-panel bg-overlay bg-overlay-theme3">
                  <div className="bg-section">
                    {' '}
                    <Image
                      src="/assets/images/sliders/1.jpg"
                      width={500}
                      height={500}
                      alt="background"
                    />
                  </div>
                  <div className="contact-card">
                    <div className="contact-body">
                      <h5 className="card-heading">book an appointment</h5>
                      <p className="card-desc">
                        Please feel welcome to contact our staff with any
                        general or medical enquiry. Our doctors will receive or
                        return any urgent calls.
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
                                <option value="default">
                                  bathology clinic
                                </option>
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
            </div>
            <div className="col-12 col-lg-4">
              <div className="sidebar sidebar-service sidebar-department">
                <div className="widget widget-services">
                  <div className="widget-title">
                    <h5>medical services</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="list-unstyled">
                      <li>
                        <a href="">
                          {' '}
                          <span className="line">
                            {' '}
                            <span></span>
                          </span>
                          <span>{department.data.title}</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {' '}
                          <span className="line">
                            {' '}
                            <span></span>
                          </span>
                          <span>cardiology clinic</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {' '}
                          <span className="line">
                            {' '}
                            <span></span>
                          </span>
                          <span>pathology clinic</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {' '}
                          <span className="line">
                            {' '}
                            <span></span>
                          </span>
                          <span>labotatory analysis</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {' '}
                          <span className="line">
                            {' '}
                            <span></span>
                          </span>
                          <span>pediatric clinic</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {' '}
                          <span className="line">
                            {' '}
                            <span></span>
                          </span>
                          <span>cardiac clinic</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="widget widget-reservation">
                  <Image
                    src="/assets/images/blog/sidebar/reservation.jpg"
                    width={500}
                    height={500}
                    alt="image"
                  />
                  <div className="widget-content">
                    <i className="flaticon-022-medical"></i>
                    <h5>emergency cases</h5>
                    <p>
                      Please feel welcome to contact our friendly reception
                      staff with any general or medical enquiry call us
                    </p>
                    <a href="tel:0106123214">
                      <span className="fas fa-phone-alt"></span> 0106123214
                    </a>
                  </div>
                </div>

                <div className="widget widget-opening-hours">
                  <div className="widget-content">
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
                    </ul>
                  </div>
                </div>

                <div className="widget widget-download">
                  <div className="widget-content">
                    <ul className="list-unstyled">
                      <li>
                        <a href="javascript:void(0)">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            width="18"
                            height="18"
                          >
                            <g>
                              <g>
                                <g>
                                  <path
                                    className="shp0"
                                    d="M10 10L8 10L8 4L10 4L10 10ZM9 14.3C8.28 14.3 7.7 13.72 7.7 13C7.7 12.28 8.28 11.7 9 11.7C9.72 11.7 10.3 12.28 10.3 13C10.3 13.72 9.72 14.3 9 14.3ZM12.73 0L5.27 0L0 5.27L0 12.73L5.27 18L12.73 18L18 12.73L18 5.27L12.73 0Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <span>covid-19 latest update</span>
                        </a>
                      </li>
                      <li className="inversed">
                        <a href="javascript:void(0)">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            width="18"
                            height="18"
                          >
                            <g>
                              <g>
                                <g>
                                  <path
                                    className="shp0"
                                    id="Archive Icon"
                                    d="M2.12 2L2.93 1L14.93 1L15.87 2L2.12 2ZM9 14.5L3.5 9L7 9L7 7L11 7L11 9L14.5 9L9 14.5ZM17.54 2.23L16.15 0.55C15.88 0.21 15.47 0 15 0L3 0C2.53 0 2.12 0.21 1.84 0.55L0.46 2.23C0.17 2.57 0 3.02 0 3.5L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 3.5C18 3.02 17.83 2.57 17.54 2.23Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <span>2020 patient reports</span>
                        </a>
                      </li>
                    </ul>
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

export default Page
