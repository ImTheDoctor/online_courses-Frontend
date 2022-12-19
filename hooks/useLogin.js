import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import Axios from "axios";
import { useRouter } from 'next/router'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [info, setInfo] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const router = useRouter()

    const login = async (data) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await Axios
                .post("http://localhost:5000/auth/login", data)
            if (response.statusText === 'OK') {
                setInfo(response.data.email)
                const token = response.data.token;
                const json = await response.data
                localStorage.setItem('tkn', 'Bearer ' + token)
                Axios.defaults.headers.common['authorization'] = 'Bearer ' + token
                dispatch({ type: 'LOGIN', payload: json })
                setIsLoading(true)
                router.push('/')
            }

        } catch (error) {
            setIsLoading(false)
            setError(error.response.data)
            console.log(error.response.data);
        }
    }
    return { login,info, isLoading, error }
}