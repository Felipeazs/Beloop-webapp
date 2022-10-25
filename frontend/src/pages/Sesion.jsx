import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'

import useHttpClient from '../hooks/http-hook.js'

const Sesion = () => {
    const { loginUser, signupUser } = useHttpClient()
    const [isUser, setIsUser] = useState(false)
    const { isLoading, error, data, mutate } = useMutation(newUser => loginUser(newUser))
    const [user, setUser] = useState({
        usuario: '',
        password: ''
    })

    const changeHandler = (event) => {

        setUser(prevState => {
            return {
                ...prevState, [event.target.name]: event.target.value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()

        if (isUser) {
            mutate(user)
        } else {
            mutate(user)
        }
    }

    const clickHandler = () => {
        setIsUser(prevState => !prevState)
    }


    return (
        <div className="flex flex-col items-center p-8 justify-around gap-4">
            <div>
                {isUser ? <h2>Ingresar</h2> : <h2>Registro</h2>}
                <form onSubmit={submitHandler}>
                    <div className="flex flex-col w-44">
                        <label htmlFor="usuario">Usuario</label>
                        <input type="text" id="usuario" name="usuario" className="border" onChange={changeHandler} />
                    </div>
                    <div className="flex flex-col w-44">
                        <label htmlFor="password">Contraseña</label>
                        <input type="text" id="password" name="password" className="border" onChange={changeHandler} />
                    </div>
                    <button type="submit" className="border">ingresar</button>
                </form>
            </div>
            <button onClick={clickHandler}>{isUser ? 'registrate' : 'ya eres usuario?'}</button>
        </div>
    )
}

export default Sesion
