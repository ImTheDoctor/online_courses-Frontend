import React from 'react'
import Image from 'next/image'
import MenuLinks from './MenuLinks'
import Auth from './Auth'
import Logout from './Logout'
import { useAuthContext } from '/hooks/useAuthContext'
import {VscAccount} from 'react-icons/vsc'

import menu from './menu.module.scss'
import Link from 'next/link'

const Menu = () => {
    const { tkn } = useAuthContext()

    return (
        <nav className={`container ${menu.navbar}`}>
            <Link href='/'>
                <Image src='/logo.png' width={132} height={22} alt='logo' />
            </Link>
            <MenuLinks />
            {!tkn
                ?
                <Auth />
                : <div className={menu.auth_div}>
                    <VscAccount className={menu.account}/>
                    <p>{typeof window !== 'undefined' ? localStorage.getItem('user') : ''}</p>
                    <Logout />
                </div>}
        </nav>
    )
}

export default Menu