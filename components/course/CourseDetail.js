import React, { useEffect } from 'react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Image from 'next/image'
import PaypalCheckoutButton from '../PaypalCheckoutButton'
import Link from 'next/link'
import { FiFacebook, FiTwitter, FiCheckCircle } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { getDataCourseAction } from "../../redux/actions/dataActions"
import { title_wrapper, title, main_section, course_section, left_section, description, learn_info, right_section, course_info, price, teacher_section, imgWrapper, teacher_info, socials } from './course.module.scss'
import { useAuthContext } from '/hooks/useAuthContext'

const CourseDetail = () => {
    const { query } = useRouter()
    const { _id } = query
    const dispatch = useDispatch()
    const data = useSelector(store => store?.courses?.courses)
    const course = data.find(elem => elem._id === _id)
    const { tkn } = useAuthContext()

    const initialOptions = {
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: "USD",
        intent: "capture",
        components: "buttons",
    };

    useEffect(() => {
        dispatch(getDataCourseAction())
    }, []);

    return (

        <section>
            <div className={title_wrapper}>
                <h1 className={title}>{course?.title}</h1>
            </div>
            <div className={main_section}>
                <div className={course_section}>
                    <div className={left_section}>
                        <div className={description}>
                            <h2>About the course</h2>
                            <p>{course?.description}</p>
                        </div>
                        <div className={learn_info}>
                            <h3>You will Learn</h3>
                            {
                                course?.whatYouWillLearn.map(elem => (
                                    <p key={elem._id}><FiCheckCircle />{elem}</p>
                                ))
                            }
                        </div>
                    </div>
                    <div className={right_section}>
                        <div>
                            <div className={course_info}>
                                <p>DATES</p>
                                <span>{course?.dates[0]}</span>
                                <span>-</span>
                                <span>{course?.dates[1]}</span>
                            </div>
                            <div className={price}>
                                <p>PRICE</p>
                                <span>$ {course?.price} per month</span>
                            </div>
                        </div>
                        {
                            !tkn ? <Link href={'/signin'} >Login for pay a course</Link> : <div>
                                <PayPalScriptProvider options={initialOptions}>
                                    <PaypalCheckoutButton course={course} />
                                </PayPalScriptProvider>
                            </div>
                        }
                    </div>
                </div>
                <div className={teacher_section}>
                    <div className={imgWrapper}>
                        <Image src={`http://localhost:5000/uploads/${course?.teacherID?.teacherImgUrl?.filename}`} width={480} height={480} alt='img' priority />
                    </div>
                    <div className={teacher_info}>
                        <h6>Course Creator</h6>
                        <h1>{course?.teacherID?.fullname}</h1>
                        <span>{course?.teacherID?.position}</span>
                        <p>{course?.teacherID?.description}</p>
                        <div className={socials}>
                            <Link href={course?.teacherID?.socials?.[0] || ''} target='_blank'><FiFacebook /></Link>
                            <Link href={course?.teacherID?.socials?.[1] || ''} target='_blank'><FiTwitter /></Link>
                            <Link href={course?.teacherID?.socials?.[2] || ''} target='_blank'><FaLinkedinIn /></Link>
                            <Link href={course?.teacherID?.socials?.[3] || ''} target='_blank'><FaGithub /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseDetail