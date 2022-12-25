import React from 'react'
import Link from 'next/link'

import menuLinks from './menu.module.scss'

const menu_list = [
    {
        title: 'About us',
        path: '/about'
    },
    {
        title: 'Courses',
        path: '/courses'
    },
    {
        title: 'Contacts',
        path: '/contacts'
    }
]
const MenuLinks = () => {
    return (
        <ul className={menuLinks.menu}>
            {
                menu_list.map((menu, idx) => (
                    
                        <li key={idx}>
                            <Link href={menu.path}>{menu.title}</Link>
                        </li>
                ))
            }
        </ul>
    )
}

export default MenuLinks