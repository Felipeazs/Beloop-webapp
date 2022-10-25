const fastify = require('fastify')({ logger: true })
require('dotenv').config()

fastify.register(require('./routes/user-route'))

fastify.setErrorHandler(async (error, request, reply) => {
    fastify.log.error(error)

    reply.status(error.statusCode).send({ ok: false, message: error.message })
})

const PORT = process.env.PORT
fastify.listen({ port: PORT }, (err, address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }

    fastify.log.info(`server listening on port: ${address}`)
})
