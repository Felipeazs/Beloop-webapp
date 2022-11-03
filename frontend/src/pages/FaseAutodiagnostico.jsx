import React, { useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import AuthContext from '../context/user-context'
import useHttpClient from '../hooks/http-hook'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Button from '../components/UI/Button'


const FaseAutodiagnostico = () => {
    const navigate = useNavigate()
    const { userId } = useParams()
    const { updateUserFormulario } = useHttpClient()
    const { token } = useContext(AuthContext)
    const { mutateAsync } = useMutation((formulario) => updateUserFormulario(token, userId, formulario))
    const [residuos, setResiduos] = useState([])
    const [autodiagnostico, setAutodiagnostico] = useState({
        catastro: '',
        volumen: '',
        gestion: '',
        revalorizacion: '',
    })
    const { catastro, volumen, gestion, revalorizacion } = autodiagnostico

    const changeHandler = (event) => {

        setAutodiagnostico(prevState => {
            return {
                ...prevState, [event.target.name]: event.target.value
            }
        })
    }

    const excedentesHandler = (event) => {
        setResiduos(prevState => [...prevState, event.target.value])
    }

    const submitHandler = async (event) => {
        event.preventDefault()

        if (!catastro || !volumen || !gestion || !revalorizacion || residuos.length === 0) {
            return toast.error('Debe ingresar todos los datos')
        }

        const formulario = {
            autodiagnostico: { ...autodiagnostico, residuos }
        }

        const userData = await mutateAsync(formulario)

        toast.success('Su formulario ha sido ingresado exitosamente')

        setAutodiagnostico({})
        setResiduos([])

        if (userData) {
            navigate(`/cuenta/${userId}`)
        }
    }

    return (
        <div className="p-4 w-720 mx-auto">
            <ToastContainer />
            <div className="border p-10 flex flex-col gap-1 rounded-md">
                <p>Autodiagnóstico</p>
                <p>Pilares de la Ley N 20.920 REP (responsabilidad extendida al productor)</p>
                <br />
                <form onSubmit={submitHandler}>
                    <label htmlFor="catastro">I. ¿Posee un catastro de los residuos generados por su empresa?</label>
                    <select id="catastro" className="flex flex-col border p-1 rounded" name="catastro" onChange={changeHandler}>
                        <option value="">elija una opción</option>
                        <option value="sí">Sí</option>
                        <option value="no">No</option>
                    </select>
                    <br />
                    <label htmlFor="excedentes">II. ¿Su empresa produce o tiene como excedente alguno de los siguientes residuos? Marque una o más alternativas</label>
                    <div className="flex flex-row gap-4">
                        <input type="radio" id="envases" value="envases y embalajes" onChange={excedentesHandler} />
                        <label htmlFor="envases">envases y embalajes</label>
                    </div>
                    <div className="flex flex-row gap-4">
                        <input type="radio" id="pilas" value="pilas" onChange={excedentesHandler} />
                        <label htmlFor="pilas">pilas</label>
                    </div>
                    <div className="flex flex-row gap-4">
                        <input type="radio" id="electronicos" value="aparatos electrónicos" onChange={excedentesHandler} />
                        <label htmlFor="electronicos">aparatos electrónicos</label>
                    </div>
                    <div className="flex flex-row gap-4">
                        <input type="radio" id="lubricantes" value="aceite lubricantes" onChange={excedentesHandler} />
                        <label htmlFor="lubricantes">aceite lubricantes</label>
                    </div>
                    <div className="flex flex-row gap-4">
                        <input type="radio" id="baterias" value="baterías" onChange={excedentesHandler} />
                        <label htmlFor="baterias">baterías</label>
                    </div>
                    <div className="flex flex-row gap-4">
                        <input type="radio" id="neumaticos" value="neumáticos" onChange={excedentesHandler} />
                        <label htmlFor="neumaticos">neumáticos</label>
                    </div>
                    <br />
                    <label htmlfor="volumen">III. ¿Si su empresa introduce alguno de estos productos proritarios al mercado, en cuánto estima el volumen anual de kilogramos?</label>
                    <div className="flex flex-row gap-4">
                        <input type="radio" id="mayor" name="volumen" value=">300kg" onChange={changeHandler} />
                        <label htmlFor="mayor">mayor a 300kg</label>
                    </div>
                    <div className="flex flex-row gap-4">
                        <input type="radio" id="menor" name="volumen" value="<300kg" onChange={changeHandler} />
                        <label htmlFor="menor">menor a 300kg</label>
                    </div>
                    <br />
                    <label htmlFor="gestion">IV. ¿Si su empresa es generadora de alguno de estos productos, posee un sistema de gestión para estos residuos?</label>
                    <div className="flex flex-row gap-4">
                        <input type="radio" id="si-gestion" name="gestion" value="sí" onChange={changeHandler} />
                        <label htmlFor="si-gestion">sí</label>
                    </div>
                    <div className="flex flex-row gap-4">
                        <input type="radio" id="no-gestion" name="gestion" value="no" onChange={changeHandler} />
                        <label htmlFor="no-gestion">no</label>
                    </div>
                    <br />
                    <label htmlFor="revalorizacion">V. ¿Su empresa, maneja un sistema de revalorización de sus residuos?</label>
                    <div className="flex flex-row gap-4">
                        <input type="radio" id="si-revalorizacion" name="revalorizacion" value="sí" onChange={changeHandler} />
                        <label htmlFor="si-revalorizacion">sí</label>
                    </div>
                    <div className="flex flex-row gap-4">
                        <input type="radio" id="no-revalorizacion" name="revalorizacion" value="no" onChange={changeHandler} />
                        <label htmlFor="no-revalorizacion">no</label>
                    </div>
                    <Button type="submit" title="enviar" position="text-end" />
                </form>
            </div>
        </div>
    )
}

export default FaseAutodiagnostico

