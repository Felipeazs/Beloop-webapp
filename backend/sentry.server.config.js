const Sentry = require('@sentry/node')
const pkg = require('../package.json')

Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV,
    release: `beloop-looptest@${pkg.version}`,
    tracesSample: 1.0
})
