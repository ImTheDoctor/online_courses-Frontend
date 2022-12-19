import { useState } from "react";
import Axios from "axios";
import { useRouter } from 'next/router'

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const router = useRouter()

    const register = async (data) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await Axios
                .post("http://localhost:5000/auth/register", data)
            if (response.statusText === 'OK') {
                setIsLoading(true)
                router.push('/signin')
            }

        } catch (error) {
            setIsLoading(false)
            setError(error.response)
        }
    }
    return { register, isLoading, error }
} 