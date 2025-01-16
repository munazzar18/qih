'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiEdit, FiTrash } from 'react-icons/fi'

interface Consultants {
  id: number
  name: string
  email: string
  created_at: string
  department: {
    id: number
    title: string
    created_at: string
  }
}

const AllConsultants = ({
  allConsultants,
}: {
  allConsultants: Consultants[]
}) => {
  const [consultants, setConsultants] = useState<Consultants[]>([])

  useEffect(() => {
    setConsultants(allConsultants)
  }, [])

  return (
    <div className="container">
      <div className="m-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4>Consultants</h4>
          </div>
          <div>
            <Link
              href="/admin/consultants/create"
              type="button"
              className="btn btn-primary"
            >
              Add consultant
            </Link>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Department</th>
              <th scope="col">Created At</th>
            </tr>
          </thead>
          <tbody>
            {consultants.map((consultant) => (
              <tr key={consultant.id}>
                <th scope="row">{consultant.id}</th>
                <td>{consultant.name}</td>
                <td>{consultant.email}</td>
                <td>{consultant.department.title}</td>
                <td>
                  {new Date(consultant.created_at).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}
                </td>
                <td>
                  <Link
                    className="me-4"
                    href={`/admin/consultants/edit/${consultant.id}`}
                  >
                    <FiEdit />
                  </Link>
                  <FiTrash type="button" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllConsultants
