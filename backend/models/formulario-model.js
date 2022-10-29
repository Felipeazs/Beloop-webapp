const mongoose = require('mongoose')
const validator = require('mongoose-unique-validator')

const formularioSchema = mongoose.Schema({
    catastro:  {
        type: String,
        required: true
    },
    gestion: {
        type: String,
        required: true
    },
    residuos: {
        type: [String],
        required: true
    },
    revalorizacion: {
        type: String,
        required: true
    },
    volumen: {
        type: String,
        required: true
    },
    usuario: {
        type: mongoose.Schema.ObjectId,
        ref: 'Usuario',
        required: true
    }
})

formularioSchema.plugin(validator)

module.exports = mongoose.model('Formulario', formularioSchema)
