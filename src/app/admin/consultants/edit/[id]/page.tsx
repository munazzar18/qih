import React from 'react'

const EditConsultantPage = async (props: {
  params: Promise<{ id: number }>
}) => {
  const params = await props.params
  const id = params.id
  return <div>EditConsultantPage</div>
}

export default EditConsultantPage
