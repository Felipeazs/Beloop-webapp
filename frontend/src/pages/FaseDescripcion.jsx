import React, { useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import AuthContext from '../context/user-context'
import useHttpClient from '../hooks/http-hook'

import { Circles } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Button from '../components/UI/Button'


const FaseDescripcion = () => {
    const { userId } = useParams()
    const navigate = useNavigate()
    const { getUserData, updateUserData } = useHttpClient()
    const { token } = useContext(AuthContext)
    const { isLoading, error, data } = useQuery(['userData'], () => getUserData(token, userId))
    const [user, setUser] = useState({
        telefono: '123456789',
        ubicacion: 'asdfasdf'
    })

    const { telefono, ubicacion } = user

    const inputStyle = "border p-1 rounded"

    const changeHandler = (event) => {
        setUser(prevState => {
            return {
                ...prevState, [event.target.name]: event.target.value 
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()

        if (telefono.trim().length === 0 || ubicacion.trim().length === 0) {
            return toast.error('Ingrese todos los datos')
        }

        const updatedUser = updateUserData(token, user)
        if(!updatedUser){
            return toast.error('Error intentando actualizar sus datos, por favor inténtelo más tarde')
        }
        navigate(`/cuenta/${userId}/fase1`)
    }

    return (
        <div className="p-4 w-720 mx-auto">
            <ToastContainer />
            <div className="border p-10 flex flex-col gap-5 rounded-md">
                {isLoading && <Circles
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />}
                {!isLoading &&
                    <>
                        <p>Criterios de clasificación</p>
                        <p>En esta fase buscamos conocer lo más posible las características de la
                            empresa, generando un análisis de clasificación de rubro</p>
                        <p>Experiencia informativa de usuario:</p>
                        <p>"Hola! Haz ingresado a Looptest uns plataforma digital que ayuda a la
                            sistematización de métricas y estándares para la industria del
                            packaging en términos de economía circular y legislación asociada, a
                            continucación, te solicitamos responder las siguientes preguntas para
                            identificar tu empresa"</p>
                        <p>Nombre: {data.user.nombre_empresa}</p>
                        <p>Rut: {data.user.rut_empresa}</p>
                        <p>Correo: {data.user.correo}</p>
                        <form onSubmit={submitHandler}>
                            <div className="flex flex-col">
                                <label htmlFor="correo">Teléfono (+56xxxxxxxx)</label>
                                <input type="text" id="telefono" name="telefono" value={telefono} className={inputStyle} onChange={changeHandler} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="correo">Ubicación</label>
                                <input type="text" id="ubicacion" name="ubicacion" value={ubicacion} className={inputStyle} onChange={changeHandler} />
                            </div>
                            <Button type="submit" title="Siguiente" position="text-end" />
                        </form>

                    </>

                }
            </div>
        </div>
    )
}

export default FaseDescripcion
