'use client'
import { ApplyToJobAction, UploadFileAction } from '@/app/_actions/_actions'
import {
  applyToJobSchema,
  ApplyToJobSchema,
} from '@/app/utils/ValidationSchema'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Loader from './Loader'

const ApplyToJob = ({ careerId }: { careerId: number }) => {
  const [loading, setLoading] = useState(false)
  const [myForm, setMyForm] = useState<ApplyToJobSchema>({
    name: '',
    career_id: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    resume: '',
  })

  const [errors, setErrors] = useState<{
    [key in keyof ApplyToJobSchema]?: string
  }>({})

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    const filePath = files[0]
    const formData = new FormData()
    formData.append('file', filePath)
    const res = await UploadFileAction(formData)
    if (res.status === 'success') {
      toast.success(res.message)
      setMyForm({ ...myForm, resume: res.data.file_path })
    } else {
      toast.error(res.message)
    }
  }

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target
    setMyForm({
      ...myForm,
      [name]: value,
    })
    if (errors[name as keyof ApplyToJobSchema]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const result = applyToJobSchema.safeParse(myForm)
    if (result.success) {
      const formData = new FormData()

      formData.append('name', myForm.name)
      formData.append('career_id', myForm.career_id)
      formData.append('email', myForm.email)
      formData.append('phone', myForm.phone)
      formData.append('address', myForm.address)
      formData.append('city', myForm.city)
      formData.append('resume', myForm.resume)

      const res = await ApplyToJobAction(formData)
      if (res.status === 'success') {
        setLoading(false)
        toast.success(res.message)
        setMyForm({
          name: '',
          career_id: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          resume: '',
        })
      } else {
        setLoading(false)
        toast.error(res.message)
      }
    } else {
      setLoading(false)
      const fieldErrors: { [key in keyof ApplyToJobSchema]?: string } = {}
      result.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof ApplyToJobSchema
        fieldErrors[fieldName] = error.message
      })
      setErrors(fieldErrors)
    }
  }

  return (
    <div className="contact-card">
      {loading && <Loader />}
      <div className="contact-body">
        <h5 className="card-heading mb-5">Apply Now</h5>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-md-6">
              <input
                className="form-control"
                type="text"
                name="name"
                value={myForm.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn--secondary">
                <span>Submit</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ApplyToJob
