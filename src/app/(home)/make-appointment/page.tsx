import React from 'react'

const page = () => {
  return (
    <div>
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
                Our staff strives to make each interaction with patients clear,
                concise, and inviting. Support the important work of Medicsh
                Hospital by making a much-needed donation today
              </p>

              <div className="img-hotspot">
                <div className="img-hotspot-wrap">
                  <div className="img-hotspot-bg">
                    {' '}
                    <img
                      src="assets/images/background/world-map.png"
                      alt="image"
                    />
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
    </div>
  )
}

export default page
