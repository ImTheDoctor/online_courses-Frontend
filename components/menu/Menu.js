import React from 'react'
import Image from 'next/image'
import MenuLinks from './MenuLinks'
import Auth from './Auth'
import Logout from './Logout'
import { useAuthContext } from '/hooks/useAuthContext'

import menu from './menu.module.scss'
import Link from 'next/link'

const Menu = () => {
    const { user } = useAuthContext()

    return (
        <nav className={`container ${menu.navbar}`}>
            <Link href='/'>
                <Image src='/logo.png' width={132} height={22} alt='logo' />
            </Link>
            <MenuLinks />
            {!user
                ?
                <Auth />
                : <>
                    <Logout />
                </>}

        </nav>
    )
}

export default Menu