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

    const saveAnalisis = async (token, data, userId) => {
        return fetch(`/api/user/${userId}/analisis/save`, {
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

    const getUserData = async (token, userId) => {
        return fetch(`/api/user/${userId}`, {
            method: 'GET',
            headers: {
                Authentication: 'Bearer ' + token
            }
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

    const updateUserData = async (token, data) => {
        return fetch('/api/user/update', {
            method: 'PUT',
            headers: {
                Authentication: 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data =>data)
    }

    const updateUserFormulario = async (token, userId, formulario) => {
        return fetch(`/api/user/${userId}/formulario/save`, {
            method: 'POST',
            headers: {
                Authentication: 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formulario)
        })
            .then(res => res.json())
            .then(data => data)
    }

    return { loginUser, signupUser, saveAnalisis, getUserAnalisis, getAllUserAnalisis, getUserData, updateUserData, updateUserFormulario }
}

export default useHttpClient
