import React from 'react'
import Layout from '/components/Layout'
import CourseItem from '/components/courseItem/courseItem'

const index = () => {
  return (
    <Layout title='Courses Page'>
      <section>
        <h3>ENJOY YOUR STUDYING</h3>
        <h1>Our Online courses</h1>
        <CourseItem/>
      </section>
    </Layout>
  )
}

export default index