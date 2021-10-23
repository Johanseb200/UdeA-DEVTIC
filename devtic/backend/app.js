var express = require('express');
var mongoose = require('mongoose');
const cors = require("cors");
var app = express();

const productosRoutes = require("./routes/productos")
const ventasRoutes = require("./routes/ventas")
const usuariosRoutes = require("./routes/usuarios")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect(
    "mongodb+srv://johan:123456johan@cluster0.ixezx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(() => {

        console.log("Estamos conectados");
    });


app.use("/api/productos", productosRoutes);
app.use("/api/ventas",ventasRoutes);
app.use("/api/usuarios", usuariosRoutes);

module.exports = app;