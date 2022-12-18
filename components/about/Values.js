import React from 'react'
import Image from 'next/image'
import { values, image_wrapper } from './about.module.scss'

const Values = () => {
  return (
    <div className={values}>
      <h6>We always stand for</h6>
      <h1>Our core values</h1>
      <ul>
        <li>
          <div className={image_wrapper}>
            <Image src='/ic-structure.svg' width={435} height={481} alt='structuure' priority />
          </div>
          <h6>Structured Approach</h6>
          <p>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </p>
        </li>
        <li>
          <div className={image_wrapper}>
            <Image src='/ic-chat.svg' width={435} height={481} alt='chat' priority />
          </div>
          <h6>Professional Feedbacks</h6>
          <p>Culpa nostrud commodo ea consequat reprehenderit aliquip. </p>
        </li>
        <li>
          <div className={image_wrapper}>
            <Image src='/ic-target.svg' width={435} height={481} alt='target' priority />
          </div>
          <h6>Efficiency</h6>
          <p>Viverra scelerisque consequat net. Adipisicing esse consequat.  </p>
        </li>
        <li>
          <div className={image_wrapper}>
            <Image src='/ic-calendar.svg' width={435} height={481} alt='calendar' priority />
          </div>
          <h6>Flexible Shedule</h6>
          <p>Aute eiusmod dolore dolore deserunt veniam ad deserunt. </p>
        </li>
      </ul>

    </div>
  )
}

export default Values