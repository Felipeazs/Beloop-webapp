const fastify = require('fastify')()

const checkAuth = require('../controller/middleware/check-auth')

const { saveAnalisisOpts, getAnalisisOpts } = require('../options/auth-options')
const { getUserDataOpts, updateUserDataOpts } = require('../options/user-options')

const { getUserData, updateUserData } = require('../controller/user-controller')
const { saveAnalisis, getUserAnalisis, getAllUserAnalisis } = require('../controller/auth-controller')

const routes = (fastify, options, done) => {

    fastify.addHook('onRequest', checkAuth)

    fastify.get('/api/user/analisis/:resultId', getAnalisisOpts, getUserAnalisis)
    fastify.get('/api/user/analisis', options, getAllUserAnalisis)
    fastify.post('/api/user/:userId/analisis/save', saveAnalisisOpts, saveAnalisis)
    fastify.put('/api/user/update', updateUserDataOpts, updateUserData)
    fastify.get('/api/user/:userId', getUserDataOpts, getUserData)

    done()
}
module.exports = routes
