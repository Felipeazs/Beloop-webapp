const fastify = require('fastify')()

const { getAllUsers } = require('../controller/user-controller')

module.exports = function(fastify, opts, done) {
    fastify.post('/api/users', getAllUsers)
    done()
}

