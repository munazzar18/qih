import Link from 'next/link'
import React from 'react'
import departmentArray from '../../../../public/assets/department'
import Image from 'next/image'
import { getDepartments } from '@/app/lib/getDepartments'

interface Department {
  status: string
  message: string
  data: [
    {
      id: number
      title: string
      description: string
      image: string
      is_active: number
    }
  ]
}

const DepartmentsPage = async () => {
  const departments: Department = await getDepartments()

  return (
    <div className="wrapper clearfix" id="wrapperParallax">
      <section className="hero hero-9 bg-overlay bg-overlay-dark">
        <div className="bg-section">
          {' '}
          <Image
            src="/assets/images/departments/3.jpg"
            width={500}
            height={500}
            alt="background"
          />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-12 col-lg-5">
                <h2 className="hero-title">
                  wide range of medical services for your family
                </h2>
                <p className="hero-desc">
                  The healt and well-being of our patients and their health care
                  teamwill always be our priorty, so we best practices
                </p>
                <div className="hero-action">
                  {' '}
                  <a
                    className="btn btn--white btn-line btn-line-after btn-line-inversed"
                    href=""
                  >
                    {' '}
                    <span>more about us</span>
                    <span className="line">
                      <span></span>
                    </span>
                  </a>
                  <a
                    className="popup-video btn-video btn-video-2"
                    href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                  >
                    {' '}
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
              <div className="col-12">
                <ol className="breadcrumb d-flex justify-content-center">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/departments">departments</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="departments" id="departments-1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-3">
              <div className="heading heading-12 heading-13 text-center">
                <p className="heading-subtitle">
                  the best medical and general practice care!
                </p>
                <h2 className="heading-title">
                  providing medical care for stickest in our community.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {departments.data.map((dept) => {
              return (
                <div key={dept.id} className=" col-12 col-md-6 col-lg-4">
                  <div className="department-panel" data-hover="">
                    <Link href={`/departments/${dept.id}`}>
                      <div className="department-panel-holder">
                        <div className="department-img">
                          <Image
                            src={`https://qih.driveo.pk/${dept.image}`}
                            width={500}
                            height={500}
                            alt={`${dept.title} img`}
                          />
                        </div>
                        <div className="department-content">
                          <div className="department-title">
                            <h4>
                              <Link href={`/departments/${dept.id}`}>
                                {dept.title}
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DepartmentsPage
