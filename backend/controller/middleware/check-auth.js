const jwt = require('jsonwebtoken')

const checkAuth = (request, reply, done) => {
    if (request.method === 'OPTIONS') {
        return done()
    }

    try {
        const token = request.headers.authentication.split(' ')[1]
        if (!token) {
            throw new Error('Authentication failed')
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        request.userId = { id: decodedToken.userId }
        done()

    } catch {
        let error = new Error()
        error.message = 'Authentication failed'
        error.statusCode = 403
        return done(error)
    }

}

module.exports = checkAuth
