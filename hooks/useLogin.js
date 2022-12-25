import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import Axios from "axios";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [info, setInfo] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (data) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await Axios
                .post("http://localhost:5000/auth/login", data)
            if (response.statusText === 'OK') {
                setInfo(response.data.email)
                const token = response.data.token;
                const fullname = response.data.fullname;
                const json = await response.data
                localStorage.setItem('tkn', 'Bearer ' + token)
                localStorage.setItem('user', fullname)
                Axios.defaults.headers.common['authorization'] = 'Bearer ' + token
                dispatch({ type: 'LOGIN', payload: json })
                setIsLoading(true)
                history.back()
            }

        } catch (error) {
            setIsLoading(false)
            setError(error.response.data)
            console.log(error.response.data);
        }
    }
    return { login,info, isLoading, error }
}