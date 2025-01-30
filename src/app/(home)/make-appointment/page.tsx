import MakeAppointment from '@/components/MakeAppointment'
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
            <MakeAppointment />
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
