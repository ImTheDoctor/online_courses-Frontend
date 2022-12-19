import React, {useState} from 'react'
import { useRegister } from '../hooks/useRegister'

const signup = () => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { register, error, isLoading } = useRegister()

    const onSubmit = async (e) => {
        e.preventDefault()
        const newInfo = {
            fullname,
            email,
            password,
        }
        await register(newInfo)
    }

    return (
        <section>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Fullname</label>
                    <input
                        type='text'
                        name='text'
                        placeholder='Enter your fullname'
                        onChange={(e) => setFullname(e.target.value)}
                        required
                    />
                </div>
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

export default signup