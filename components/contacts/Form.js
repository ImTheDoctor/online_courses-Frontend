import React, { useState } from 'react'
import { postMessage } from '../../api/fetchData'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
    const [data, setData] = useState([])
    const [formSuccess, setFormSuccess] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        await postMessage(data)
            .then(res => setFormSuccess(res))
            .then(formSuccess === 'success' ?
                toast.success("Letter Sent!. Thank you", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 2000
                })
                :
                toast.error("Error Notification!", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 2000
                }))


        e.target.reset()
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <label>First Name*</label>
                    <input type='text' placeholder='Your first name' onChange={(e) => {
                        setData(item => {
                            return { ...item, name: e.target.value }
                        })
                    }} required />
                </div>
                <div>
                    <label>Last Name*</label>
                    <input type='text' placeholder='Your last name' onChange={(e) => {
                        setData(item => {
                            return { ...item, lastname: e.target.value }
                        })
                    }} required />
                </div>
                <div>
                    <label>Email*</label>
                    <input type='email' placeholder='Your working email' onChange={(e) => {
                        setData(item => {
                            return { ...item, email: e.target.value }
                        })
                    }} required />
                </div>
                <div>
                    <label>Phone*</label>
                    <input type='tel' placeholder='Your phone number' onChange={(e) => {
                        setData(item => {
                            return { ...item, tel: e.target.value }
                        })
                    }} required />
                </div>
                <div>
                    <label>Message*</label>
                    <textarea placeholder='Your message' onChange={(e) => {
                        setData(item => {
                            return { ...item, message: e.target.value }
                        })
                    }} />
                </div>
                <div>
                    <input type='submit' value='Send Message' />
                </div>
            </form>
            <div>
                <ToastContainer />
            </div>
        </>
    )
}

export default Form