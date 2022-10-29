import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AuthContext from '../context/user-context'
import useHttpClient from '../hooks/http-hook.js'
import Button from '../components/UI/Button'

const Sesion = () => {
    const navigate = useNavigate()
    const { login, isLoggedIn, logout } = useContext(AuthContext)
    const { loginUser, signupUser } = useHttpClient()
    const [toggleForm, setToggleForm] = useState(false)
    const { error, data, mutateAsync } = useMutation(newUser => signupUser(newUser))
    const [user, setUser] = useState({
        correo: 'empresa@empresa.cl',
        empresa: 'empresa',
        rut: '16741352-8',
        password: 'asdfasdf',
        password2: 'asdfasdf'
    })

    const { correo, empresa, rut, password, password2 } = user

    const changeHandler = (event) => {

        setUser(prevState => {
            return {
                ...prevState, [event.target.name]: event.target.value
            }
        })
    }

    const submitHandler = async (event) => {
        event.preventDefault()

        if (!toggleForm) {
            if (correo.trim().length === 0 || empresa.trim().length === 0 ||
                rut.trim().length === 0 || password.trim().length === 0 || password2.trim().length === 0) {
                return toast.error('Debe ingresar todos los datos')
            }

            if (password !== password2) {
                return toast.error('Sus contraseñas no coinciden')
            }
        }

        let loggedUser
        if (!toggleForm) {
            const newUserData = await mutateAsync(user)
            if (!newUserData.ok) {
                if (newUserData.message.includes('pattern')) {
                    toast.error('Ingrese todos los datos en el formato correcto')
                } else {
                    toast.error(data.message)
                }
            } else {
                logUser(newUserData)
                navigate(`/cuenta/${newUserData.user.userId}/fase0`)
            }
        } else {
            loggedUser = await loginUser({ correo, password })
            if (!loggedUser.ok) {
                toast.warning('Credenciales incorrectas')
            }
            const userData = logUser(loggedUser)
            navigate(`/cuenta/${userData.user._id}`)
        }

    }

    const logUser = (userData) => {

        if (userData.ok) {
            const { userId, correo } = userData.user
            login(userId, userData.token)

            const username = correo.substring(0, correo.indexOf('@'))
            toast.success(`Bienvenido a LoopTest, ${username}`)

            return userData
        }
    }

    const clickHandler = () => {
        setToggleForm(prevState => !prevState)
    }

    const logoutHandler = () => {
        logout()
        toast.info('Su sesión ha sido cerrada correctamente')
    }

    if (error) {
        return <p>Error tryng to create a user</p>
    }

    const inputStyle = "border p-1 rounded"

    return (
        <div className="p-4 w-720 mx-auto">
            <ToastContainer />
            <div className="border p-10 flex flex-col gap-5 rounded-md">
                {isLoggedIn && (
                    <>
                        <Button onClick={logoutHandler} title="Cerrar Sesión" position="text-center m-8" />
                    </>
                )}
                {!isLoggedIn && (
                    <form onSubmit={submitHandler} className="flex flex-col gap-4">
                        <h2 className="text-center">{toggleForm ? 'Ingresa a tu cuenta' : 'Regístrate'}</h2>
                        <div className="flex flex-col">
                            <label htmlFor="correo">Correo electrónico</label>
                            <input type="text" id="correo" name="correo" value={correo} className={inputStyle} onChange={changeHandler} />
                        </div>
                        {!toggleForm && (
                            <>
                                <div className="flex flex-col">
                                    <label htmlFor="correo">Nombre de la Empresa</label>
                                    <input type="text" id="empresa" name="empresa" value={empresa} className={inputStyle} onChange={changeHandler} />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="correo">Rut de la Empresa (xxxxxxxxxx-x)</label>
                                    <input type="text" id="rut" name="rut" value={rut} className={inputStyle} onChange={changeHandler} />
                                </div>
                            </>
                        )}
                        <div className="flex flex-col w-">
                            <label htmlFor="password">Contraseña (min 8 caracteres)</label>
                            <input type="text" id="password" name="password" value={password} className={inputStyle} onChange={changeHandler} />
                        </div>
                        {!toggleForm && (
                            <div className="flex flex-col w-">
                                <label htmlFor="password">Repite la Contraseña</label>
                                <input type="text" id="password2" name="password2" value={password2} className={inputStyle} onChange={changeHandler} />
                            </div>
                        )}

                        <Button type="submit" position="text-center" title="Ingresar" />
                        <button onClick={clickHandler} type="button" className="underline">{toggleForm ? 'aún no estás registrado?' : 'ya eres usuario?'}</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Sesion
