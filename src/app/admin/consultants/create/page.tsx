import { getDepartments } from '@/app/lib/getDepartments'
import CreateConsultant from '@/components/CreateConsultants'
import React from 'react'

const CreateConsultantPage = async () => {
  const departments = await getDepartments()
  return (
    <div>
      <CreateConsultant allDepartments={departments} />
    </div>
  )
}

export default CreateConsultantPage
