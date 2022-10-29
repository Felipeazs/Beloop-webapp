const saveUserFormularioOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['autodiagnostico'],
            properties: {
                catastro: {
                    type: 'string',
                },
                gestion: {
                    type: 'string',
                },
                residuos: {
                    type: 'array',
                    default: []
                },
                revalorizacion: {
                    type: 'string',
                },
                volumen: {
                    type: 'string',
                },
            }
        },
        response: {
            201: {
                type: 'object',
                properties: {
                    ok: {
                        type: 'boolean'
                    },
                    formularioId: {
                        type: 'string',
                    },
                }
            },
            400: {
                type: 'object',
                properties: {
                    ok: {
                        type: 'boolean'
                    },
                    message: {
                        type: 'string'
                    }
                }
            },
            500: {
                type: 'object',
                properties: {
                    ok: {
                        type: 'boolean'
                    },
                    message: {
                        type: 'string'
                    }
                }
            }
        }
    }
}

module.exports = { saveUserFormularioOpts }
