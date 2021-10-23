const Usuario  = require("../models/usuario");

exports.getUsuarios = (req,res) => {
    Usuario.find().then((postResult) => {
        res.status(200).json(postResult);
    });

};

exports.addUsuario = (req,res) => {
    const usuarioAdd = new Usuario({

        nombre: req.body.nombre,
        identificacion: req.body.identificacion,
        correo: req.body.correo,
        direccion: req.body.direccion,
        rol: req.body.rol,

    });
    usuarioAdd.save().then((createdUsuario) => {
        console.log(createdUsuario);
        res.status(201).json("Creado Satisfactoriamente")
    });
};

exports.getUsuarioId = (req,res) => {
    Usuario.findById(req.params.id).then((usuarioResult) => {
        if(usuarioResult){
            res.status(200).json(usuarioResult);
        }else{
            res.status(404).json("usuario no encontrado")
        }
    });
};

exports.deleteUsuario = (req, res) => {
    const id = req.params.id;

    Usuario.deleteOne({ _id: id }).then((usuarioResult) => {
        res.status(200).json("Usuario eliminada");
    })
};

exports.editUsuario = (req, res) => {
    const id =req.params.id;
    console.log(id);
    const usuarioUpd = new Usuario({

        _id: id,
        nombre: req.body.nombre,
        identificacion: req.body.identificacion,
        correo: req.body.correo,
        direccion: req.body.direccion,
        rol: req.body.rol,
    });
    console.log(usuarioUpd);

    Usuario.findByIdAndUpdate(id, usuarioUpd).then((usuarioResult) => {
        res.status(200).json("El usuario se actualizó satisfactoriamente");
    });
    
};