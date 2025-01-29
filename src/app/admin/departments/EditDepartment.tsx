'use client'
import { DepartmentCreateAction, EditDepartmentAction } from '@/app/_actions/_actions';
import {
  DepartmentSchema,
  departmentSchema,
} from '@/app/utils/ValidationSchema'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

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
  data: DepartmentData;
}

const EditDepartment = ({ department }: { department: Department }) => {

  const [departmentId, setDeparmentId] = useState(0)

  useEffect(() => {

    setDeparmentId(department.data.id)

  }, [department])
  
  const [myForm, setMyForm] = useState<DepartmentSchema>({
    title: department.data.title,
    description: department.data.description
  })

  const [errors, setErrors] = useState<{
    [key in keyof DepartmentSchema]?: string
  }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target
    setMyForm({
      ...myForm,
      [name]: value,
    })
    if (errors[name as keyof DepartmentSchema]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = departmentSchema.safeParse(myForm)
    if (result.success) {
      const formData = new FormData()
      formData.append('title', result.data.title)
      formData.append('description', result.data.description)
      const res = await EditDepartmentAction(formData , departmentId)
      toast.success('Department created successfully')
        if (res.status === 'success') {
          toast.success(res.message)
        } else {
          toast.error(res.message)
        }
    } else {
      const fieldErrors: { [key in keyof DepartmentSchema]?: string } = {}
      result.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof DepartmentSchema
        fieldErrors[fieldName] = error.message
      })
      setErrors(fieldErrors)
    }
  }

  return (
    <div className="container">
      <div className="m-5">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="login-card">
              <div className="heading heading-1 text--center">
                <h2 className="heading-title">Update Department</h2>
              </div>
              <div className="login-body">
                <form className="" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <label>Department Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="title"
                        placeholder="Enter Department Name"
                        value={myForm.title}
                        onChange={handleChange}
                      />
                      {errors.title && (
                        <p className="text-danger">{errors.title}</p>
                      )}
                    </div>
                    <div className="col-12">
                      <label>Department Description</label>
                      <input
                        className="form-control"
                        type="text"
                        name="description"
                        placeholder="Enter Department Description"
                        value={myForm.description}
                        onChange={handleChange}
                      />
                      {errors.description && (
                        <p className="text-danger">{errors.description}</p>
                      )}
                    </div>

                    <div className="col-12">
                      <button className="btn btn--primary" type="submit">
                        Update
                      </button>
                    </div>
                    <div className="col-12">
                      <div className="login-result"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditDepartment
