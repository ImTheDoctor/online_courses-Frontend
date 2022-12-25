import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { tkn: action.payload }
        case 'LOGOUT':
            return { tkn: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        tkn: null
    })

    useEffect(() => {
        const tkn = localStorage.getItem('tkn')

        if (tkn) {
            dispatch({ type: 'LOGIN', payload: tkn })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}