'use client'

import { PageDeleteAction } from '@/app/_actions/_actions'
import React from 'react'
import toast from 'react-hot-toast'
import { FiTrash } from 'react-icons/fi'

const DeletePages = ({ id }: { id: number }) => {
  const handleDelete = async () => {
    const res = await PageDeleteAction(id)
    if (res.status === 'success') {
      toast.success(res.message)
    } else {
      toast.error(res.message)
    }
  }

  return (
    <button onClick={handleDelete}>
      <FiTrash />
    </button>
  )
}

export default DeletePages
