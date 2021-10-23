const express = require('express');
const router = express.Router();

const ProductoController = require('../controllers/productos');

router.get("", ProductoController.getProducts);

router.post("",ProductoController.addProduct);



router.get("/disponibles",ProductoController.getProductoDisponible);



router.delete("/:id", ProductoController.deleteProducto);

router.get("/:id", ProductoController.getProductId);

router.put("/:id", ProductoController.editProduct);

module.exports = router;