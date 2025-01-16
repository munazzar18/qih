'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoFileTrayStacked, IoPeopleSharp, IoPower } from 'react-icons/io5'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { LogoutAction } from '@/app/_actions/_actions'

const Sidebar = ({
  items,
}: {
  items: {
    id: number
    name: string
    link: string
    icon: React.ReactNode
    children?: { id: number; name: string; link: string }[]
  }[]
}) => {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<number[]>([])
  const toggleDropdown = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    )
  }

  return (
    <div
      className="d-flex flex-column vh-100 bg-primary text-white p-2"
      style={{ width: '16rem' }}
    >
      <div className="flex-grow-1 overflow-auto">
        <ul className="list-unstyled">
          <li className="text-center py-3">
            <Link
              href="/"
              className="text-decoration-none text-white d-flex flex-column align-items-center"
            >
              <img
                src="/assets/photos/logo.png"
                alt="findtute logo"
                className="mb-2"
                width={200}
                height={60}
              />
              {/* <span className="fw-bold fs-5">QIH</span> */}
            </Link>
          </li>

          {items?.map((item) => (
            <li key={item.id}>
              {item.children ? (
                <>
                  <a
                    onClick={() => toggleDropdown(item.id)}
                    className={`d-flex align-items-center py-2 px-3 text-decoration-none text-white ${
                      pathname === item.link ? 'fw-bold bg-secondary' : ''
                    }`}
                    role="button"
                  >
                    <span className="me-2">{item.icon}</span>
                    <span>{item.name}</span>
                    <span className="ms-auto">
                      {expandedItems.includes(item.id) ? (
                        <FaAngleUp />
                      ) : (
                        <FaAngleDown />
                      )}
                    </span>
                  </a>
                  {expandedItems.includes(item.id) && (
                    <ul className="list-unstyled ps-4">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <Link
                            href={child.link}
                            className={`d-block py-1 text-decoration-none text-white ${
                              pathname === child.link
                                ? 'fw-bold bg-secondary'
                                : ''
                            }`}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.link}
                  className={`d-flex align-items-center py-2 px-3 text-decoration-none text-white ${
                    pathname === item.link ? 'fw-bold bg-secondary' : ''
                  }`}
                >
                  <span className="me-2">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <a
          className="d-flex align-items-center py-2 px-3 text-decoration-none text-white"
          role="button"
        >
          <form action={LogoutAction}>
            <span className="d-flex align-items-center">
              <button
                type="submit"
                className="btn btn-link text-white text-decoration-none p-0"
              >
                Logout
              </button>
            </span>
          </form>
        </a>
      </div>
    </div>
  )
}

export default Sidebar
