import { getConsultants } from '@/app/lib/getConsultants'
import AllConsultants from '@/components/AllConsultants'
import React from 'react'

const ConsultantsPage = async () => {
  const allConsultants = await getConsultants();
  console.log('allConsultants',allConsultants);

  return (
    <div>
      <AllConsultants allConsultants={allConsultants} />
    </div>
  )
}

export default ConsultantsPage
