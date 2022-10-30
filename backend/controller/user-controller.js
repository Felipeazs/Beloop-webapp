const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const Usuario = require('../models/user-model')
const verify = require('../utils/rut-verify')

const signupUser = async (request, reply) => {
    if (request.validationError) {
        return reply.code(400).send({ ok: false, message: request.validationError })
    }

    const { correo, empresa, rut, password, password2 } = request.body

    if (password !== password2) {
        return reply.code(400).send({ ok: false, message: 'Las contraseñas no coinciden' })
    }

    //verfy rut
    if (!verify(rut)) {
        return reply.code(400).send({ ok: false, message: 'Debe ingresar un rut válido' })
    }

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
        correo, nombre_empresa: empresa, rut_empresa: rut, password: hashedPass
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
        user: { userId: newUser.id, correo: newUser.correo, empresa: newUser.nombre_empresa },
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

    return reply.code(200).send({ ok: true, user: { userId: identifiedUser._id, correo: identifiedUser.correo }, token: token })
}

const getUserData = async (request, reply) => {

    if (request.validationError) {
        return reply.code(400).send({ ok: false, message: request.validationError })
    }

    const { userId } = request.params

    if (userId !== request.userId.id) {
        return reply.code(400).send({ ok: false, message: 'Usted no tiene permisos para ver estos datos' })
    }

    let identifiedUser
    try {
        identifiedUser = await Usuario.findById(request.userId.id).populate(['analisis', 'formulario'])
    } catch (err) {
        let error = new Error()
        error.message = 'Error trying to find the user'
        error.statusCode = 500
        throw error
    }

    if (!identifiedUser) {
        return reply.code(404).send({ ok: false, message: 'El usuario no existe' })
    }

    return reply.code(200).send({ ok: true, user: identifiedUser })
}

const updateUserData = async (request, reply) => {

    if (request.validationError) {
        reply.code(400).send({ ok: false, message: request.validationError })
    }

    const { telefono, ubicacion } = request.body

    const userId = request.userId.id
    let userFound
    try {
        userFound = await Usuario.findById(userId)
    } catch (err) {
        let error = new Error()
        error.message = 'Error trying to found the user'
        error.statusCode = 500
        throw error
    }

    if (!userFound) {
        return reply.code(400).send({ ok: false, message: 'Usuario no encontrado' })
    }

    if (userFound._id.toString() !== userId) {
        return reply.code(400).send({ ok: false, message: 'Usted no está autorizado para actualizar este usuario' })
    }

    userFound.telefono = telefono
    userFound.ubicacion = ubicacion

    try {
        await userFound.save()
    } catch (err) {
        let error = new Error()
        error.message = 'Error trying to save the updated user'
        error.statusCode = 500
        throw error
    }

    return reply.status(201).send({ ok: true, user: userFound })
}

const getAllUsers = async (request, reply) => {

    return reply.code(200).send({ ok: true, message: 'all users' })
}

module.exports = { signupUser, loginUser, getUserData, getAllUsers, updateUserData }
