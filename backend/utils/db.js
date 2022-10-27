const fastify = require('fastify')({ logger: true })
const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    await mongoose.connect(process.env.MONGOURI)
        .then(res => fastify.log.info('connected to database'))
        .catch(error => { throw new Error(error) })
}

mongoose.connection.on('error', err => {
    fastify.log.error(err)
})

module.exports = connectDB
