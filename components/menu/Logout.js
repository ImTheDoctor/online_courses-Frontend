import React from 'react'
import Link from 'next/link'
import { useLogout } from '/hooks/useLogout'

const Logout = () => {
    const { logout } = useLogout()
    return (
        <div>
            <Link href='/signin' onClick={() => logout()}>Logout</Link>
        </div>
    )
}

export default Logout