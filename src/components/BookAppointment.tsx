'use client'
import { MakePublicAppointmentAction } from '@/app/_actions/_actions'
import {
  getConsultantsByDepartmentId,
  getPublicConsultants,
} from '@/app/lib/getConsultants'
import {
  MakeAppointmentSchema,
  makeAppointmentSchema,
} from '@/app/utils/ValidationSchema'
import React, { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { getDepartments } from '@/app/lib/getDepartments'
import Loader from './Loader'
import { formatDateTime } from '@/app/utils/helper'

interface Consultant {
  id: number
  name: string
  email: string
}

interface Department {
  id: number
  title: string
  description: string
}

const BookAppointment = ({
  consultantId,
  departmentId,
}: {
  consultantId: number
  departmentId: number
}) => {
  const [departments, setDepartments] = useState<Department[]>([])
  const [consultants, setConsultants] = useState<Consultant[]>([])

  const getAllDepartments = async () => {
    setLoading(true)
    const res = await getDepartments()
    setDepartments(res.data)
    setLoading(false)
  }

  const getConsultants = async () => {
    if (!myForm.department_id) return
    setLoading(true)
    const res = await getConsultantsByDepartmentId(+myForm.department_id)
    setConsultants(res.data)
    setLoading(false)
  }

  const [myForm, setMyForm] = useState<MakeAppointmentSchema>({
    mr_no: '',
    patient_name: '',
    mobile_no: '',
    appointment_dateTime: '',
    department_id: departmentId?.toString(),
    consultant_id: consultantId?.toString(),
    message: '',
  })

  const [errors, setErrors] = useState<{
    [key in keyof MakeAppointmentSchema]?: string
  }>({})

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target
    setMyForm({
      ...myForm,
      [name]: value,
    })
    if (errors[name as keyof MakeAppointmentSchema]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  useEffect(() => {
    getAllDepartments()
    getConsultants()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const result = makeAppointmentSchema.safeParse(myForm)
    if (result.success) {
      const formData = new FormData()
      const formatteddateTime = formatDateTime(result.data.appointment_dateTime)
      formData.append('mr_no', result.data.mr_no)
      formData.append('patient_name', result.data.patient_name)
      formData.append('mobile_no', result.data.mobile_no)
      formData.append('appointment_dateTime', formatteddateTime)
      formData.append('department_id', departmentId?.toString())
      formData.append('consultant_id', consultantId?.toString())
      formData.append('message', result.data.message)
      const res = await MakePublicAppointmentAction(formData)
      if (res.status === 'success') {
        setLoading(false)
        toast.success(res.message)
        setMyForm({
          mr_no: '',
          patient_name: '',
          mobile_no: '',
          appointment_dateTime: '',
          department_id: '',
          consultant_id: '',
          message: '',
        })
      } else {
        setLoading(false)
        toast.error(res.message)
      }
    } else {
      setLoading(false)
      const fieldErrors: { [key in keyof MakeAppointmentSchema]?: string } = {}
      result.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof MakeAppointmentSchema
        fieldErrors[fieldName] = error.message
      })
      setErrors(fieldErrors)
    }
  }

  return (
    <div className="contact-card">
      {loading && <Loader />}
      <div className="contact-body">
        <h5 className="card-heading mb-5">Book an appointment</h5>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="select-holder">
                <select
                  className="form-control"
                  name="department_id"
                  value={myForm.department_id || ''}
                  onChange={handleChange}
                >
                  <option value="">Select Department</option>
                  {departments?.length > 0 ? (
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
                <div className="badge">department</div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="select-holder">
                <select
                  className="form-control"
                  name="consultant_id"
                  value={myForm.consultant_id || ''}
                  onChange={handleChange}
                >
                  <option value="">Select Consultant</option>
                  {consultants && consultants?.length > 0 ? (
                    consultants?.map((consultant) => (
                      <option key={consultant.id} value={consultant.id}>
                        {consultant.name}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      No consultants available
                    </option>
                  )}
                </select>
                {errors.consultant_id && (
                  <p className="text-danger">{errors.consultant_id}</p>
                )}
                <div className="badge">choose doctor</div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <input
                className="form-control"
                type="text"
                name="mr_no"
                value={myForm.mr_no}
                onChange={handleChange}
                placeholder="MR No"
              />
              {errors.mr_no && <p className="text-danger">{errors.mr_no}</p>}
            </div>
            <div className="col-12 col-md-6">
              <input
                className="form-control"
                type="text"
                name="patient_name"
                value={myForm.patient_name}
                onChange={handleChange}
                placeholder="Patient Name"
              />
              {errors.patient_name && (
                <p className="text-danger">{errors.patient_name}</p>
              )}
            </div>
            <div className="col-12 col-md-6">
              <input
                className="form-control"
                type="text"
                name="mobile_no"
                value={myForm.mobile_no}
                onChange={handleChange}
                placeholder="Mobile Number"
              />
              {errors.mobile_no && (
                <p className="text-danger">{errors.mobile_no}</p>
              )}
            </div>
            <div className="col-12 col-md-6">
              <input
                aria-label="Date and time"
                className="form-control"
                name="appointment_dateTime"
                value={myForm.appointment_dateTime}
                onChange={handleChange}
                type="datetime-local"
                min={Date.now()}
              />
              {errors.appointment_dateTime && (
                <p className="text-danger">{errors.appointment_dateTime}</p>
              )}
            </div>
            <div className="col-12 col-md-6 ">
              <textarea
                className="form-control"
                name="message"
                value={myForm.message}
                onChange={handleChange}
                placeholder="Message"
              ></textarea>
              {errors.message && (
                <p className="text-danger">{errors.message}</p>
              )}
            </div>

            <div className="col-12">
              <button
                type="submit"
                className="btn btn--secondary btn-line btn-line-before btn--block"
                style={{ width: '200px' }}
              >
                <span className="line">
                  {' '}
                  <span> </span>
                </span>
                <span>book appointment</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookAppointment
