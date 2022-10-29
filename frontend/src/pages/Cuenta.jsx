import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import useHttpClient from '../hooks/http-hook'
import Card from '../components/UI/Card'
import Button from '../components/UI/Button'

import AuthContext from '../context/user-context'

const Cuenta = () => {
    const navigate = useNavigate()
    const { token, userId } = useContext(AuthContext)
    const { getUserData } = useHttpClient()
    const { isLoading, error, data } = useQuery(['userdata'], () => getUserData(token, userId))

    if (!isLoading && !error && !data.ok) {
        return <p>Usuario no tiene registro de análisis</p>
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    const clickHandler = () => {
        navigate(`/analisis/user/${userId}`)
    }

    let analisis
    if (data.user.analisis.length > 0) {
        analisis = (
            <>
                <p className="font-bold text-xl">Análisis realizados</p>
                <ul className="flex flex-col-reverse">
                    {data.user.analisis.map(a => <Link to={`/analisis/user/${userId}/results/${a._id}`}
                        className="underline" key={a._id}>
                        {new Date(a.createdAt).toLocaleString()}</Link>)}
                </ul>
            </>

        )
    }

    return (!isLoading && !error &&
        <div className="m-20">
            <Card>
                <h4 className="text-2xl font-black">Cuenta</h4>
                <hr />
                <br />
                <p>Empresa: {data.user.nombre_empresa}</p>
                <p>rut: {data.user.rut_empresa}</p>
                <p>correo: {data.user.correo}</p>
                <p>telefono: {data.user.telefono}</p>
                <p>ubicacion: {data.user.ubicacion}</p>
                <br />
                <hr />
                <br />
                {data.user.formulario &&
                    <>
                        <p className="font-black text-xl">Antecedentes</p>
                        <p>Registro de catastros: {data.user.formulario.catastro}</p>
                        <p>Volumén anual: {data.user.formulario.volumen}</p>
                        <p>Revalorización de residuos: {data.user.formulario.revalorizacion}</p>
                        <p>Gestión de residuos: {data.user.formulario.gestion}</p>
                        <p>Residuos:</p>
                        <ul className="mx-8">
                            {data.user.formulario.residuos.map((residuo, i) => <li key={i}>{residuo}</li>)}
                        </ul>
                    </>

                }
                <br />
                <hr />
                <br />
                {analisis}
                <br />
                <Button title="Realizar nuevo análisis" positon="align-end" onClick={clickHandler} />
            </Card>
        </div>
    )
}

export default Cuenta
