import React from 'react'
import { BsPerson } from 'react-icons/bs'
import Link from 'next/link'

const Auth = () => {
  // const { user } = useAuthContext()
  return (
    <div>
      <BsPerson />
      <Link href='/signup'>Sign Up</Link>
      <Link href='/signin'>Sign In</Link>
    </div>
  )
}

export default Auth