const mongoose = require('mongoose')
const validator = require('mongoose-unique-validator')

const analisisSchema = mongoose.Schema({
    materialidad: {
        type: Number,
        requiered: true
    },
    reciclabilidad: {
        type: Number,
        required: true
    },
    separabilidad: {
        type: Number,
        required: true
    },
    logistica: {
        type: Number,
        required: true
    },
    residuos: {
        type: Number,
        required: true
    },
    valorizacion: {
        type: Number,
        required: true
    },
    usuario: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    }
}, { timestamps: true, versionKey: false })

analisisSchema.plugin(validator)

module.exports = mongoose.model('Analisis', analisisSchema)
