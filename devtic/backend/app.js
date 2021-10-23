var express = require('express');
var mongoose = require('mongoose');
const cors = require("cors");
var app = express();

require("dotenv").config();

const productosRoutes = require("./routes/productos")
const ventasRoutes = require("./routes/ventas")
const usuariosRoutes = require("./routes/usuarios")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect(process.env.MONGODB_CONNECT).then(() => {
    console.log("estamos conectados");

});

    
    


app.use("/api/productos", productosRoutes);
app.use("/api/ventas",ventasRoutes);
app.use("/api/usuarios", usuariosRoutes);

module.exports = app;