const getAllUsers = async (request, reply) => {
    console.log('requested body', request.body)

    try {
        const { usuario, password } = request.body
    } catch {
        let error = new Error()
        error.message = 'Error encountered'
        error.statusCode = 404
        throw error
    }
    return reply.send({ message: `hola ${usuario}` })
}

module.exports = { getAllUsers }
