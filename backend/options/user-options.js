const postOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['correo', 'rut', 'empresa', 'rubro', 'innovacion', 'ingresos', 'trabajadores', 'password'],
            properties: {
                correo: {
                    type: 'string',
                    pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
                },
                rut: {
                    type: 'string',
                    pattern: "^[a-zA-Z0-9_.-]*$"
                },
                empresa: {
                    type: 'string',
                    pattern: "^[a-zA-Z0-9 _.-]*$"
                },
                rubro: {
                    type: 'string',
                    pattern: "^[a-zA-Z0-9 _.-]*$"
                },
                innovacion: {
                    type: 'boolean',
                },
                ingresos: {
                    type: 'string',
                    pattern: "^[a-zA-Z0-9 _.-]*$"
                },
                trabajadores: {
                    type: 'string',
                    pattern: "^[0-9]*$"
                },
                password: {
                    type: 'string',
                    minLength: 5
                }
            }
        },
        response: {
            201: {
                type: 'object',
                properties: {
                    ok: {
                        type: 'boolean'
                    },
                    user: {
                        type: 'object',
                        properties: {
                            correo: {
                                type: 'string'
                            },
                            empresa: {
                                type: 'string'
                            }
                        }
                    },
                    token: {
                        type: 'string'
                    }
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

const loginOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['correo', 'password'],
            properties: {
                correo: {
                    type: 'string',
                    pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
                },
                password: {
                    type: 'string',
                    minLength: 5
                }
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    ok: {
                        type: 'boolean'
                    },
                    user: {
                        type: 'object',
                        properties: {
                            _id: {
                                type: 'string'
                            },
                            correo: {
                                type: 'string'
                            }
                        }
                    },
                    token: {
                        type: 'string'
                    }
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
            }
        }
    }

}

const getOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    }
                }
            },
            500: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    },
                    ok: {
                        type: 'boolean'
                    }
                }
            }
        }
    }
}

module.exports = { postOpts, loginOpts, getOpts }
