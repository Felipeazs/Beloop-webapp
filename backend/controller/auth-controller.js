const mongoose = require('mongoose')
const Analisis = require('../models/analisis-model')
const Usuario = require('../models/user-model')

const saveAnalisis = async (request, reply) => {
    if (request.validationError) {
        return reply.code(400).send({ ok: false, message: request.validationError })
    }

    const {userId} = request.params

    if(userId !== request.userId.id){
        return reply.status(400).send({ ok: false, message: 'El usuario no existe' })
    }

    let usuario
    try {
        usuario = await Usuario.findById(request.userId.id)
    } catch (err) {
        let error = new Error()
        error.message = 'Error trying to find the user'
        error.statusCode = 500
        throw error
    }

    if (!usuario) {
        return reply.status(400).send({ ok: false, message: 'El usuario no existe' })
    }

    const { materialidad, reciclabilidad, separabilidad, logistica, residuos, valorizacion } = request.body

    const createdAnalisis = new Analisis({
        materialidad,
        reciclabilidad,
        separabilidad,
        logistica,
        residuos,
        valorizacion,
        usuario: request.userId.id
    })

    let result
    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        result = await createdAnalisis.save({ session })
        usuario.analisis.push(createdAnalisis)
        await usuario.save({ session })
        await session.commitTransaction()
    } catch (err) {
        let error = new Error()
        error.message = 'Error trying to save the created analisis'
        error.statusCode = 500
        throw error
    }

    return reply.status(201).send({ ok: true, resultId: result._id.toString() })
}

const getUserAnalisis = async (request, reply) => {

    const { resultId } = request.params

    let analisis
    try {
        analisis = await Analisis.findById(resultId)
    } catch (err) {
        let error = new Error()
        error.message = 'Error trying to retrive the analisis'
        error.statusCode = 500
        throw error
    }

    if (!analisis) {
        return reply.status(404).send({ ok: false, messaage: 'Analisis not found ' })
    }

    return reply.status(200).send({ ok: true, results: analisis.toObject({ getters: true }) })
}

const getAllUserAnalisis = async (request, reply) => {

    const { id } = request.userId

    if (!id) {
        return reply.status(404).send({ ok: false, message: 'El usuario no existe' })
    }

    let userAnalisis
    try {
        userAnalisis = await Analisis.find({ usuario: id }).sort({ createdAt: -1 })
    } catch (err) {
        let error = new Error()
        error.message = 'Error trying to retrive all the users analisis'
        error.statusCode = 500
        throw error
    }

    if (!userAnalisis) {
        return reply.status(404).send({ ok: false, message: 'No encontramos analisis para este usuario' })
    }

    return reply.status(200).send({ ok: true, results: userAnalisis.map((analisis) => analisis.toObject({ getters: true })) })
}

module.exports = { saveAnalisis, getUserAnalisis, getAllUserAnalisis }
