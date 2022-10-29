const postOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['correo', 'rut', 'empresa', 'password'],
            properties: {
                correo: {
                    type: 'string',
                    pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
                },
                empresa: {
                    type: 'string',
                    pattern: "^[a-zA-Z0-9 _.-]*$"
                },
                rut: {
                    type: 'string',
                },
                password: {
                    type: 'string',
                    minLength: 8
                },
                password2: {
                    type: 'string',
                    minLength: 8
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
                            userId: {
                                type: 'string'
                            },
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
                            userId: {
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

const getUserDataOpts = {
    schema: {
        params: {
            type: 'object',
            required: ['userId'],
            properties: {
                userId: {
                    type: 'string'
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
                            },
                            nombre_empresa: {
                                type: 'string'
                            },
                            rut_empresa: {
                                type: 'string'
                            },
                            rubro: {
                                type: 'string'
                            },
                            innovacion: {
                                type: 'string'
                            },
                            ingresos: {
                                type: 'string'
                            },
                            trabajadores: {
                                type: 'string'
                            },
                            telefono: {
                                type: 'string'
                            },
                            ubicacion: {
                                type: 'string'
                            },
                            analisis: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        _id: {
                                            type: 'string'
                                        },
                                        materialidad: {
                                            type: 'number'
                                        },
                                        reciclabilidad: {
                                            type: 'number'
                                        },
                                        separabilidad: {
                                            type: 'number'
                                        },
                                        logistica: {
                                            type: 'number'
                                        },
                                        residuos: {
                                            type: 'number'
                                        },
                                        valorizacion: {
                                            type: 'number'
                                        },
                                        createdAt: {
                                            type: 'string'
                                        }
                                    }
                                }
                            },
                            formulario: {
                                type: 'object',
                                properties: {
                                    catastro: {
                                        type: 'string'
                                    },
                                    gestion: {
                                        type: 'string'
                                    },
                                    revalorizacion: {
                                        type: 'string'
                                    },
                                    volumen: {
                                        type: 'string'
                                    },
                                    residuos: {
                                        type: 'array'
                                    }
                                }
                            }
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
            }

        }

    }
}

const updateUserDataOpts = {
    schema: {
        body: {
            type: 'object',
            properties: {
                correo: {
                    type: 'string'
                },
                empresa: {
                    type: 'string'
                },
                rut: {
                    type: 'string'
                },
                rubro: {
                    type: 'string'
                },
                innovacion: {
                    type: 'string'
                },
                ingresos: {
                    type: 'string'
                },
                trabajadores: {
                    type: 'string'
                },
                telefono: {
                    type: 'string'
                },
                ubicacion: {
                    type: 'string'
                },
                password: {
                    type: 'string'
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
            }
        }
    }
}

module.exports = { postOpts, loginOpts, getOpts, getUserDataOpts, updateUserDataOpts }
