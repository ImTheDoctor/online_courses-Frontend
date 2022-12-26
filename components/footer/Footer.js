import React from 'react'
import { footer, top, bottom, heart, tel, mail, top_box, socials } from './footer.module.scss'
import Image from 'next/image'
import { AiOutlineHeart, AiOutlineMail, AiOutlineYoutube } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa'

import MenuLinks from '../menu/MenuLinks'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={footer}>
            <div className={`container ${top}`}>
                <div className={top_box}>
                    <Image src='/logo-black.png' width={132} height={22} alt='logo' />
                    <p>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. </p>
                </div>
                <div className={top_box}>
                    <h3>SITE MAP</h3>
                    <MenuLinks />
                </div>
                <div className={top_box}>
                    <h3>CONTACT US</h3>
                    <address>
                        <Link href='tel:+4055550128'><BsPhone className={tel} />(405) 555-0128</Link>
                        <Link href='mailto:hello@createx.com'><AiOutlineMail className={mail} />hello@createx.com</Link>
                    </address>
                </div>
                <div className={top_box}>
                    <h3>FOLLOW US</h3>
                    <span>*Follow us on social networks to stay up to date with Createx SEO Agency updates.</span>
                    <div className={socials}>
                        <Link href='https://www.facebook.com/' aria-label="facebook" target='_blank'><FiFacebook /></Link>
                        <Link href='https://www.twitter.com/' aria-label="twitter" target='_blank'><FiTwitter /></Link>
                        <Link href='https://www.youtube.com/' aria-label="youtube" target='_blank'><AiOutlineYoutube /></Link>
                        <Link href='https://web.telegram.org/z/' aria-label="telegram" target='_blank'><FaTelegramPlane /></Link>
                        <Link href='https://www.instagram.com/' aria-label="instagram" target='_blank'><FiInstagram /></Link>
                        <Link href='https://www.linkedin.com/feed/' aria-label="linkedin" target='_blank'><FaLinkedinIn /></Link>
                    </div>
                </div>
            </div>
            <div className={bottom}>
                <div className={`container ${bottom}`}>
                    <p>&copy; All rights reserved. Made with <AiOutlineHeart className={heart} /> by Henrik Hayrapetyan</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer