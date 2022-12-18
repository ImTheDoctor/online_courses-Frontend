import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { hero, top, bottom, info, aboutLink, courseLink, img_wrapper } from './home.module.scss'

const Hero = () => {
    return (
        <div className={hero}>
            <div className={top}>
                <div className={info}>
                    <h1>Enjoy studying with Createx Online Courses</h1>
                    <Link href='/about' className={aboutLink}>About us</Link>
                    <Link href='/courses' className={courseLink}>Explore courses</Link>
                </div>
                <div className={img_wrapper}>
                    <Image src='/home.svg' width={602} height={551} alt='home' priority />
                </div>
            </div>
            <div className={bottom}>
                <ul>
                    <li>
                        <h3>1200</h3>
                        <span>Students graduated</span>
                    </li>
                    <li>
                        <h3>84</h3>
                        <span>Completed courses</span>
                    </li>
                    <li>
                        <h3>16</h3>
                        <span>Qualified tutors</span>
                    </li>
                    <li>
                        <h3>5</h3>
                        <span>Years of experience</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Hero