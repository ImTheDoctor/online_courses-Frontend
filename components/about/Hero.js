import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {hero, about_section, img_wrapper} from './about.module.scss'

const Hero = () => {
    return (
        <div className={hero}>
            <div className={about_section}>
                <h6>ABOUT US</h6>
                <h1>Createx Online School</h1>
                <h3>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.</h3>
                <p>We provide relevant approaches to online learning, internships and employment in the largest companies in the country. Our educational programs help you get a new specialty from scratch. During your studies, we will help you find a job. Check the courses and online events that we organise.</p>
                <Link href='/courses'>Browse courses</Link>
            </div>
            <div className={img_wrapper}>
                <Image src='/illustration.svg' width={435} height={481} alt='woman' priority />
            </div>
        </div>
    )
}

export default Hero