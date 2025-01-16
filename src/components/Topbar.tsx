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
          <a href="">
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
          <a href="">
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
          <a href="">
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
          <a href="">
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
        <div className="top-contact">
          <div className="contact-infos">
            <i className="fas fa-phone-alt"></i>
            <div className="contact-body">
              {' '}
              <a href="mailto:info@qih.com.pk">info@qih.com.pk</a>
            </div>
          </div>
        </div>
      </div>
      <div className="block-right">
        <div className="top-contact">
          <div className="contact-infos">
            <i className="fas fa-phone-alt"></i>
            <div className="contact-body">
              {' '}
              <a>phone: +92 (051) 8449100</a>
            </div>
          </div>
          <div className="contact-infos">
            <i className="fas fa-map-marker-alt"></i>
            <div className="contact-body">
              {' '}
              <a>
                Quaid-e-Azam International Hospital, Near Golra Morr, Peshawar
                Road, Islamabad, Pakistan{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
