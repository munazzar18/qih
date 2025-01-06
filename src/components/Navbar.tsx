'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import departmentArray from '../../public/assets/department'

const Navbar = () => {
  const currentPath = usePathname()

  return (
    <header className="header header-light header-topbar" id="navbar-spy">
      <nav className="navbar navbar-expand-xl navbar-sticky" id="primary-menu">
        <Link className="navbar-brand" href="/">
          <img
            className="logo logo-dark"
            src="/assets/photos/logo_dark.png"
            alt="QIH logo"
          />

          <img
            className="logo logo-mobile"
            src="/assets/photos/logo_dark.png"
            alt="QIH logo"
          />
        </Link>
        <div className="module-holder module-holder-phone">
          <div className="module module-search float-left">
            <div className="module-icon search-icon">
              <i className="icon-search" data-hover=""></i>
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
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ">
            <li
              className={`nav-item ${currentPath === '/' ? 'active' : ''}`}
              id="contact"
              data-hover=""
            >
              <Link className="" href="/">
                Home
              </Link>
            </li>
            <li
              className={`nav-item has-dropdown ${
                currentPath.includes('about-us') ? 'active' : ''
              } `}
              data-hover=""
            >
              <Link
                className="dropdown-toggle"
                href="/about-us"
                data-toggle="dropdown"
              >
                <span>about us</span>
              </Link>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <Link href="/about-us/message-from-ceo">
                    <span>Message from ceo</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about-us/company-profile">
                    <span>Company Profile</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about-us/news">
                    <span>News</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about-us/highlights">
                    <span>Highlights</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/about-us/sitemap">
                    <span>Sitemaps</span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={`nav-item has-dropdown ${
                currentPath.includes('services') ? 'active' : ''
              } `}
              data-hover=""
            >
              <Link
                className="dropdown-toggle"
                href="/services"
                data-toggle="dropdown"
              >
                <span>Services</span>
              </Link>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <Link href="/services/teleconsultation-services">
                    <span>Teleconsultation Services</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services/patient-charges">
                    <span>Patient Charges (COVID-19)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services/online-appointment">
                    <span>Online Appointment</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services/salient-features">
                    <span>Salient Features</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services/hospital-facilities">
                    <span>Hospital Facilities</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="https://portal.qih.com.pk/" target="_blank">
                    <span>Lab Reports</span>
                  </a>
                </li>
                <li className="nav-item">
                  <Link href="/services/live-transplant">
                    <span>Liver Transplant</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`nav-item has-dropdown ${
                currentPath.includes('gallery') ? 'active' : ''
              } `}
              data-hover=""
            >
              <Link
                className="dropdown-toggle"
                href="/gallery"
                data-toggle="dropdown"
              >
                <span>Gallery</span>
              </Link>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <Link href="/gallery/photo-gallery">
                    <span>Photo Gallery</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/gallery/earthquake-2005">
                    <span>Earthquake 2005</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/gallery/video-gallery">
                    <span>Videos</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item" id="contact" data-hover="">
              <Link className="" href="/user/pannel">
                <span>User Pannel</span>
              </Link>
            </li>
            <li
              className={`nav-item  ${
                currentPath.includes('career') ? 'active' : ''
              } `}
              id="contact"
              data-hover=""
            >
              <Link className="" href="/career">
                <span>Career</span>
              </Link>
            </li>
            <li
              className="nav-item has-dropdown"
              id="departments"
              data-hover=""
            >
              <Link
                className="dropdown-toggle"
                href="/departments"
                data-toggle="dropdown"
              >
                <span>departments</span>
              </Link>
              <ul
                className="dropdown-menu"
                style={{ height: '300px', overflowY: 'scroll' }}
              >
                {departmentArray.map((item) => {
                  return (
                    <li key={item.id} className="nav-item">
                      <Link
                        href={`/departments/${item.title.split(' ').join('-')}`}
                      >
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
            <li
              className={`nav-item has-dropdown ${
                currentPath.includes('contact') ? 'active' : ''
              } `}
              data-hover=""
            >
              <Link
                className="dropdown-toggle"
                href="/contact"
                data-toggle="dropdown"
              >
                <span>Contact</span>
              </Link>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <Link href="/contact/management">
                    <span>Management</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact/feedback-complaint">
                    <span>Feedback / complaint</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="module-holder">
            <div className="module module-search float-left">
              <div className="module-icon search-icon">
                {/* <i className="icon-search" data-hover=""></i> */}
                <FaMagnifyingGlass />
              </div>
            </div>
            <div className="module-contact">
              <a className="btn btn--secondary" href="doctors-timetable.html">
                doctors' timetable
              </a>
              <a
                className="btn btn--primary btn-line btn-line-after"
                href="page-appointments.html"
              >
                {' '}
                <span>make appointment</span>
                <span className="line">
                  {' '}
                  <span></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
