const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/usuarios');

router.get("", UsuarioController.getUsuarios);
router.post("",UsuarioController.addUsuario);

router.delete("/:id", UsuarioController.deleteUsuario);
router.get("/:id", UsuarioController.getUsuarioId);

router.put("/:id", UsuarioController.editUsuario);


module.exports = router;