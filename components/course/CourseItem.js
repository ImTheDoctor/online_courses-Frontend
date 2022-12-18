import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDataCourseAction } from "../../redux/actions/dataActions"
import {course_box, image_wrapper, img, course_info, tags} from './course.module.scss'

import Link from 'next/link'
import Image from 'next/image'

const CourseItem = () => {
  const dispatch = useDispatch()
  const courses = useSelector(store => store?.courses?.courses)

  useEffect(() => {
    dispatch(getDataCourseAction())
  }, []);

  return (
    <>
      {courses && courses.length > 0
        ?
        courses && courses.map((item) => {
          return (
          <div className={course_box} key={item._id}>
            <Link href={`/courses/${item._id}`}>
              <div className={image_wrapper}>
                <Image className={img} src={`http://localhost:5000/uploads/${item.teacherID.teacherImgUrl.filename}`} width={480} height={480} alt='img' priority />
              </div>
              <div className={course_info}>
                <p><span className={tags}>{item.tags}</span></p>
                <h3>{item.title}</h3>
                <p>$ {item.price} | <span>{item.teacherID.fullname}</span></p>
              </div>
            </Link>
          </div>
        )})
        :
        <div>Data not found</div>
      }
    </>
  )
}

export default CourseItem