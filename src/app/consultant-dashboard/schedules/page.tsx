'use client'
import React from 'react'
import AvailabilityCalendar from '../../../components/Schedules'

const AvailabilityPage: React.FC = () => {
  const handleUpdateAvailability = (events: any[]) => {
    console.log('Updated availability:', events)
    // Here you would typically send this data to your backend
  }

  return (
    <div className="container py-4">
      <h3 className="mb-4">Set Your Availability</h3>
      <div className="card">
        <div className="card-body">
          <AvailabilityCalendar
            onUpdateAvailability={handleUpdateAvailability}
          />
        </div>
      </div>
    </div>
  )
}

export default AvailabilityPage
