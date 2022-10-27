const mongoose = require('mongoose')
const validator = require('mongoose-unique-validator')

const usuarioSchema = mongoose.Schema({
    correo: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLenght: 6
    },
    nombre_empresa: {
        type: String,
        require: true,
    },
    rut_empresa: {
        type: String,
        required: true,
        unique: true
    },
    rubro: {
        type: String,
        required: true
    },
    dept_innovacion: {
        type: Boolean,
        required: true
    },
    ingresos: {
        type: String,
        required: true
    },
    trabajadores: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        enum: ['ususario', 'admin'],
        default: 'ususario'
    },
    analisis: [{
        type: mongoose.Schema.ObjectId,
        required: false,
        ref: 'Analisis'
    }]
}, { timestamps: true, versionKey: false })


usuarioSchema.plugin(validator)

module.exports = mongoose.model('Usuario', usuarioSchema)
