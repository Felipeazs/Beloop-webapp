import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import useHttpClient from '../../hooks/http-hook'

import AuthContext from '../../context/user-context'

const Cuenta = () => {
    const { token } = useContext(AuthContext)
    const { getAllUserAnalisis } = useHttpClient()

    const { isLoading, error, data } = useQuery(['analisis'], () => getAllUserAnalisis(token))

    if (!isLoading && !error && !data.ok) {
        return <p>Usuario no tiene registro de análisis</p>
    }

    if (isLoading && !error) {
        return <p>Loading...</p>
    }

    return (!isLoading && !error &&
        <>
            <h4 className="text-2xl font-black">Análisis realizados</h4>
            <ul>{data.results.map((res, i) =>
                <li key={res.id} className="flex">
                    <p className="w-6">{i + 1}.- </p>
                    <Link to={`/analisis/${res.id}`} className="underline">
                        {new Date(res.createdAt).toLocaleDateString()}
                    </Link>
                </li>)}
            </ul>
        </>
    )
}

export default Cuenta
