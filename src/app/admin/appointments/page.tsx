import { getAppointments } from '@/app/lib/getAppointments'
import Link from 'next/link'
import React from 'react'

interface Appointment {
  status: string
  message: string
  data: [
    {
      id: number
      mr_no: number
      patient_name: string
      mobile_no: string
      appointment_datetime: string
      consultant: {
        id: number
        name: string
        email: string
      }
      department: {
        id: number
        title: string
        description: string
      }
      user: {
        id: number
        name: string
        email: string
      }
    }
  ]
}

const AdminAppointments = async () => {
  const allAppointments: Appointment = await getAppointments()

  return (
    <div className="container">
      <div className="m-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4>Appointments</h4>
          </div>
          <div>
            <Link
              href="/admin/appointments/create"
              type="button"
              className="btn btn-primary"
            >
              Add Appointment
            </Link>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Patient Mobile No</th>
              <th scope="col">Appointment Date Time</th>
              <th scope="col">Consultant</th>
              <th scope="col">Booked By</th>
            </tr>
          </thead>
          <tbody>
            {allAppointments?.data.length
              ? allAppointments.data.map((appointment, index) => (
                  <tr key={appointment.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{appointment.patient_name}</td>
                    <td>{appointment.mobile_no}</td>
                    <td>{appointment.appointment_datetime}</td>
                    <td>{appointment.consultant.name}</td>
                    <td>{appointment.user.name}</td>
                  </tr>
                ))
              : 'no appointments booked'}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminAppointments
