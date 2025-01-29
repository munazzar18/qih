'use client'
import {
  ConsultantCreateAction,
  UploadFileAction,
} from '@/app/_actions/_actions'
import {
  ConstultantSchema,
  consultantSchema,
} from '@/app/utils/ValidationSchema'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface Department {
  id: number
  title: string
  created_at: Date
}

const CreateConsultant = ({
  allDepartments,
}: {
  allDepartments: Department[]
}) => {
  const [myForm, setMyForm] = useState<ConstultantSchema>({
    name: '',
    email: '',
    office_extention: '',
    photo: '',
    department_id: '1',
  })

  const [errors, setErrors] = useState<
    {
      [key in keyof ConstultantSchema]?: string
    }
  >({})

  const [departments, setDepartments] = useState<Department[]>([])

  useEffect(() => {
    setDepartments(allDepartments)
  }, [])

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    const filePath = files[0]
    const formData = new FormData()
    formData.append('file', filePath)
    const res = await UploadFileAction(formData)
    if (res.status === 'success') {
      toast.success(res.status)
      setMyForm({
        ...myForm,
        photo: res.data.file_path,
      })
    } else {
      toast.error(res.status)
    }
  }

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target
    setMyForm({
      ...myForm,
      [name]: value,
    })
    if (errors[name as keyof ConstultantSchema]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('FormData:', myForm)
    const result = consultantSchema.safeParse(myForm)
    if (result.success) {
      const formData = new FormData()
      formData.append('name', result.data.name)
      formData.append('email', result.data.email)
      formData.append('office_extention', result.data.office_extention)
      formData.append('photo', result.data.photo)
      formData.append('department_id', result.data.department_id.toString())
      const res = await ConsultantCreateAction(formData)
      console.log('RESult:', res);
        if (res.status === 'success') {
          toast.success(res.message)
        } else {
          toast.error(res.message)
        }
    } else {
      const fieldErrors: { [key in keyof ConstultantSchema]?: string } = {}
      result.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof ConstultantSchema
        fieldErrors[fieldName] = error.message
      })
      setErrors(fieldErrors)
    }
  }

  return (
    <div className="container">
      <div className="m-5">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 ">
            <div className="login-card">
              <div className="heading heading-1 text--center">
                <h2 className="heading-title">Create Consultant</h2>
              </div>
              <div className="login-body">
                <form className="" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-6">
                      <label className="fw-bold text-black">Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Enter Consultant Name"
                        value={myForm.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <p className="text-danger">{errors.name}</p>
                      )}
                    </div>
                    <div className="col-6">
                      <label className="fw-bold text-black">Email</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={myForm.email}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <p className="text-danger">{errors.email}</p>
                      )}
                    </div>
                    <div className="col-6">
                      <label className="fw-bold text-black">
                        Office Extention
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="office_extention"
                        placeholder="Enter office extention"
                        value={myForm.office_extention}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <p className="text-danger">{errors.office_extention}</p>
                      )}
                    </div>
                    <div className="col-6">
                      <label className="fw-bold text-black">Photo</label>
                      <input
                        name="photo"
                        type="file"
                        className="form-control text-center"
                        onChange={handleUpload}
                      />
                      {errors.photo && (
                        <p className="text-danger">{errors.photo}</p>
                      )}
                    </div>
                    <div className="col-12">
                      <label className="fw-bold text-black">
                        Select Department
                      </label>
                      <select
                        className="form-control"
                        name="department_id"
                        value={myForm.department_id || ''} // Default to empty string if department_id is undefined or null
                        onChange={handleChange}
                      >
                        <option value="">Select Department</option>
                        {departments.length > 0 ? (
                          departments.map((department) => (
                            <option key={department.id} value={department.id}>
                              {department.title}
                            </option>
                          ))
                        ) : (
                          <option value="" disabled>
                            No departments available
                          </option>
                        )}
                      </select>

                      {errors.department_id && (
                        <p className="text-danger">{errors.department_id}</p>
                      )}
                    </div>

                    <div className="col-12">
                      <button className="btn btn--primary" type="submit">
                        Save
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

export default CreateConsultant
