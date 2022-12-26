import { useState } from 'react'
import { useRegister } from '/hooks/useRegister'
import auth from './auth.module.scss'

const Register = () => {
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
        <>
            <h3 className={auth.title}>Sign Up</h3>
            <span className={auth.text}>Registration takes less than a minute but gives you full control over your studying.</span>
            <form className={auth.form} onSubmit={onSubmit}>
                <div className={auth.box}>
                    <label>Fullname</label>
                    <input
                        type='text'
                        name='text'
                        placeholder='Enter your fullname'
                        onChange={(e) => setFullname(e.target.value)}
                        required
                    />
                </div>
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
                <input className={auth.btn} type='submit' disabled={isLoading} />
                {error && <div>{error.message}</div>}
            </form>
        </>
    )
}

export default Register