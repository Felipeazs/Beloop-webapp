const path = require('path')
const fastify = require('fastify')({ logger: true })
require('dotenv').config()
const connectDB = require('./utils/db')

//setting headers
fastify.addHook('onRequest', async (request, reply) => {
    reply.header('Access-Control-Allow-Origin', '*')
    reply.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    reply.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
})

//routes
const userRoutes = require('./routes/user-route')
const analisisRoutes = require('./routes/analisis-route.js')
fastify.register(userRoutes)
fastify.register(analisisRoutes)

if (process.env.NODE_ENV === 'production') {
    fastify.register(require('@fastify/static'), {
        root: path.join(__dirname, '../frontend/build')
    })

    // fastify.get('*', async (request, reply) => {
    //     return reply.sendFile('index.html', path.join(__dirname, '../', 'frontend', 'build'))
    // })
} else {
    fastify.get('/', (request, reply) => {
        reply.status(200).send('API is running...')
    })
}

fastify.setErrorHandler(async (error, request, reply) => {
    fastify.log.error(error)

    reply.status(error.statusCode).send({ ok: false, message: error.message })
})

const PORT = process.env.PORT || 5000
connectDB().then(res => {
    fastify.listen({ port: PORT }, (err, address) => {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
        }

        fastify.log.info(`server listening on port: ${address}`)
    })
}) 
