const mongoose = require('mongoose');

const venta = mongoose.Schema({
    
    documento: {type: Number},
    cliente: {type: String, required: true},
    vendedor: {type: String, required: true},
    total: {type: Number, required: true},
    estado: {type:String, required: true},

});

module.exports = mongoose.model('Venta',venta);