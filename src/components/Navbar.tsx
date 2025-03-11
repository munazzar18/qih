'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import departmentArray from '../../public/assets/department'
import Image from 'next/image'
import Logout from './Logout'
import { getDepartments } from '@/app/lib/getDepartments'

interface User {
  id: number
  name: string
  email: string
  roles: [
    {
      id: number
      name: string
    }
  ]
}

interface Department {
  id: number
  title: string
  description: string
  image: string
  user_id: number
  created_at: Date
}

const Navbar = ({ token, user }: { token: string; user: User | null }) => {
  const currentPath = usePathname()
  const [departments, setDepartments] = useState<Department[]>([])

  const [drop, setdrop] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const getAllDepartments = async () => {
    const res = await getDepartments()
    setDepartments(res.data)
  }

  useEffect(() => {
    getAllDepartments()
  }, [])

  return (
    <header className="header header-light header-topbar" id="navbar-spy">
      <nav className="navbar navbar-expand-xl navbar-sticky" id="primary-menu">
        <Link className="navbar-brand" href="/">
          <Image
            className="logo logo-dark"
            src="/assets/photos/logo_dark.png"
            width={400}
            height={400}
            alt="QIH logo"
          />

          <Image
            className="logo logo-mobile"
            src="/assets/photos/logo_dark.png"
            width={400}
            height={400}
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
              <Image
                src="/assets/images/module-language/en.png"
                width={30}
                height={30}
                alt="alt"
              />
              <span>english</span>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="lang-list">
              <ul>
                <li>
                  {' '}
                  <Image
                    src="/assets/images/module-language/en.png"
                    width={400}
                    height={400}
                    alt="alt"
                  />
                  <a href="#">english</a>
                </li>
                <li>
                  {' '}
                  <Image
                    src="/assets/images/module-language/ar.png"
                    width={400}
                    height={400}
                    alt="alt"
                  />
                  <a href="#">arabic</a>
                </li>
              </ul>
            </div>
          </div>
          <button
            onClick={() => setdrop(!drop)}
            className={`navbar-toggler ${drop ? '' : 'collapsed'}`}
            type="button"
            data-bs-toggle="collapse"
            aria-controls="navbarContent"
            aria-expanded={!drop}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className={`collapse navbar-collapse ${drop ? 'show' : ''}`}
          id="navbarContent"
        >
          <ul style={{ marginLeft: '50px' }} className="navbar-nav ">
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
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              style={{ position: 'relative' }}
              className="nav-item has-dropdown"
              id=""
            >
              <Link className="dropdown-toggle nav-link" href="/departments">
                <span>Departments</span>
              </Link>

              {isOpen && (
                <ul
                  className="dropdown-menu"
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-200%',
                    width: '100%',
                    minWidth: '1150px',
                    maxWidth: '1150px',
                    boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
                    zIndex: 1000,
                    padding: '20px',
                    backgroundColor: '#fff',
                    overflowWrap: 'break-word',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridTemplateRows: 'repeat(5, auto)',
                    gridGap: '15px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {departments?.length ? (
                    <>
                      {/* Display first 20 items */}
                      {departments?.slice(0, 20).map((item) => (
                        <li
                          key={item.id}
                          style={{
                            listStyle: 'none',
                            borderRadius: '8px 8px 0 8px',
                            border: '1px solid #ccc',
                            backgroundColor: '#f9f9f9',
                            height: '40px',
                            width: '100%',
                            marginBottom: '10px', // Adds spacing between items
                          }}
                        >
                          <Link
                            href={`/departments/${item.id}`}
                            className="dropdown-item"
                          >
                            <span
                              style={{
                                textDecoration: 'none',
                                color: '#616161',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                              }}
                            >
                              {item.title}
                            </span>
                          </Link>
                        </li>
                      ))}

                      {/* Display the 21st item as "More" link */}
                      {departments?.length > 19 && (
                        <li
                          style={{
                            listStyle: 'none',
                            borderRadius: '8px 8px 0 8px',
                            border: '1px solid #ccc',
                            backgroundColor: '#B8DDD7',
                            height: '40px',
                            width: '100%',
                          }}
                        >
                          <Link href="/departments" className="dropdown-item">
                            <span
                              style={{
                                textDecoration: 'none',
                                color: '#616161',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                              }}
                            >
                              All Departments
                            </span>
                          </Link>
                        </li>
                      )}
                    </>
                  ) : (
                    <li style={{ color: 'gray', padding: '10px' }}>
                      Please wait...
                    </li>
                  )}
                </ul>
              )}
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
                  <Link href="/services/dialysis">
                    <span>Dialysis</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services/radiology">
                    <span>Radiology</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services/speech-therapy">
                    <span>Speech Therapy</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services/bone-marrow-transplant">
                    <span>Bone marrow transplant</span>
                  </Link>
                </li>
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
                  <Link href="/make-appointment">
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
                  <Link href="/gallery">
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
                  <Link href="/about-us/events">
                    <span>Events</span>
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
            {token ? (
              <li
                className={`nav-item has-dropdown ${
                  currentPath.includes('auth') ? 'active' : ''
                }`}
                data-hover=""
              >
                {user && user.roles[0].name === 'admin' ? (
                  <>
                    <Link
                      className="dropdown-toggle"
                      href="/admin"
                      data-toggle="dropdown"
                    >
                      <span>Admin Dashboard</span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/admin/departments">
                          <span>Departments</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/admin/consultants">
                          <span>Consultants</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/admin/tickers">
                          <span>Tickers</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/admin/pages">
                          <span>Pages</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a href="">
                          <Logout />
                        </a>
                      </li>
                    </ul>
                  </>
                ) : user && user.roles[0].name === 'consultant' ? (
                  <>
                    <Link
                      className="dropdown-toggle"
                      href="/consultant-dashboard"
                      data-toggle="dropdown"
                    >
                      <span>Consultant Dashboard</span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/consultant-dashboard/profile">
                          <span>Profile</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/consultant-dashboard/settings">
                          <span>Settings</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a href="">
                          <Logout />
                        </a>
                      </li>
                    </ul>
                  </>
                ) : user && user.roles[0].name === 'patient' ? (
                  <>
                    <Link
                      className="dropdown-toggle"
                      href="/patient-dashboard"
                      data-toggle="dropdown"
                    >
                      <span>Patient Dashboard</span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/patient-dashboard/profile">
                          <span>Profile</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/patient-dashboard/settings">
                          <span>Settings</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a href="">
                          <Logout />
                        </a>
                      </li>
                    </ul>
                  </>
                ) : (
                  <a href="">
                    <Logout />
                  </a>
                )}
              </li>
            ) : (
              <li
                className={`nav-item  ${
                  currentPath.includes('auth') ? 'active' : ''
                }`}
                data-hover=""
              >
                <Link href="/auth/login" data-toggle="dropdown">
                  <span>Login</span>
                </Link>
              </li>
            )}
          </ul>

          <div className="module-holder">
            {/* <div className="module module-search float-left">
              <div className="module-icon search-icon">
                <FaMagnifyingGlass />
              </div>
            </div> */}
            <div className="module-contact">
              <span className="btn btn--secondary btn-line btn-line-after"></span>
              <Link
                className="btn btn--danger btn-line btn-line-after"
                href="/make-appointment"
              >
                make appointment
                <span className="line"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
