import { useState, useEffect, useCallback, createContext } from 'react'

let logoutTimer

const AuthContext = createContext({
    isLoggedIn: false,
    userId: null,
    token: null,
    login: (id, token) => { },
    logout: () => { }
})

export const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState('')
    const [token, setToken] = useState('')
    const [tokenExpirationDate, setTokenExpirationDate] = useState()

    const login = useCallback((id, token, expirationDate) => {
        setUserId(id)
        setToken(token)

        const tokenExpirationTime = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60)
        setTokenExpirationDate(tokenExpirationTime)

        localStorage.setItem('user', JSON.stringify({
            userId: id, token: token, expiration: tokenExpirationTime.toISOString()
        }))
    }, [])

    const logout = useCallback(() => {
        setUserId(null)
        setToken(null)
        setTokenExpirationDate(null)
        localStorage.removeItem('user')

    }, [])
    //auto login
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('user'))

        if (storedData && storedData.token && new Date(storedData.expiration) > new Date()) {
            login(storedData.userId, storedData.token, new Date(storedData.expiration))
        }

    }, [login])

    //auto logout
    useEffect(() => {
        if (token && tokenExpirationDate) {
            const remainingTime = tokenExpirationDate.getTime() - new Date().getTime()
            logoutTimer = setTimeout(logout, remainingTime)
        } else {
            clearTimeout(logoutTimer)
        }

    }, [token, logout, tokenExpirationDate])


    return <AuthContext.Provider value={{ isLoggedIn: !!token, userId, token, login, logout }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext
