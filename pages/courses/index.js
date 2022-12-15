import React from 'react'
import Layout from '/components/Layout'
import CourseItem from '/components/course/CourseItem'
import { heading, course_section } from './course.module.scss'

const index = () => {
  return (
    <Layout title='Courses Page'>
      <section>
        <div className={heading}>
          <h6>ENJOY YOUR STUDYING</h6>
          <h1>Our Online courses</h1>
        </div>
        <div className={course_section}>
          <CourseItem />
        </div>
      </section>
    </Layout>
  )
}

export default index