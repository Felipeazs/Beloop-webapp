const path = require('path')
const fastify = require('fastify')({ logger: true })
const cors = require('@fastify/cors')
require('dotenv').config()
const connectDB = require('./utils/db')
const Sentry = require('./sentry.server.config')

const userRoutes = require('./routes/user-route')
const authRoutes = require('./routes/auth-route')
const formRoutes = require('./routes/form-route')

fastify.register(cors, { origin: ['https://beloop-webapp.vercel.app/', 'http://localhost:3000'] })

//handle errors by sentry on development
fastify.addHook('onError', (request, reply, error, done) => {
    if (process.env.NODE_ENV !== 'development') {
        Sentry.captureException(error)
    }
    done()
})

// //setting headers
// fastify.addHook('onRequest', async (request, reply) => {
//     reply.header('Access-Control-Allow-Origin', '*')
//     reply.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
//     reply.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
// })

//routes
fastify.get('/', (request, reply) => {
    reply.send({ msg: 'api up and running...' })
})
fastify.register(userRoutes)
fastify.register(authRoutes)
fastify.register(formRoutes)

if (process.env.NODE_ENV === 'production') {
    fastify.register(require('@fastify/static'), {
        root: path.join(__dirname, '../frontend/build'),
        wildcard: false
    })
    fastify.get('*', (request, reply) => {
        reply.sendFile('index.html')
    })
} else {
    fastify.get('/', (request, reply) => {
        reply.status(200).send('API is running...')
    })
}

//handle errors
fastify.setErrorHandler(async (error, request, reply) => {
    fastify.log.error(error)
    reply.status(error.statusCode).send({ ok: false, message: error.message })
})

const PORT = process.env.PORT || 5000
connectDB().then(res => {
    fastify.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
        }

        fastify.log.info(`server listening on port: ${address}`)
    })
}) 
