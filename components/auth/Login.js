import React, { useState } from 'react'
import { useLogin } from '/hooks/useLogin';
import auth from './auth.module.scss'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    const onSubmit = async (e) => {
        e.preventDefault()
        const newInfo = {
            email,
            password,
        }
        await login(newInfo)
    }
    return (
        <>
            <h3 className={auth.title}>Sign In</h3>
            <span className={auth.text}>Sign in to your account using email and password provided during registration.</span>
            <form className={auth.form} onSubmit={onSubmit}>
                <div className={auth.box}>
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter your login'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={auth.box}>
                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <input className={auth.btn} type='submit' disabled={isLoading} value='Login'/>
                {error && <div>{error.message}</div>}
            </form>
        </>
    )
}

export default Login