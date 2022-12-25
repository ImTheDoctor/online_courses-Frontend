import React from 'react'
import Link from 'next/link'
import { useLogout } from '/hooks/useLogout'
import {RxExit} from 'react-icons/rx'

const Logout = () => {
    const { logout } = useLogout()
    return (
        <div>
            <Link href='/' onClick={() => logout()}><RxExit /></Link>
        </div>
    )
}

export default Logout