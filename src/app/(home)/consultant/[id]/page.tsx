import { getPublicConsultantById } from '@/app/lib/getConsultants'
import React from 'react'

interface Consultant {
  status: string
  message: string
  data: {
    id: number
    name: string
    email: string
    work_experiece: string
    membership: string
    education: string
    office_extention: string
    photo: string
    departments: [
      {
        title: string
        description: string
        image: string
      }
    ]
  }
}

const SingleConsultantPage = async (props: {
  params: Promise<{ id: number }>
}) => {
  const params = await props.params

  const consultant: Consultant = await getPublicConsultantById(params.id)

  return (
    <div className="wrapper clearfix" id="wrapperParallax">
      <section className="hero hero-4 bg-overlay bg-overlay-theme">
        <div className="bg-section">
          {' '}
          <img src="/assets/images/background/dark-blue.jpg" alt="background" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="team-modern team-modern-2">
                  <div className="team-member">
                    <div className="team-member-holder">
                      <div className="team-img">
                        <img
                          src={`https://qih.driveo.pk${consultant?.data?.photo}`}
                          alt="team member"
                        />
                      </div>
                      <div className="team-content-holder">
                        <div className="team-content">
                          <div className="team-title">
                            <h4>{consultant?.data?.name}</h4>
                          </div>
                          {consultant?.data?.departments?.map(
                            (department, index) => (
                              <div className="team-cat" key={index}>
                                <p>{department.title}</p>
                              </div>
                            )
                          )}
                          <div className="team-desc">
                            <p>
                              Muldoone obtained his undergraduate degree in
                              Biomedical Engineering at Tulane University prior
                              to attending St George University School of
                              Medicine.
                            </p>
                          </div>
                          <div className="team-social">
                            {' '}
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
              <div className="col-12 col-lg-3 content-merged order-2 order-lg-0">
                <div className="hero-rating">
                  {' '}
                  <span className="num">4.9</span>
                  <div className="rating-body">
                    <p>
                      <a href="#">zodoc</a> Overall Rating, based on 7541
                      reviews
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5 content-merged">
                <div className="hero-action">
                  <a
                    className="btn btn--secondary btn--inversed btn-line btn-line-after"
                    href="#"
                  >
                    {' '}
                    <span>make apponitment</span>
                    <span className="line">
                      <span></span>
                    </span>
                  </a>
                  <a className="btn btn--transparent btn--inversed" href="#">
                    doctors timetable
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-single team-single-modern">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="sidebar sidebar-doctors">
                <div className="widget widget-reservation">
                  <img
                    src="assets/images/blog/sidebar/reservation.jpg"
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
            <div className="col-12 col-lg-8">
              <div className="entry-bio">
                <h5 className="entry-heading">biography</h5>
                <p className="entry-desc strong">
                  Muldoone obtained his undergraduate degree in Biomedical
                  Engineering at Tulane University (2001) prior to attending St
                  George's University School of Medicine (2006). He then
                  returned to his home to attend State University in New Orleans
                  (2006-09) for his internship in Internal Medicine.
                </p>
                <p className="entry-desc">
                  He then traveled to Philadelphia, Pennsylvania to complete a
                  Fellowship in Intervention Cardiology at Hahnemann Hospital in
                  conjunction with Drexel University, where he received
                  extensive training in coronary as well as peripheral
                  interventions and limb salvage procedures. He actively
                  participates in clinical research trials and has been
                  published in peer reviewed journals such as the Journal of the
                  State Medical Society and Baylor University Medical Center's
                  Proceedings.
                </p>
                <p className="entry-desc">
                  In his spare time, watches college and professional football
                  and enjoys traveling, swimming and playing chess. He is
                  currently Board Certified in Cardiovascular Disease and
                  Interventional Cardiology. He moved to California where he
                  completed both his Internship at the University of California.
                </p>
              </div>
              <div className="entry-table">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>
                        <div className="content head">speciality </div>
                      </td>
                      <td>
                        <div className="content">cardiology </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="content head">degrees</div>
                      </td>
                      <td>
                        <div className="content">M.D. of Medicine</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="content head">area of experties</div>
                      </td>
                      <td>
                        <div className="content">
                          <ul className="list-unstyled experties-list">
                            <li>
                              <i className="fas fa-check"></i> Cardiac Imaging –
                              Non-invasive.
                            </li>
                            <li>
                              <i className="fas fa-check"></i> Cardiac
                              Rehabilitation and Exercise.
                            </li>
                            <li>
                              <i className="fas fa-check"></i> Hypertrophic
                              Cardiomyopathy.
                            </li>
                            <li>
                              <i className="fas fa-check"></i> Inherited Heart
                              Diseases.
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="content head">office</div>
                      </td>
                      <td>
                        <div className="content">
                          2307 Beverley Rd Brooklyn, New York 11226 United
                          States.
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="content head">university</div>
                      </td>
                      <td>
                        <div className="content">Harvard University</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="entry-bio entry-services">
                <h5 className="entry-heading">doctor's services</h5>
                <p className="entry-desc">
                  He actively participates in clinical research trials and has
                  been published in peer reviewed journals such as the Journal
                  of the State Medical Society and Baylor University Medical
                  Center's Proceedings. At Hahnemann Hospital in conjunction
                  with Drexel University, where he received extensive training
                  in coronary as well as peripheral interventions and limb
                  salvage procedures.
                </p>
                <div className="prices-panel">
                  <h6>treatments price list </h6>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <ul className="list-unstyled">
                        <li>
                          upmblical cord appearance{' '}
                          <span className="price">$50</span>
                        </li>
                        <li>
                          Cardiac Electrophysiology
                          <span className="price">$80</span>
                        </li>
                        <li>
                          Repositioning Techniques
                          <span className="price">$60</span>
                        </li>
                        <li>
                          Geriatric Neurology
                          <span className="price">$75</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-6">
                      <ul className="list-unstyled">
                        <li>
                          Cardiac Rehabilitation
                          <span className="price">$70</span>
                        </li>
                        <li>
                          Nuclear Cardiology<span className="price">$45</span>
                        </li>
                        <li>
                          Neurocritical Care<span className="price">$55</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="entry-bio entry-awards">
                <h5 className="entry-heading">awards and honours</h5>
                <p className="entry-desc">
                  Today the hospital is recognised as a world renowned
                  institution, not only providing outstanding care and
                  treatment, but improving the outcomes for all through a
                  comprehensive medical research. For over 20 years, our
                  hospital has touched lives of millions of people, and provide
                  care and treatment for the sickest in our community including
                  rehabilitation and aged care.
                </p>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="entry-award">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                      >
                        <path d="m2 2v46h22v-2h-18.586l4-4h14.586v-2h-14v-30h44v30h-14v2h14.586l4 4h-18.586v2h22v-46zm54 7.414 4-4v39.172l-4-4zm-48 31.172-4 4v-39.172l4 4zm1.414-32.586-4-4h53.172l-4 4z"></path>
                        <path d="m15 24h34v2h-34z"></path>
                        <path d="m19 28h26v2h-26z"></path>
                        <path d="m38.083 46.364c.854-.52 1.917-1.164 1.917-2.364s-1.063-1.843-1.917-2.363a4.057 4.057 0 0 1 -.883-.637 3.945 3.945 0 0 1 -.127-1.144c-.028-.981-.064-2.2-1.067-2.784-.982-.568-2.039 0-2.89.453a3.818 3.818 0 0 1 -1.116.475 3.818 3.818 0 0 1 -1.113-.475c-.851-.454-1.908-1.02-2.888-.453-1 .58-1.04 1.8-1.069 2.784a3.978 3.978 0 0 1 -.13 1.144 4.059 4.059 0 0 1 -.887.637c-.851.519-1.913 1.163-1.913 2.363s1.062 1.843 1.917 2.363a4.048 4.048 0 0 1 .883.637l-7.1 12.31 4.094-1.095 1.1 4.1 7.099-12.315h.014l7.1 12.312 1.1-4.1 4.093 1.097-7.1-12.309a4.082 4.082 0 0 1 .883-.636zm-12.053-2.364a5.157 5.157 0 0 1 .927-.655 4.263 4.263 0 0 0 1.577-1.345 4.385 4.385 0 0 0 .4-2.085c.009-.34.025-.888.058-1.068a5.666 5.666 0 0 1 .956.442 4.514 4.514 0 0 0 2.052.711 4.522 4.522 0 0 0 2.057-.711 6.144 6.144 0 0 1 .923-.434 5.888 5.888 0 0 1 .091 1.059 4.381 4.381 0 0 0 .4 2.087 4.27 4.27 0 0 0 1.577 1.344 5.157 5.157 0 0 1 .922.655 5.157 5.157 0 0 1 -.927.655 4.263 4.263 0 0 0 -1.577 1.345 4.385 4.385 0 0 0 -.4 2.085c-.009.34-.025.888-.058 1.068a5.666 5.666 0 0 1 -.956-.442 4.514 4.514 0 0 0 -2.052-.711 4.522 4.522 0 0 0 -2.057.711 6.144 6.144 0 0 1 -.923.434 5.888 5.888 0 0 1 -.091-1.059 4.381 4.381 0 0 0 -.395-2.086 4.27 4.27 0 0 0 -1.577-1.344 5.157 5.157 0 0 1 -.927-.656zm-.822 11.766-1.367.365 3.446-5.97a1.8 1.8 0 0 0 .71.767 1.767 1.767 0 0 0 1.021.227l-3.446 5.972zm13.584 0-.364 1.361-3.449-5.976c.043 0 .085.015.128.015a1.747 1.747 0 0 0 .893-.238 1.794 1.794 0 0 0 .712-.768l3.446 5.971z"></path>
                        <path d="m28 44a4 4 0 1 0 4-4 4 4 0 0 0 -4 4zm4-2a2 2 0 1 1 -2 2 2 2 0 0 1 2-2z"></path>
                        <path d="m36 33h6v2h-6z"></path>
                        <path d="m22 33h5v2h-5z"></path>
                        <path d="m31 12v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></path>
                      </svg>
                      <div className="entry-content">
                        <h5>Edison awards</h5>
                        <p>Honoring in innovation</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="entry-award">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                      >
                        <path d="m2 2v46h22v-2h-18.586l4-4h14.586v-2h-14v-30h44v30h-14v2h14.586l4 4h-18.586v2h22v-46zm54 7.414 4-4v39.172l-4-4zm-48 31.172-4 4v-39.172l4 4zm1.414-32.586-4-4h53.172l-4 4z"></path>
                        <path d="m15 24h34v2h-34z"></path>
                        <path d="m19 28h26v2h-26z"></path>
                        <path d="m38.083 46.364c.854-.52 1.917-1.164 1.917-2.364s-1.063-1.843-1.917-2.363a4.057 4.057 0 0 1 -.883-.637 3.945 3.945 0 0 1 -.127-1.144c-.028-.981-.064-2.2-1.067-2.784-.982-.568-2.039 0-2.89.453a3.818 3.818 0 0 1 -1.116.475 3.818 3.818 0 0 1 -1.113-.475c-.851-.454-1.908-1.02-2.888-.453-1 .58-1.04 1.8-1.069 2.784a3.978 3.978 0 0 1 -.13 1.144 4.059 4.059 0 0 1 -.887.637c-.851.519-1.913 1.163-1.913 2.363s1.062 1.843 1.917 2.363a4.048 4.048 0 0 1 .883.637l-7.1 12.31 4.094-1.095 1.1 4.1 7.099-12.315h.014l7.1 12.312 1.1-4.1 4.093 1.097-7.1-12.309a4.082 4.082 0 0 1 .883-.636zm-12.053-2.364a5.157 5.157 0 0 1 .927-.655 4.263 4.263 0 0 0 1.577-1.345 4.385 4.385 0 0 0 .4-2.085c.009-.34.025-.888.058-1.068a5.666 5.666 0 0 1 .956.442 4.514 4.514 0 0 0 2.052.711 4.522 4.522 0 0 0 2.057-.711 6.144 6.144 0 0 1 .923-.434 5.888 5.888 0 0 1 .091 1.059 4.381 4.381 0 0 0 .4 2.087 4.27 4.27 0 0 0 1.577 1.344 5.157 5.157 0 0 1 .922.655 5.157 5.157 0 0 1 -.927.655 4.263 4.263 0 0 0 -1.577 1.345 4.385 4.385 0 0 0 -.4 2.085c-.009.34-.025.888-.058 1.068a5.666 5.666 0 0 1 -.956-.442 4.514 4.514 0 0 0 -2.052-.711 4.522 4.522 0 0 0 -2.057.711 6.144 6.144 0 0 1 -.923.434 5.888 5.888 0 0 1 -.091-1.059 4.381 4.381 0 0 0 -.395-2.086 4.27 4.27 0 0 0 -1.577-1.344 5.157 5.157 0 0 1 -.927-.656zm-.822 11.766-1.367.365 3.446-5.97a1.8 1.8 0 0 0 .71.767 1.767 1.767 0 0 0 1.021.227l-3.446 5.972zm13.584 0-.364 1.361-3.449-5.976c.043 0 .085.015.128.015a1.747 1.747 0 0 0 .893-.238 1.794 1.794 0 0 0 .712-.768l3.446 5.971z"></path>
                        <path d="m28 44a4 4 0 1 0 4-4 4 4 0 0 0 -4 4zm4-2a2 2 0 1 1 -2 2 2 2 0 0 1 2-2z"></path>
                        <path d="m36 33h6v2h-6z"></path>
                        <path d="m22 33h5v2h-5z"></path>
                        <path d="m31 12v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></path>
                      </svg>
                      <div className="entry-content">
                        <h5>Edwin Grant Medal</h5>
                        <p>Research in biology</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="entry-award">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                      >
                        <path d="m2 2v46h22v-2h-18.586l4-4h14.586v-2h-14v-30h44v30h-14v2h14.586l4 4h-18.586v2h22v-46zm54 7.414 4-4v39.172l-4-4zm-48 31.172-4 4v-39.172l4 4zm1.414-32.586-4-4h53.172l-4 4z"></path>
                        <path d="m15 24h34v2h-34z"></path>
                        <path d="m19 28h26v2h-26z"></path>
                        <path d="m38.083 46.364c.854-.52 1.917-1.164 1.917-2.364s-1.063-1.843-1.917-2.363a4.057 4.057 0 0 1 -.883-.637 3.945 3.945 0 0 1 -.127-1.144c-.028-.981-.064-2.2-1.067-2.784-.982-.568-2.039 0-2.89.453a3.818 3.818 0 0 1 -1.116.475 3.818 3.818 0 0 1 -1.113-.475c-.851-.454-1.908-1.02-2.888-.453-1 .58-1.04 1.8-1.069 2.784a3.978 3.978 0 0 1 -.13 1.144 4.059 4.059 0 0 1 -.887.637c-.851.519-1.913 1.163-1.913 2.363s1.062 1.843 1.917 2.363a4.048 4.048 0 0 1 .883.637l-7.1 12.31 4.094-1.095 1.1 4.1 7.099-12.315h.014l7.1 12.312 1.1-4.1 4.093 1.097-7.1-12.309a4.082 4.082 0 0 1 .883-.636zm-12.053-2.364a5.157 5.157 0 0 1 .927-.655 4.263 4.263 0 0 0 1.577-1.345 4.385 4.385 0 0 0 .4-2.085c.009-.34.025-.888.058-1.068a5.666 5.666 0 0 1 .956.442 4.514 4.514 0 0 0 2.052.711 4.522 4.522 0 0 0 2.057-.711 6.144 6.144 0 0 1 .923-.434 5.888 5.888 0 0 1 .091 1.059 4.381 4.381 0 0 0 .4 2.087 4.27 4.27 0 0 0 1.577 1.344 5.157 5.157 0 0 1 .922.655 5.157 5.157 0 0 1 -.927.655 4.263 4.263 0 0 0 -1.577 1.345 4.385 4.385 0 0 0 -.4 2.085c-.009.34-.025.888-.058 1.068a5.666 5.666 0 0 1 -.956-.442 4.514 4.514 0 0 0 -2.052-.711 4.522 4.522 0 0 0 -2.057.711 6.144 6.144 0 0 1 -.923.434 5.888 5.888 0 0 1 -.091-1.059 4.381 4.381 0 0 0 -.395-2.086 4.27 4.27 0 0 0 -1.577-1.344 5.157 5.157 0 0 1 -.927-.656zm-.822 11.766-1.367.365 3.446-5.97a1.8 1.8 0 0 0 .71.767 1.767 1.767 0 0 0 1.021.227l-3.446 5.972zm13.584 0-.364 1.361-3.449-5.976c.043 0 .085.015.128.015a1.747 1.747 0 0 0 .893-.238 1.794 1.794 0 0 0 .712-.768l3.446 5.971z"></path>
                        <path d="m28 44a4 4 0 1 0 4-4 4 4 0 0 0 -4 4zm4-2a2 2 0 1 1 -2 2 2 2 0 0 1 2-2z"></path>
                        <path d="m36 33h6v2h-6z"></path>
                        <path d="m22 33h5v2h-5z"></path>
                        <path d="m31 12v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></path>
                      </svg>
                      <div className="entry-content">
                        <h5>Robert L. Noble Prize</h5>
                        <p>canadian cancer society</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="entry-award">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                      >
                        <path d="m2 2v46h22v-2h-18.586l4-4h14.586v-2h-14v-30h44v30h-14v2h14.586l4 4h-18.586v2h22v-46zm54 7.414 4-4v39.172l-4-4zm-48 31.172-4 4v-39.172l4 4zm1.414-32.586-4-4h53.172l-4 4z"></path>
                        <path d="m15 24h34v2h-34z"></path>
                        <path d="m19 28h26v2h-26z"></path>
                        <path d="m38.083 46.364c.854-.52 1.917-1.164 1.917-2.364s-1.063-1.843-1.917-2.363a4.057 4.057 0 0 1 -.883-.637 3.945 3.945 0 0 1 -.127-1.144c-.028-.981-.064-2.2-1.067-2.784-.982-.568-2.039 0-2.89.453a3.818 3.818 0 0 1 -1.116.475 3.818 3.818 0 0 1 -1.113-.475c-.851-.454-1.908-1.02-2.888-.453-1 .58-1.04 1.8-1.069 2.784a3.978 3.978 0 0 1 -.13 1.144 4.059 4.059 0 0 1 -.887.637c-.851.519-1.913 1.163-1.913 2.363s1.062 1.843 1.917 2.363a4.048 4.048 0 0 1 .883.637l-7.1 12.31 4.094-1.095 1.1 4.1 7.099-12.315h.014l7.1 12.312 1.1-4.1 4.093 1.097-7.1-12.309a4.082 4.082 0 0 1 .883-.636zm-12.053-2.364a5.157 5.157 0 0 1 .927-.655 4.263 4.263 0 0 0 1.577-1.345 4.385 4.385 0 0 0 .4-2.085c.009-.34.025-.888.058-1.068a5.666 5.666 0 0 1 .956.442 4.514 4.514 0 0 0 2.052.711 4.522 4.522 0 0 0 2.057-.711 6.144 6.144 0 0 1 .923-.434 5.888 5.888 0 0 1 .091 1.059 4.381 4.381 0 0 0 .4 2.087 4.27 4.27 0 0 0 1.577 1.344 5.157 5.157 0 0 1 .922.655 5.157 5.157 0 0 1 -.927.655 4.263 4.263 0 0 0 -1.577 1.345 4.385 4.385 0 0 0 -.4 2.085c-.009.34-.025.888-.058 1.068a5.666 5.666 0 0 1 -.956-.442 4.514 4.514 0 0 0 -2.052-.711 4.522 4.522 0 0 0 -2.057.711 6.144 6.144 0 0 1 -.923.434 5.888 5.888 0 0 1 -.091-1.059 4.381 4.381 0 0 0 -.395-2.086 4.27 4.27 0 0 0 -1.577-1.344 5.157 5.157 0 0 1 -.927-.656zm-.822 11.766-1.367.365 3.446-5.97a1.8 1.8 0 0 0 .71.767 1.767 1.767 0 0 0 1.021.227l-3.446 5.972zm13.584 0-.364 1.361-3.449-5.976c.043 0 .085.015.128.015a1.747 1.747 0 0 0 .893-.238 1.794 1.794 0 0 0 .712-.768l3.446 5.971z"></path>
                        <path d="m28 44a4 4 0 1 0 4-4 4 4 0 0 0 -4 4zm4-2a2 2 0 1 1 -2 2 2 2 0 0 1 2-2z"></path>
                        <path d="m36 33h6v2h-6z"></path>
                        <path d="m22 33h5v2h-5z"></path>
                        <path d="m31 12v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></path>
                      </svg>
                      <div className="entry-content">
                        <h5>The National Prize</h5>
                        <p>Chilean Academy of Medicine.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="entry-bio entry-education">
                <h5 className="entry-heading">medical education</h5>
                <p className="entry-desc">
                  He then went to LSU Medical School in New Orleans where he was
                  an Honors Program Graduate and finished in the top quartile of
                  his graduating class. He completed his Internal Medicine
                  Residency at the University of Alabama in Birmingham, AL where
                  he was selected as a Chief Internal Medicine Resident
                </p>
                <div className="education-panels">
                  <div className="education-panel">
                    <div className="education-year">
                      <span className="year">2020</span>
                    </div>
                    <div className="education-body">
                      <div className="bullet"></div>
                      <h5>Royal College of Surgeons of Harvard</h5>
                      <p>
                        He then traveled to Philadelphia, Pennsylvania to
                        complete a Fellowship in Intervention Cardiology at
                        Hahnemann Hospital in conjunction with Drexel
                        University, where he received extensive training in
                        coronary as well as salvage procedures.
                      </p>
                    </div>
                  </div>
                  <div className="education-panel">
                    <div className="education-year">
                      <span className="year">2015</span>
                    </div>
                    <div className="education-body">
                      <div className="bullet"></div>
                      <h5>
                        Fellowship, Royal College of Physicians of Harvard
                      </h5>
                      <p>
                        After relocating to Louisiana he served as Director of
                        the Cardiac Catheterization Lab at Regional Medical
                        Center of Acadiana. He was honored by the Medical
                        Association for Physician Recognition Award from March
                        of 2015 through May 2016.
                      </p>
                    </div>
                  </div>
                  <div className="education-panel">
                    <div className="education-year">
                      <span className="year">2010</span>
                    </div>
                    <div className="education-body">
                      <div className="bullet"></div>
                      <h5>Residency, St. Harvard University Hospital</h5>
                      <p>
                        Dr has also had professional accomplishments at the
                        University of Southern California School of Medicine and
                        Medical Center including Instructor of Medicine, Chief
                        Administrative Fellow, Division of Cardiology University
                        of Southern California.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="entry-bio entry-skills skills">
                <h5 className="entry-heading">doctor’s Skills</h5>
                <p className="entry-desc">
                  He completed his Internal Medicine Residency at the University
                  of Alabama in Birmingham, AL where he was selected as a Chief
                  Internal Medicine Resident. He then went to LSU Medical School
                  in New Orleans where he was an Honors Program Graduate and
                  finished the top of his class.
                </p>
                <div className="progressbar">
                  <div className="progress-title">
                    <span className="title">Cardiac Rehabilitation</span>
                    <span className="value" style={{ left: '95%' }}>
                      95%
                    </span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={95}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="progressbar">
                  <div className="progress-title">
                    <span className="title">Nuclear Cardiology</span>
                    <span className="value" style={{ left: '85%' }}>
                      85%
                    </span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="progressbar">
                  <div className="progress-title">
                    <span className="title">Neurocritical Care</span>
                    <span className="value" style={{ left: '77%' }}>
                      77%
                    </span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={77}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="entry-contact">
                <div className="contact-panel bg-overlay bg-overlay-theme">
                  <div className="bg-section">
                    {' '}
                    <img src="assets/images/sliders/1.jpg" alt="background" />
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
                                value=""
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
                                value=""
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingleConsultantPage
