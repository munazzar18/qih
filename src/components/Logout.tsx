import { LogoutAction } from '@/app/_actions/_actions'
import React from 'react'
const Logout = () => {
  return (
    <form action={LogoutAction}>
      <div>
        <button type="submit">Logout</button>
      </div>
    </form>
  )
}

export default Logout
