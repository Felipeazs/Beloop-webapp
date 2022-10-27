const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const Usuario = require('../models/user-model')

const signupUser = async (request, reply) => {
    if (request.validationError) {
        return reply.code(400).send({ ok: false, message: request.validationError })
    }

    const { correo, empresa, rut, rubro, innovacion, ingresos, trabajadores, password } = request.body

    let findUser
    try {
        findUser = await Usuario.findOne({ $or: [{ 'correo': correo }, { 'rut_empresa': rut }] })
    } catch {
        let error = new Error()
        error.message = 'Error trying to create a new user'
        error.statusCode = 500
        throw error
    }

    if (findUser) {
        return reply.code(500).send({ ok: false, message: 'El usuario ingresado ya existe' })
    }

    let hashedPass
    try {
        hashedPass = await bcrypt.hash(password, 12)

    } catch {
        let error = new Error()
        error.message = 'Error trying to create a new user'
        error.statusCode = 500
        throw error
    }

    const newUser = new Usuario({
        correo, nombre_empresa: empresa, rut_empresa: rut, rubro, dept_innovacion: innovacion,
        ingresos, trabajadores, password: hashedPass
    })

    try {
        await newUser.save()

    } catch {
        let error = new Error()
        error.message = 'Error trying to create a new user'
        error.statusCode = 500
        throw error
    }

    let token
    try {
        token = jwt.sign({ userId: newUser.id, correo: newUser.correo }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })

    } catch {
        let error = new Error()
        error.message = 'Error trying to create a new user token'
        error.statusCode = 500
        throw error
    }

    return reply.code(201).send({
        ok: true,
        user: { correo: newUser.correo, empresa: newUser.nombre_empresa },
        token: token
    })
}

const loginUser = async (request, reply) => {

    if (request.validationError) {
        reply.code(400).send({ ok: false, message: request.validationError })
    }

    const { correo, password } = request.body

    let identifiedUser
    try {
        identifiedUser = await Usuario.findOne({ correo })

    } catch {
        let error = new Error()
        error.message = 'Error trying to login the user'
        error.statusCode = 500
        throw error
    }

    if (!identifiedUser) {
        return reply.code(400).send({ ok: false, message: "Bad credentials" })
    }

    let isValidPassword = false
    try {
        isValidPassword = await bcrypt.compare(password, identifiedUser.password)
    } catch {
        let error = new Error()
        error.message = 'Error trying to identified user'
        error.statusCode = 500
        throw error
    }

    if (!isValidPassword) {
        return reply.code(400).send({ ok: false, message: "Bad credentials" })
    }

    let token
    try {
        token = jwt.sign({ userId: identifiedUser.id, correo: identifiedUser.correo }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })

    } catch {
        let error = new Error()
        error.message = 'Error trying to create a user token'
        error.statusCode = 500
        throw error
    }

    return reply.code(200).send({ ok: true, user: identifiedUser, token: token })
}

const getAllUsers = async (request, reply) => {

    return reply.code(200).send({ ok: true, message: 'all users' })
}

module.exports = { signupUser, loginUser, getAllUsers }
