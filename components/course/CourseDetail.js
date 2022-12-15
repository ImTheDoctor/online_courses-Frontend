import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { FiFacebook, FiTwitter} from 'react-icons/fi'
import { FaLinkedinIn, FaGithub} from 'react-icons/fa'

const CourseDetail = () => {
    const { query } = useRouter()
    const { _id } = query
    const data = useSelector(store => store?.courses?.courses)
    const course = data.find(elem => elem._id === _id)
    console.log(course);
    return (
        <section>
            <h1>{course?.title}</h1>
            <div>
                <div className='course-section'>
                    <div className='left-section'>
                        <div className='description'>
                            <h2>About the course</h2>
                            <p>{course?.description}</p>
                        </div>
                        <div className='learn-info'>
                            <h3>You will Learn</h3>
                            {
                                course?.whatYouWillLearn.map(elem => (
                                    <p>{elem}</p>
                                ))
                            }
                        </div>
                    </div>
                    <div className='right-section'>
                        <div className='course-info'>
                            <span>DATES</span>
                            <p>{course?.dates[0]}</p>
                            <p>{course?.dates[1]}</p>
                        </div>
                        <div className='price'>
                            <span>PRICE</span>
                            <p>$ {course?.price} per month</p>
                        </div>
                        <button>Buy Course</button>
                    </div>
                </div>
                <div className='teacher-section'>
                    <div className='imgWrapper'>
                        <Image src={`http://localhost:5000/uploads/${course?.teacherID.teacherImgUrl.filename}`} width={480} height={480} alt='img' priority />
                    </div>
                    <div className='teacher_info'>
                        <h6>Course Creator</h6>
                        <h1>{course?.teacherID.fullname}</h1>
                        <span>{course?.teacherID.position}</span>
                        <p>{course?.teacherID.description}</p>
                        <div>
                            <Link href={course?.teacherID.socials[0]}target='_blank'><FiFacebook /></Link>
                            <Link href={course?.teacherID.socials[1]} target='_blank'><FiTwitter /></Link>
                            <Link href={course?.teacherID.socials[2]} target='_blank'><FaLinkedinIn /></Link>
                            <Link href={course?.teacherID.socials[3]} target='_blank'><FaGithub /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseDetail