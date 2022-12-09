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
                    <Link href='tel:+4055550128'><BsPhone className={tel} />(405) 555-0128</Link>
                    <Link href='mailto:hello@createx.com'><AiOutlineMail className={mail} />hello@createx.com</Link>
                </div>
                <div className={top_box}>
                    <h3>SIGN UP TO OUR NEWSLETTER</h3>
                    <input type="text" placeholder="Email address" name="mail" required ></input>
                    <span>*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</span>
                    <div className={socials}>
                        <Link href='https://www.facebook.com/'><FiFacebook /></Link>
                        <Link href='https://www.twitter.com/'><FiTwitter /></Link>
                        <Link href='https://www.youtube.com/'><AiOutlineYoutube /></Link>
                        <Link href='https://web.telegram.org/z/'><FaTelegramPlane /></Link>
                        <Link href='https://www.instagram.com/'><FiInstagram /></Link>
                        <Link href='https://www.linkedin.com/feed/'><FaLinkedinIn /></Link>
                    </div>
                </div>
            </div>
            <div className={bottom}>
                <div className={`container ${bottom}`}>
                    <p>&copy; All rights reserved. Made with <AiOutlineHeart className={heart} /> by Henrik Hayrapetyan</p>
                    <button>GO TO TOP</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer