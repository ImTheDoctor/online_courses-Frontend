import React from 'react'

const Form = () => {
    return (
        <form>
            <div>
                <label>First Name*</label>
                <input type='text' placeholder='Your first name' required />
            </div>
            <div>
                <label>Last Name*</label>
                <input type='text' placeholder='Your last name' required />
            </div>
            <div>
                <label>Email*</label>
                <input type='email' placeholder='Your working email' required />
            </div>
            <div>
                <label>Phone*</label>
                <input type='tel' placeholder='Your phone number' required />
            </div>
            <div>
            <label>Message*</label>
                <textarea placeholder='Your message'/>
            </div>
            <div>
                <input type='submit' value='Send Message' />
            </div>
        </form>
    )
}

export default Form