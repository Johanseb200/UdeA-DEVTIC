const Producto = require("../models/producto");

exports.getProducts = (req,res) => {
    Producto.find().then((postResult) => {
        res.status(200).json(postResult);
    });

};

exports.addProduct = (req,res) => {
    console.log(req.body);
    const productoAdd = new Producto({
        title: req.body.title,
        descripcion:req.body.descripcion,
        price: req.body.price,
        disponible: req.body.disponible,
    })
    productoAdd.save().then((createdProduct) => {
        console.log(createdProduct);
        res.status(201).json("Creado Satisfactoriamente")
    });
};

exports.getProductId = (req,res) => {
    Producto.findById(req.params.id).then((productoResult) => {
        if(productoResult){
            res.status(200).json(productoResult);
        }else{
            res.status(404).json("producto no encontrado")
        }
    });
};

exports.getProductoDisponible =(req,res) => {
    Producto.find({disponible: true}).then((productoResult) => {
        res.status(200).json(productoResult);
    });
};

exports.deleteProducto = (req, res) => {
    const id = req.params.id;

    Producto.deleteOne({ _id: id }).then((productoResult) => {
        res.status(200).json("Producto eliminado");
    })
};

exports.editProduct = (req, res) => {
    const id =req.params.id;
    console.log(id);
    const productoUpd = new Producto({
        _id: id,
        title: req.body.title,
        descripcion:req.body.descripcion,
        price: req.body.price,
        disponible: req.body.disponible,
    });
    console.log(productoUpd);

    Producto.findByIdAndUpdate(id, productoUpd).then((productoResult) => {
        res.status(200).json("El producto se actualizó satisfactoriamente");
    });
    
};