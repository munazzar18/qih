import React from 'react'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'

const Topbar = () => {
  return (
    <div className="top-bar">
      <div className="block-left">
        <p className="headline">
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
          Our Clinic sees over 10,000 patients every year.
        </p>
        <div
          className="carousel owl-carousel"
          data-slide="1"
          data-slide-rs="1"
          data-autoplay="true"
          data-nav="false"
          data-dots="false"
          data-space="0"
          data-loop="true"
          data-speed="800"
        >
          <a href="blog-grid-fullwidth.html">
            {' '}
            Hear their real stories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11 8"
              width="11"
              height="8"
            >
              <g>
                <g>
                  <g>
                    <path
                      className="shp1"
                      d="M11 4L7.01 0L7.01 3L0 3L0 5L7.01 5L7.01 8L11 4Z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <a href="blog-grid-fullwidth.html">
            {' '}
            tips for eating healthy
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11 8"
              width="11"
              height="8"
            >
              <g>
                <g>
                  <g>
                    <path
                      className="shp1"
                      d="M11 4L7.01 0L7.01 3L0 3L0 5L7.01 5L7.01 8L11 4Z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <a href="blog-grid-fullwidth.html">
            {' '}
            why wearing a mask
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11 8"
              width="11"
              height="8"
            >
              <g>
                <g>
                  <g>
                    <path
                      className="shp1"
                      d="M11 4L7.01 0L7.01 3L0 3L0 5L7.01 5L7.01 8L11 4Z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <a href="blog-grid-fullwidth.html">
            {' '}
            why coronavirus cases rise ?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11 8"
              width="11"
              height="8"
            >
              <g>
                <g>
                  <g>
                    <path
                      className="shp1"
                      d="M11 4L7.01 0L7.01 3L0 3L0 5L7.01 5L7.01 8L11 4Z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className="block-right">
        <div className="top-contact">
          <div className="contact-infos">
            <i className="fas fa-phone-alt"></i>
            <div className="contact-body">
              {' '}
              <a href="tel:123-456-7890">emergency line: 002 010612457410</a>
            </div>
          </div>
          <div className="contact-infos">
            <i className="fas fa-map-marker-alt"></i>
            <div className="contact-body">
              {' '}
              <a href="#">location: brooklyn, new york </a>
            </div>
          </div>
          <div className="contact-infos">
            <i className="fas fa-clock"></i>
            <div className="contact-body">
              <p>Mon-Fri: 8am – 7pm </p>
            </div>
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
                {' '}
                <img src="assets/images/module-language/en.png" alt="alt" />
                <a href="#">english</a>
              </li>
              <li>
                {' '}
                <img src="assets/images/module-language/ar.png" alt="alt" />
                <a href="#">arabic</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
