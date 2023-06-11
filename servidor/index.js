const express = require ('express');
const app = express();
const routerProducto = require ('./routes/routerProducto.js')
port = 3000;

app.use('/api/productos', routerProducto);

app.listen(port,() =>{
    console.log(`Servidor funcionando en puerto ${port}`);
})

app.get('/',(req,res) => {
    res.send("<h1>Bienvenido</h1>");
})
