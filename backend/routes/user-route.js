const { postOpts, loginOpts, getOpts } = require('../options/user-options')

const checkAuth = require('../controller/middleware/check-auth')

const { signupUser, loginUser, getAllUsers } = require('../controller/user-controller')

const routes = (fastify, options, done) => {
    fastify.post('/api/users/signup', postOpts, signupUser)
    fastify.post('/api/users/login', loginOpts, loginUser)
    fastify.get('/api/users', getOpts, getAllUsers)
    done()
}
module.exports = routes

