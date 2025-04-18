import { getPublicApplications } from '@/app/lib/getApplications'
import DeleteJobApplication from '@/components/DeleteJobApplication'
import React from 'react'
import { FaDownload } from 'react-icons/fa6'

interface Application {
  status: string
  message: string
  data: [
    {
      id: number
      name: string
      career_id: number
      email: string
      phone: string
      address: string
      city: string
      resume: string
      career: {
        id: number
        position: string
        description: string
        department_id: number
        open_date: string
        close_date: string
      }
    }
  ]
}

const JobApplicationsPage = async () => {
  const applications: Application = await getPublicApplications()

  return (
    <div className="container">
      <div className="m-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4>Job Applications</h4>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">City</th>
              <th scope="col text-center">Download Resume</th>
              <th scope="col text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications && applications?.data?.length
              ? applications?.data?.map((app, index) => (
                  <tr key={app.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{app?.name}</td>
                    <td>{app?.email}</td>
                    <td>{app?.phone}</td>
                    <td>{app?.city}</td>

                    <td className="text-center">
                      {app?.resume ? (
                        <a
                          href={`https://qih.driveo.pk/${app.resume}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          style={{ cursor: 'pointer' }}
                        >
                          <FaDownload />
                        </a>
                      ) : (
                        'No resume uploaded'
                      )}
                    </td>
                    <td>
                      <DeleteJobApplication id={app.id} />
                    </td>
                  </tr>
                ))
              : 'No applications found'}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default JobApplicationsPage
