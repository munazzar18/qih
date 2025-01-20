'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiEdit, FiTrash } from 'react-icons/fi'

interface Department {
  id: number
  title: string
  description: string
  image: string
  user_id: number
  created_at: Date
}

const Departments = ({ departments }: { departments: Department[] }) => {

  const [departmentsArr, setDepartmentsArr] = useState(departments);

  const handleEdit = async (id: number) => {}


  const handleDelete = async (id: number) => {
    setDepartmentsArr(departmentsArr.filter((_, i) => i != id));

    console.log(departmentsArr)
  }




  return (
    <div className="container">
      <div className="m-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4>Departments</h4>
          </div>
          <div>
            <Link
              href="/admin/departments/create"
              type="button"
              className="btn btn-primary"
            >
              Add Department
            </Link>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Department</th>
              <th scope="col">Created At</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(departmentsArr) &&
              departmentsArr.map((department) => (
                <tr key={department.id}>
                  <th scope="row">{department.id}</th>
                  <td>{department.title}</td>
                  <td>
                    {new Date(department.created_at).toLocaleDateString(
                      'en-GB',
                      {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      }
                    )}
                  </td>
                  <td>
                    <Link
                      className="me-4"
                      href={`/admin/departments/edit/${department.id}`}
                    >
                      <FiEdit />
                    </Link>
                    <FiTrash onClick={() => handleDelete(department.id)} type="button" />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Departments
