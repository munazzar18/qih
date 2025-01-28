import { getDepartments } from '@/app/lib/getDepartments'
import CreateConsultant from '@/components/CreateConsultants'
import React from 'react'

const CreateConsultantPage = async () => {
  const departments = await getDepartments();
  // console.log('this is departments',departments)
  return (
    <div>
      <CreateConsultant allDepartments={departments} />
    </div>
  )
}

export default CreateConsultantPage
