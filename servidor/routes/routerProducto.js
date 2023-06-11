const express = require ('express');

const routerProducto = express.Router();

routerProducto.get('/',(req,res) => {
    res.send("<h1>Estamos en API/Productos</h1>");
})

module.exports = routerProducto;
