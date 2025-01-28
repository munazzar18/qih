'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

interface DepartmentData {
  id: number;
  title: string;
  description: string;
  image: string;
  user_id: number;
  created_at: Date;
}

interface Department {
  status: string;
  message: string;
  data: DepartmentData[];
}

const Departments = ({ departments }: { departments: Department }) => {
  const [departmentsArr, setDepartmentsArr] = useState(departments.data);

  const handleEdit = async (id: number) => {
    console.log(`Edit department with id: ${id}`);
  };

  const handleDelete = async (id: number) => {
    setDepartmentsArr(departmentsArr.filter((department) => department.id !== id));
  };

  return (
    <div className="container">
      <div className="m-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4>Departments</h4>
          </div>
          <div>
            <Link href="/admin/departments/create" className="btn btn-primary">
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
            {departmentsArr.map((department, index) => (
              <tr key={department.id}>
                <th scope="row">{index + 1}</th>
                <td>{department.title}</td>
                <td>
                  {new Date(department.created_at).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}
                </td>
                <td>
                  <Link className="me-4" href={`/admin/departments/edit/${department.id}`}>
                    <FiEdit role="button" aria-label="Edit department" />
                  </Link>
                  <FiTrash
                    onClick={() => handleDelete(department.id)}
                    type="button"
                    role="button"
                    aria-label="Delete department"
                    style={{ cursor: 'pointer' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Departments;
