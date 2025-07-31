'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Logout from './Logout'
import { getDepartments } from '@/app/lib/getDepartments'
import { FaAlignJustify } from 'react-icons/fa6'

interface User {
  id: number
  name: string
  email: string
  roles: [{ id: number; name: string }]
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
  const [drop, setDrop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Separate states for each top-level menu
  const [hoverEducation, setHoverEducation] = useState(false)
  const [hoverPatients, setHoverPatients] = useState(false)
  const [hoverPhysicians, setHoverPhysicians] = useState(false)
  const [hoverAbout, setHoverAbout] = useState(false)
  const [hoverDashboard, setHoverDashboard] = useState(false)

  // Separate states for each submenu within Patients
  const [hoverDepartments, setHoverDepartments] = useState(false)
  const [hoverServices, setHoverServices] = useState(false)
  const [hoverUpdates, setHoverUpdates] = useState(false)

  const [departments, setDepartments] = useState<Department[]>([])

  useEffect(() => {
    const fetchDepartments = async () => {
      const res = await getDepartments()
      setDepartments(res.data || [])
    }
    fetchDepartments()

    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 992)
      checkMobile()
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const closeAllMenus = () => {
    setDrop(false)
    setHoverEducation(false)
    setHoverPatients(false)
    setHoverPhysicians(false)
    setHoverAbout(false)
    setHoverDashboard(false)
    setHoverDepartments(false)
    setHoverServices(false)
    setHoverUpdates(false)
  }

  const toggleSubmenu = (menu: string) => {
    if (isMobile) {
      switch (menu) {
        case 'education':
          setHoverEducation(!hoverEducation)
          break
        case 'patients':
          setHoverPatients(!hoverPatients)
          break
        case 'physicians':
          setHoverPhysicians(!hoverPhysicians)
          break
        case 'about':
          setHoverAbout(!hoverAbout)
          break
        case 'dashboard':
          setHoverDashboard(!hoverDashboard)
          break
      }
    }
  }

  const getDashboardUrl = () => {
    if (!user || !user.roles.length) return '#'

    const roleName = user.roles[0].name.toLowerCase()
    if (roleName === 'admin') return '/admin'
    if (roleName === 'consultant') return '/consultant-dashboard'
    if (roleName === 'patient') return '/patient-dashboard'
    return '#'
  }

  return (
    <header className="header header-light header-topbar" id="navbar-spy">
      <nav className="navbar navbar-expand-xl navbar-sticky" id="primary-menu">
        <Link className="navbar-brand" href="/" onClick={closeAllMenus}>
          <Image
            className="logo logo-dark"
            src="/assets/photos/qih_logo.png"
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

        <button
          onClick={() => setDrop(!drop)}
          className={`navbar-toggler ${drop ? '' : 'collapsed'}`}
          type="button"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <FaAlignJustify />
          </span>
        </button>

        <div
          className={`collapse navbar-collapse ${drop ? 'show' : ''}`}
          id="navbarContent"
        >
          <ul className="navbar-nav">
            {/* === Education === */}
            <li
              className={`nav-item has-dropdown ${
                hoverEducation ? 'show' : ''
              }`}
              onMouseEnter={
                !isMobile ? () => setHoverEducation(true) : undefined
              }
              onMouseLeave={
                !isMobile ? () => setHoverEducation(false) : undefined
              }
            >
              <Link
                href="#"
                className="nav-link"
                onClick={(e) =>
                  isMobile && (e.preventDefault(), toggleSubmenu('education'))
                }
              >
                Education
              </Link>
              <ul className={`dropdown-menu ${hoverEducation ? 'show' : ''}`}>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://quaid-e-azam-digital-library.web.app/"
                    target="_blank"
                    onClick={closeAllMenus}
                  >
                    Digital Library
                  </a>
                </li>
              </ul>
            </li>

            {/* === For Patients === */}
            <li
              className={`nav-item has-dropdown ${hoverPatients ? 'show' : ''}`}
              onMouseEnter={
                !isMobile ? () => setHoverPatients(true) : undefined
              }
              onMouseLeave={
                !isMobile
                  ? () => {
                      setHoverPatients(false)
                      setHoverDepartments(false)
                      setHoverServices(false)
                      setHoverUpdates(false)
                    }
                  : undefined
              }
            >
              <Link
                href="#"
                className="nav-link"
                onClick={(e) =>
                  isMobile && (e.preventDefault(), toggleSubmenu('patients'))
                }
              >
                For Patients
              </Link>
              <ul className={`dropdown-menu ${hoverPatients ? 'show' : ''}`}>
                {/* Departments */}
                <li
                  className={`dropdown-item has-dropdown ${
                    hoverDepartments ? 'show' : ''
                  }`}
                  onMouseEnter={
                    !isMobile ? () => setHoverDepartments(true) : undefined
                  }
                  onMouseLeave={
                    !isMobile ? () => setHoverDepartments(false) : undefined
                  }
                >
                  <div
                    className="d-flex justify-content-between align-items-center"
                    onClick={(e) =>
                      isMobile &&
                      (e.preventDefault(),
                      setHoverDepartments(!hoverDepartments))
                    }
                  >
                    <span>Departments</span>
                    {isMobile && (
                      <span className="dropdown-arrow ms-2">
                        {hoverDepartments ? '−' : '+'}
                      </span>
                    )}
                  </div>

                  {/* Submenu only renders when active */}
                  {hoverDepartments && (
                    <ul
                      className="dropdown-submenu show"
                      style={
                        !isMobile
                          ? {
                              position: 'absolute',
                              top: 0,
                              left: '100%',
                              width: '900px',
                              display: 'grid',
                              gridTemplateColumns: 'repeat(3, 1fr)',
                              padding: '20px',
                              backgroundColor: '#fff',
                              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                              zIndex: 1000,
                            }
                          : {}
                      }
                    >
                      {departments.slice(0, 10).map((dep) => (
                        <li key={dep.id}>
                          <Link
                            href={`/departments/${dep.id}`}
                            className="dropdown-item"
                            onClick={closeAllMenus}
                          >
                            <span className="fw-bold text-gray-600">
                              {dep.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href="/departments"
                          className="dropdown-item text-primary"
                          onClick={closeAllMenus}
                        >
                          All Departments
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Services */}
                <li
                  className={`dropdown-item has-dropdown ${
                    hoverServices ? 'show' : ''
                  }`}
                  onMouseEnter={
                    !isMobile ? () => setHoverServices(true) : undefined
                  }
                  onMouseLeave={
                    !isMobile ? () => setHoverServices(false) : undefined
                  }
                >
                  <div
                    className="d-flex justify-content-between align-items-center"
                    onClick={(e) =>
                      isMobile &&
                      (e.preventDefault(), setHoverServices(!hoverServices))
                    }
                  >
                    <span>Services</span>
                    {isMobile && (
                      <span className="dropdown-arrow ms-2">
                        {hoverServices ? '−' : '+'}
                      </span>
                    )}
                  </div>

                  {/* Submenu only renders when active */}
                  {hoverServices && (
                    <ul
                      className="dropdown-submenu show"
                      style={
                        !isMobile
                          ? {
                              position: 'absolute',
                              top: 0,
                              left: '100%',
                              backgroundColor: '#fff',
                              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                              zIndex: 1000,
                              minWidth: '200px',
                              padding: '10px 0',
                            }
                          : {}
                      }
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          href="/services/dialysis"
                          onClick={closeAllMenus}
                        >
                          Dialysis
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="/services/radiology"
                          onClick={closeAllMenus}
                        >
                          Radiology
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="/services/laboratory"
                          onClick={closeAllMenus}
                        >
                          Laboratory
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="/services/emergency"
                          onClick={closeAllMenus}
                        >
                          Emergency
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link
                    href="/make-appointment"
                    onClick={closeAllMenus}
                    className="dropdown-item"
                  >
                    Appointments
                  </Link>
                </li>

                {/* Updates */}
                <li
                  className={`dropdown-item has-dropdown ${
                    hoverUpdates ? 'show' : ''
                  }`}
                  onMouseEnter={
                    !isMobile ? () => setHoverUpdates(true) : undefined
                  }
                  onMouseLeave={
                    !isMobile ? () => setHoverUpdates(false) : undefined
                  }
                >
                  <div
                    className="d-flex justify-content-between align-items-center"
                    onClick={(e) =>
                      isMobile &&
                      (e.preventDefault(), setHoverUpdates(!hoverUpdates))
                    }
                  >
                    <span>Updates</span>
                    {isMobile && (
                      <span className="dropdown-arrow ms-2">
                        {hoverUpdates ? '−' : '+'}
                      </span>
                    )}
                  </div>

                  {/* Submenu only renders when active */}
                  {hoverUpdates && (
                    <ul
                      className="dropdown-submenu show"
                      style={
                        !isMobile
                          ? {
                              position: 'absolute',
                              top: 0,
                              left: '100%',
                              backgroundColor: '#fff',
                              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                              zIndex: 1000,
                              minWidth: '200px',
                              padding: '10px 0',
                            }
                          : {}
                      }
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          href="/about-us/highlights"
                          onClick={closeAllMenus}
                        >
                          Highlights
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="/#latestNews"
                          onClick={closeAllMenus}
                        >
                          News
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="/#events"
                          onClick={closeAllMenus}
                        >
                          Events
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </li>

            {/* === For Physicians === */}
            <li
              className={`nav-item has-dropdown ${
                hoverPhysicians ? 'show' : ''
              }`}
              onMouseEnter={
                !isMobile ? () => setHoverPhysicians(true) : undefined
              }
              onMouseLeave={
                !isMobile ? () => setHoverPhysicians(false) : undefined
              }
            >
              <Link
                href="#"
                className="nav-link"
                onClick={(e) =>
                  isMobile && (e.preventDefault(), toggleSubmenu('physicians'))
                }
              >
                For Physicians
              </Link>
              <ul className={`dropdown-menu ${hoverPhysicians ? 'show' : ''}`}>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://qih-portal-cbe58.web.app/"
                    target="_blank"
                    onClick={closeAllMenus}
                  >
                    QIH Portal
                  </a>
                </li>
                {token ? (
                  <li
                    className={`nav-item has-dropdown ${
                      hoverDashboard ? 'show' : ''
                    }`}
                    onMouseEnter={
                      !isMobile ? () => setHoverDashboard(true) : undefined
                    }
                    onMouseLeave={
                      !isMobile ? () => setHoverDashboard(false) : undefined
                    }
                  >
                    <Link
                      href={getDashboardUrl()}
                      className="nav-link"
                      onClick={(e) => {
                        if (isMobile) {
                          e.preventDefault()
                          toggleSubmenu('dashboard')
                        } else {
                          closeAllMenus()
                        }
                      }}
                    >
                      Dashboard
                    </Link>

                    <ul
                      className={`dropdown-menu ${
                        hoverDashboard ? 'show' : ''
                      }`}
                      style={
                        !isMobile && hoverDashboard
                          ? {
                              position: 'absolute',
                              top: 0,
                              left: '100%',
                              backgroundColor: '#fff',
                              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                              zIndex: 1000,
                              minWidth: '200px',
                              padding: '10px 0',
                            }
                          : {}
                      }
                    >
                      {user?.roles[0].name === 'admin' && (
                        <>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/admin"
                              onClick={closeAllMenus}
                            >
                              Admin Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/admin/appointments"
                              onClick={closeAllMenus}
                            >
                              Appointments
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/admin/consultants"
                              onClick={closeAllMenus}
                            >
                              Consultants
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/admin/departments"
                              onClick={closeAllMenus}
                            >
                              Departments
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/admin/tickers"
                              onClick={closeAllMenus}
                            >
                              Tickers
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/admin/pages"
                              onClick={closeAllMenus}
                            >
                              Pages
                            </Link>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <Logout />
                            </a>
                          </li>
                        </>
                      )}
                      {user?.roles[0].name === 'consultant' && (
                        <>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/consultant-dashboard"
                              onClick={closeAllMenus}
                            >
                              Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/consultant-dashboard/appointments"
                              onClick={closeAllMenus}
                            >
                              Appointments
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/consultant-dashboard/schedules"
                              onClick={closeAllMenus}
                            >
                              Schedules
                            </Link>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <Logout />
                            </a>
                          </li>
                        </>
                      )}
                      {user?.roles[0].name === 'patient' && (
                        <>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/patient-dashboard"
                              onClick={closeAllMenus}
                            >
                              Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/patient-dashboard/appointments"
                              onClick={closeAllMenus}
                            >
                              Appointments
                            </Link>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <Logout />
                            </a>
                          </li>
                        </>
                      )}
                    </ul>
                  </li>
                ) : (
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/auth/login"
                      onClick={closeAllMenus}
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </li>

            {/* Careers */}
            <li
              className={`nav-item ${
                currentPath.includes('career') ? 'active' : ''
              }`}
            >
              <Link className="nav-link" href="/career" onClick={closeAllMenus}>
                Careers
              </Link>
            </li>

            {/* About Us */}
            <li
              className={`nav-item has-dropdown ${hoverAbout ? 'show' : ''}`}
              onMouseEnter={!isMobile ? () => setHoverAbout(true) : undefined}
              onMouseLeave={!isMobile ? () => setHoverAbout(false) : undefined}
            >
              <Link
                href="#"
                className="nav-link"
                onClick={(e) =>
                  isMobile && (e.preventDefault(), toggleSubmenu('about'))
                }
              >
                About Us
              </Link>
              <ul className={`dropdown-menu ${hoverAbout ? 'show' : ''}`}>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/gallery"
                    onClick={closeAllMenus}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/about-us/message-from-ceo"
                    onClick={closeAllMenus}
                  >
                    Message from CEO
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/about-us/company-profile"
                    onClick={closeAllMenus}
                  >
                    Company Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/about-us/sitemap"
                    onClick={closeAllMenus}
                  >
                    Sitemaps
                  </Link>
                </li>
              </ul>
            </li>

            {/* Contact */}
            <li
              className={`nav-item ${
                currentPath.includes('contact') ? 'active' : ''
              }`}
            >
              <Link
                className="nav-link"
                href="/contact"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
