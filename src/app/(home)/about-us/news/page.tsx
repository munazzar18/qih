import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="wrapper clearfix" id="wrapperParallax">
      <section
        className="page-title page-title-5 bg-overlay bg-overlay-dark bg-parallax"
        id="page-title"
      >
        <div className="bg-section">
          <img src="/assets/images/departments/7.jpg" alt="Background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-3">
              <div className="title">
                <div className="title-heading">
                  <h1>News</h1>
                </div>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/about-us">about us</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    news
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog blog-grid" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
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
                    <img
                      src="/assets/images/departments/1.jpg"
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
            <div className="col-12 col-md-6 col-lg-4">
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
                    <img
                      src="/assets/images/departments/14.jpg"
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
            <div className="col-12 col-md-6 col-lg-4">
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
                    <img
                      src="/assets/images/departments/13.jpg"
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
            <div className="col-12 col-md-6 col-lg-4">
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
                    <img
                      src="/assets/images/departments/4.jpg"
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
            <div className="col-12 col-md-6 col-lg-4">
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
                    <img
                      src="/assets/images/departments/5.jpg"
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
            <div className="col-12 col-md-6 col-lg-4">
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
                    <img
                      src="/assets/images/departments/6.jpg"
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
          <div className="row">
            <div className="col-12 clearfix text--center">
              <ul className="pagination">
                <li>
                  <a className="current" href="javascript:void(0)">
                    1
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">2</a>
                </li>
                <li>
                  <a href="#" aria-label="Next">
                    <i className="icon-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
