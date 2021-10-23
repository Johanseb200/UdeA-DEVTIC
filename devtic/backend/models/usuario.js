const mongoose = require('mongoose');

const usuario = mongoose.Schema({
    
    nombre: {type: String, required: true},
    identificacion: {type: String, required: true},
    correo: {type: String, required: true},
    direccion: {type: String, required: true},
    rol: {type: String, required: true},

});

module.exports = mongoose.model('Usuario',usuario);