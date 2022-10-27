const useHttpClient = () => {
    const signupUser = async (newUser) => {
        return fetch('/api/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        })
            .then(res => res.json())
            .then(data => data)
    }

    const loginUser = async (user) => {
        return fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => data)
    }

    const saveAnalisis = async (token, data) => {
        return fetch(`/api/user/analisis/save`, {
            method: 'POST',
            headers: {
                Authentication: 'Bearer ' + token,
                'Content-Type': 'application/json '
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => data)
    }

    const getUserAnalisis = async (resultId, token) => {
        return fetch(`/api/user/analisis/${resultId}`, {
            method: 'GET',
            headers: { Authentication: 'Bearer ' + token }

        })
            .then(res => res.json())
            .then(data => data)
    }

    const getAllUserAnalisis = async (token) => {
        return fetch('/api/user/analisis', {
            method: 'GET',
            headers: { Authentication: 'Bearer ' + token }
        })
            .then(res => res.json())
            .then(data => data)
    }

    return { loginUser, signupUser, saveAnalisis, getUserAnalisis, getAllUserAnalisis }
}

export default useHttpClient
