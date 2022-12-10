const fastify = require('fastify')()
const checkAuth = require('../controller/middleware/check-auth')

const { saveUserFormularioOpts } = require('../options/form-options')

const { saveUserFormulario } = require('../controller/form-controller')

const routes = (fastify, options, done) => {

    fastify.addHook('onRequest', checkAuth)

    fastify.post('/api/user/:userId/formulario/save', saveUserFormularioOpts, saveUserFormulario)
    done()
}
module.exports = routes
