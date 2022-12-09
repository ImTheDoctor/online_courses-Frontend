import React from 'react'
import Image from 'next/image'
import MenuLinks from './MenuLinks'
import Auth from './Auth'

import menu from './menu.module.scss'
import Link from 'next/link'

const Menu = () => {
    return (
        <nav className={`container ${menu.navbar}`}>
            <Link href='/'>
                <Image src='/logo.png' width={132} height={22} alt='logo' />
            </Link>
            <MenuLinks />
            <Auth />
        </nav>
    )
}

export default Menu