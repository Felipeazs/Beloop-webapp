const useHttpClient = () => {

    const loginUser = async (newUser) => {
        console.log(newUser)
        return fetch('/api/users', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(newUser),
        }).then(res => res.json()).then(data => console.log(data))
    }

    const signupUser = () => {
        return fetch('/api/users').then(res => res.json()).then(data => console.log(data))
    }

    return { loginUser, signupUser }
}

export default useHttpClient
