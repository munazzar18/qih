import { getPublicPageBySlug } from '@/app/lib/getPages'
import Link from 'next/link'
import React from 'react'

interface PagesData {
  status: string
  message: string
  data: [
    {
      id: number
      title: string
      short_description: string
      description: string
    }
  ]
}

const OurPartnersPage = async () => {
  const pageData: PagesData = await getPublicPageBySlug('our-partners')

  return (
    <div className="wrapper clearfix" id="wrapperParallax">
      <section className="hero hero-6 bg-overlay bg-overlay-dark">
        <div className="bg-section">
          {' '}
          <img src="/assets/images/sliders/13.jpg" alt="background" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-12 col-lg-5">
                <h2 className="hero-title">Our Trusted Partners</h2>
              </div>
              <div className="col-12">
                <ol className="breadcrumb d-flex justify-content-center">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/our-partners">Our Partners</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services" id="services-1">
        <div className="bg-section">
          <img src="/assets/images/background/pattern.png" alt="background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading heading-7 text--center">
                <h2 className="heading-title">{pageData?.data[0]?.title}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="entry-bio">
                <h5 className="entry-heading">{pageData?.data[0]?.title}</h5>
                <p className="entry-desc strong">
                  {pageData?.data[0]?.short_description}
                </p>
                <br />
                <br />
                <div
                  dangerouslySetInnerHTML={{
                    __html: pageData?.data[0]?.description
                      ? pageData?.data[0]?.description
                      : '',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurPartnersPage
