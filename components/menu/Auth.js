import React from 'react'
import { BsPerson } from 'react-icons/bs'
import Link from 'next/link'
import auth from './menu.module.scss'

const Auth = () => {
  return (
    <div className={auth.box}>
      <BsPerson className={auth.person}/>
      <Link href='/signin'>Login</Link>
      <span>/</span>
      <Link href='/signup'>Register</Link>
    </div>
  )
}

export default Auth