'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Logout from './Logout'
import { getDepartments } from '@/app/lib/getDepartments'

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
  const [hoverMenu, setHoverMenu] = useState<string | null>(null)
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
  }, [])

  // Debug function - remove after fixing
  useEffect(() => {
    console.log('Hover states:', {
      hoverMenu,
      hoverDepartments,
      hoverServices,
      hoverUpdates,
    })
  }, [hoverMenu, hoverDepartments, hoverServices, hoverUpdates])

  const handleMouseEnterServices = () => {
    console.log('Mouse entered Services')
    setHoverServices(true)
  }

  const handleMouseEnterUpdates = () => {
    console.log('Mouse entered Updates')
    setHoverUpdates(true)
  }

  return (
    <header className="header header-light header-topbar" id="navbar-spy">
      <nav className="navbar navbar-expand-xl navbar-sticky" id="primary-menu">
        <Link className="navbar-brand" href="/">
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
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${drop ? 'show' : ''}`}
          id="navbarContent"
        >
          <ul className="navbar-nav">
            {/* === Education === */}
            <li
              className="nav-item has-dropdown"
              onMouseEnter={() => setHoverMenu('education')}
              onMouseLeave={() => setHoverMenu(null)}
            >
              <Link href="#" className="nav-link">
                Education
              </Link>
              {hoverMenu === 'education' && (
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://quaid-e-azam-digital-library.web.app/"
                      target="_blank"
                    >
                      Digital Library
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* === For Patients === */}
            <li
              className="nav-item has-dropdown"
              onMouseEnter={() => setHoverMenu('patients')}
              onMouseLeave={() => setHoverMenu(null)}
            >
              <Link href="#" className="nav-link">
                For Patients
              </Link>
              {hoverMenu === 'patients' && (
                <ul className="dropdown-menu">
                  {/* Departments */}
                  <li
                    className="dropdown-item has-dropdown"
                    onMouseEnter={() => setHoverDepartments(true)}
                    onMouseLeave={() => setHoverDepartments(false)}
                    style={{ position: 'relative' }}
                  >
                    <span>Departments</span>
                    {hoverDepartments && (
                      <ul
                        className="dropdown-menu"
                        style={{
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
                          visibility: 'visible',
                          opacity: 1,
                        }}
                      >
                        {departments.slice(0, 20).map((dep) => (
                          <li
                            key={dep.id}
                            style={{
                              listStyle: 'none',
                              height: '40px',
                              backgroundColor: '#f9f9f9',
                              borderRadius: '8px',
                              padding: '5px',
                            }}
                          >
                            <Link
                              href={`/departments/${dep.id}`}
                              className="dropdown-item"
                            >
                              <span
                                style={{ fontWeight: 'bold', color: '#616161' }}
                              >
                                {dep.title}
                              </span>
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href="/departments"
                            className="dropdown-item text-primary"
                          >
                            All Departments
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Services */}
                  <li
                    className="dropdown-item has-dropdown"
                    onMouseEnter={handleMouseEnterServices}
                    onMouseLeave={() => setHoverServices(false)}
                    style={{ position: 'relative' }}
                  >
                    <span>Services</span>
                    {hoverServices && (
                      <ul
                        className="dropdown-menu"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: '100%',
                          backgroundColor: '#fff',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                          zIndex: 1000,
                          display: 'block',
                          visibility: 'visible',
                          opacity: 1,
                          minWidth: '200px',
                          padding: '10px 0',
                        }}
                      >
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/services/dialysis"
                          >
                            Dialysis
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/services/radiology"
                          >
                            Radiology
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/services/laboratory"
                          >
                            Laboratory
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/services/emergency"
                          >
                            Emergency
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link className="dropdown-item" href="/make-appointment">
                      Appointments
                    </Link>
                  </li>

                  {/* Updates */}
                  <li
                    className="dropdown-item has-dropdown"
                    onMouseEnter={handleMouseEnterUpdates}
                    onMouseLeave={() => setHoverUpdates(false)}
                    style={{ position: 'relative' }}
                  >
                    <span>Updates</span>
                    {hoverUpdates && (
                      <ul
                        className="dropdown-menu"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: '100%',
                          backgroundColor: '#fff',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                          zIndex: 1000,
                          display: 'block',
                          visibility: 'visible',
                          opacity: 1,
                          minWidth: '200px',
                          padding: '10px 0',
                        }}
                      >
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/about-us/highlights"
                          >
                            Highlights
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/#latestNews">
                            News
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/#events">
                            Events
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            {/* === For Physicians === */}
            <li
              className="nav-item has-dropdown"
              onMouseEnter={() => setHoverMenu('physicians')}
              onMouseLeave={() => setHoverMenu(null)}
            >
              <Link href="#" className="nav-link">
                For Physicians
              </Link>
              {hoverMenu === 'physicians' && (
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://qih-portal-cbe58.web.app/"
                      target="_blank"
                    >
                      QIH Portal
                    </a>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/auth/login">
                      Login
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Careers */}
            <li
              className={`nav-item ${
                currentPath.includes('career') ? 'active' : ''
              }`}
            >
              <Link className="nav-link" href="/career">
                Careers
              </Link>
            </li>

            {/* About Us */}
            <li
              className="nav-item has-dropdown"
              onMouseEnter={() => setHoverMenu('about')}
              onMouseLeave={() => setHoverMenu(null)}
            >
              <Link href="#" className="nav-link">
                About Us
              </Link>
              {hoverMenu === 'about' && (
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/gallery">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/about-us/message-from-ceo"
                    >
                      Message from CEO
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/about-us/company-profile"
                    >
                      Company Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/about-us/sitemap">
                      Sitemaps
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Contact */}
            <li
              className={`nav-item ${
                currentPath.includes('contact') ? 'active' : ''
              }`}
            >
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>

            {/* Dashboard */}
            {token ? (
              <li
                className="nav-item has-dropdown"
                onMouseEnter={() => setHoverMenu('dashboard')}
                onMouseLeave={() => setHoverMenu(null)}
              >
                <Link href="#" className="nav-link">
                  Dashboard
                </Link>
                {hoverMenu === 'dashboard' && (
                  <ul className="dropdown-menu">
                    {user?.roles[0].name === 'admin' && (
                      <>
                        <li>
                          <Link className="dropdown-item" href="/admin">
                            Admin Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/admin/departments"
                          >
                            Departments
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/admin/consultants"
                          >
                            Consultants
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/admin/tickers">
                            Tickers
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/admin/pages">
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
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/consultant-dashboard/appointments"
                          >
                            Appointments
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/consultant-dashboard/schedules"
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
                            href="/patient-dashboard/profile"
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="/patient-dashboard/settings"
                          >
                            Settings
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
                )}
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" href="/auth/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
