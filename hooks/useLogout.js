import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const logout = () => {
        localStorage.removeItem('tkn')
        dispatch({ type: 'LOGOUT' })
    }

    return { logout }
}