const mongoose = require('mongoose')

const Formulario = require('../models/formulario-model')
const Usuario = require('../models/user-model')

const saveUserFormulario = async (request, reply) => {

    const { catastro, gestion, residuos, revalorizacion, volumen } = request.body.autodiagnostico
    if (catastro.trim().length === 0 || gestion.trim().lenght === 0 || residuos.length === 0 ||
        revalorizacion.trim().lenght === 0 || volumen.trim().length === 0) {
        return reply.status(400).send({ ok: false, message: 'Debe ingresar todos los datos' })
    }

    const { userId } = request.params

    if (userId !== request.userId.id) {
        return reply.status(403).send({ ok: false, message: 'Usted no tiene permitido actualizar estos datos' })
    }

    let usuario
    try {
        usuario = await Usuario.findById(request.userId.id)
    } catch (err) {
        let error = new Error()
        error.message = 'No hemos podido encontrar al usuario registrado'
        error.statusCode = 500
        throw error
    }

    if (usuario.formulario) {
        return reply.status(400).send({ ok: false, message: 'Usted ya registró un formulario' })
    }

    const newForm = new Formulario({
        catastro, gestion, residuos, revalorizacion, volumen, usuario: request.userId.id
    })

    let result
    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        result = await newForm.save({ session })
        usuario.formulario = newForm
        await usuario.save({ session })
        await session.commitTransaction()
    } catch (err) {
        let error = new Error()
        error.message = 'Hemos tenido un problema en guardar su formulario'
        error.statusCode = 500
        throw error
    }

    return reply.status(201).send({ ok: true, formularioId: result._id.toString() })
}

module.exports = { saveUserFormulario }


