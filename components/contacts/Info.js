import React from 'react'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import Link from 'next/link'

const Info = () => {
    return (
        <address>
            <Link href='mailto:hello@createx.com'>
                <p><AiOutlineMail /> <span>Talk to us:</span></p>
                <span>hello@createx.com</span>
            </Link>
            <Link href='tel:+4055550128'>
                <p><BsPhone /><span>Call us:</span> </p>
                <span>(405) 555-0128</span>
            </Link>
            <Link href='https://www.google.com/maps?ll=40.16813,44.689903&z=9&t=m&hl=ru&gl=US&mapclient=embed'>
                <p><BiMap /> <span>Address:</span></p>
                <span>2464 Royal Ln. Mesa, New Jersey 45463, USA</span>
            </Link>
        </address>
    )
}

export default Info