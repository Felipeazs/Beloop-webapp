const saveAnalisisOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['materialidad', 'reciclabilidad', 'separabilidad', 'logistica', 'residuos', 'valorizacion'],
            properties: {
                materialidad: {
                    type: 'string',
                },
                reciclabilidad: {
                    type: 'string',
                },
                separabilidad: {
                    type: 'string',
                },
                logistica: {
                    type: 'string',
                },
                residuos: {
                    type: 'string',
                },
                valorizacion: {
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
                    resultId: {
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

const getAnalisisOpts = {
    schema: {
        params: {
            type: 'object',
            required: ['resultId'],
            properties: {
                resultId: {
                    type: 'string',
                },
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    ok: {
                        type: 'boolean'
                    },
                    results: {
                        type: 'object',
                        properties: {
                            materialidad: {
                                type: 'string'
                            },
                            reciclabilidad: {
                                type: 'string'
                            },
                            separabilidad: {
                                type: 'string'
                            },
                            logistica: {
                                type: 'string'
                            },
                            residuos: {
                                type: 'string'
                            },
                            valorizacion: {
                                type: 'string'
                            },
                        }
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

module.exports = { saveAnalisisOpts, getAnalisisOpts }
