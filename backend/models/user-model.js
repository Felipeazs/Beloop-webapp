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
        minLenght: 8
    },
    nombre_empresa: {
        type: String,
        require: true,
    },
    rut_empresa: {
        type: String,
        required: false,
        unique: true
    },
    rubro: {
        type: String,
        required: false
    },
    dept_innovacion: {
        type: Boolean,
        required: false
    },
    ingresos: {
        type: String,
        required: false
    },
    trabajadores: {
        type: Number,
        required: false
    },
    role: {
        type: String,
        enum: ['usuario', 'admin'],
        default: 'usuario'
    },
    telefono: {
        type: String,
        required: false
    },
    ubicacion: {
        type: String,
        required: false
    },
    formulario: {
        type: mongoose.Schema.ObjectId,
        require: false,
        ref: 'Formulario'
    },
    analisis: [{
        type: mongoose.Schema.ObjectId,
        required: false,
        ref: 'Analisis'
    }]
}, { timestamps: true, versionKey: false })


usuarioSchema.plugin(validator)

module.exports = mongoose.model('Usuario', usuarioSchema)
