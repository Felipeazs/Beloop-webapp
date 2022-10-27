const fastify = require('fastify')()

const checkAuth = require('../controller/middleware/check-auth')

const { saveAnalisisOpts, getAnalisisOpts } = require('../options/analisis-options')
const { saveAnalisis, getUserAnalisis, getAllUserAnalisis } = require('../controller/analisis-controller')

const routes = (fastify, options, done) => {

    fastify.addHook('onRequest', checkAuth)
    fastify.get('/api/user/analisis/:resultId', getAnalisisOpts, getUserAnalisis)
    fastify.get('/api/user/analisis', options, getAllUserAnalisis)
    fastify.post('/api/user/analisis/save', saveAnalisisOpts, saveAnalisis)

    done()
}
module.exports = routes
