const Venta  = require("../models/venta");

exports.getVentas = (req,res) => {
    Venta.find().then((postResult) => {
        res.status(200).json(postResult);
    });

};

exports.addVenta = (req,res) => {
    const ventaAdd = new Venta({
        documento: req.body.documento,
        cliente: req.body.cliente,
        vendedor: req.body.vendedor,
        total: req.body.total,
        estado: req.body.estado,

    })
    ventaAdd.save().then((createdVenta) => {
        console.log(createdVenta);
        res.status(201).json("Creado Satisfactoriamente")
    });
};

exports.getVentaId = (req,res) => {
    Venta.findById(req.params.id).then((ventaResult) => {
        if(ventaResult){
            res.status(200).json(ventaResult);
        }else{
            res.status(404).json("producto no encontrado")
        }
    });
};

exports.deleteVenta = (req, res) => {
    const id = req.params.id;

    Venta.deleteOne({ _id: id }).then((ventaResult) => {
        res.status(200).json("Venta eliminada");
    })
};

exports.editVenta = (req, res) => {
    const id =req.params.id;
    console.log(id);
    const ventaUpd = new Venta({
        _id: id,
        documento: req.body.documento,
        cliente: req.body.cliente,
        vendedor: req.body.vendedor,
        total: req.body.total,
        estado: req.body.estado,
    });
    console.log(ventaUpd);

    Venta.findByIdAndUpdate(id, ventaUpd).then((ventaResult) => {
        res.status(200).json("La venta se actualizó satisfactoriamente");
    });
    
};