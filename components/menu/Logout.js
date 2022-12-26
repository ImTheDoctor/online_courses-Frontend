import React from 'react'
import Link from 'next/link'
import { useLogout } from '/hooks/useLogout'
import { CiLogout } from "react-icons/ci";


const Logout = () => {
    const { logout } = useLogout()
    return (
        <div>
            <Link href='/' onClick={() => logout()}><CiLogout /></Link>
        </div>
    )
}

export default Logout