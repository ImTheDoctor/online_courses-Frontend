import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogin';

const signin = () => {
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
        <section>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter your login'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <input type='submit' disabled={isLoading} />
                {error && <div>{error.message}</div>}
            </form>
        </section>
    )
}

export default signin