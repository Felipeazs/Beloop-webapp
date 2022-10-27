import React, { useState, useContext, useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AuthContext from '../context/user-context'
import useHttpClient from '../hooks/http-hook.js'
import Cuenta from '../components/cuenta/Cuenta'
import Button from '../components/UI/Button'

const Sesion = () => {
    const { login, isLoggedIn, logout } = useContext(AuthContext)
    const { loginUser, signupUser } = useHttpClient()
    const [toggleForm, setToggleForm] = useState(false)
    const { isLoading, error, data, mutate } = useMutation(newUser => signupUser(newUser))
    const [user, setUser] = useState({
        correo: '',
        empresa: '',
        rut: '',
        rubro: '',
        innovacion: '',
        ingresos: '',
        trabajadores: '',
        password: '',
    })

    const { correo, empresa, rut, rubro, innovacion, ingresos, trabajadores, password } = user

    useEffect(() => {
        if (isLoggedIn) {
            setToggleForm(true)
        }

        if (data !== undefined) {
            if (!data.ok) {
                if (data.message.includes('pattern')) {
                    toast.error('Ingrese todos los datos en el formato correcto')
                } else {
                    toast.error(data.message)
                }
            }
            logUser(data)
        }
    }, [data])


    const changeHandler = (event) => {

        setUser(prevState => {
            return {
                ...prevState, [event.target.name]: event.target.value
            }
        })
    }

    const submitHandler = async (event) => {
        event.preventDefault()

        let loggedUser
        if (!toggleForm) {
            mutate(user)
        } else {
            loggedUser = await loginUser({ correo, password })
            if (!loggedUser.ok) {
                toast.warning('Credenciales incorrectas')
            }
            logUser(loggedUser)
        }
    }

    const logUser = (userData) => {

        if (userData.ok) {
            const { _id, correo } = userData.user
            login(_id, userData.token)

            const username = correo.substring(0, correo.indexOf('@'))
            toast.success(`Bienvenido a LoopTest, ${username}`)
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
                        <Cuenta />
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
                                    <label htmlFor="empresa">Nombre de la empresa</label>
                                    <input type="text" id="empresa" name="empresa" value={empresa} className={inputStyle} onChange={changeHandler} />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="rut">Rut de la empresa</label>
                                    <input type="text" id="rut" name="rut" value={rut} className={inputStyle} onChange={changeHandler} />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="rubro">Rubro de la empresa</label>
                                    <input type="text" id="rubro" name="rubro" value={rubro} className={inputStyle} onChange={changeHandler} />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="innovacion">Departament de innovacion</label>
                                    <select id="innovacion" onChange={changeHandler} value={innovacion} className={inputStyle}>
                                        <option value="">elija una opción</option>
                                        <option value="true">Sí</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="ingresos">Ingresos de la empresa</label>
                                    <input type="text" id="ingresos" name="ingresos" value={ingresos} className={inputStyle} onChange={changeHandler} />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="trabajadores">Número de trabajadores</label>
                                    <input type="text" id="trabajadores" name="trabajadores" value={trabajadores} className={inputStyle} onChange={changeHandler} />
                                </div>
                            </>
                        )}

                        <div className="flex flex-col w-">
                            <label htmlFor="password">Contraseña</label>
                            <input type="text" id="password" name="password" value={password} className={inputStyle} onChange={changeHandler} />
                        </div>
                        <Button type="submit" position="text-center" title="Ingresar" />
                        <button onClick={clickHandler} type="button" className="underline">{toggleForm ? 'regístrate' : 'ya eres usuario?'}</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Sesion
