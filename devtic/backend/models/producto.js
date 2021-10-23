const mongoose = require('mongoose');

const producto = mongoose.Schema({
    
    title: {type: String, required: true},
    descripcion: {type:String},
    price: {type: Number, required: true},
    disponible: {type:Boolean, required: true},

});

module.exports = mongoose.model('Producto',producto);