import React, { Suspense } from 'react'
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
          <Suspense fallback={<p>Loading feed...</p>}>
            <CourseItem />
          </Suspense>
        </div>
      </section>
    </Layout>
  )
}

export default index