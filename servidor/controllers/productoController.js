const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) => {
  try {
    let producto;
    producto = new Producto(req.body);
    await producto.save();
    res.status(200).send(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};

//Este obtener productos es un controlador que le paso en routes productos.js
exports.obtenerProductos = async (req, res) => {
  try {
    let productos;
    productos = await Producto.find(); //Producto.find me da todos los productos y me los guarda en una variable.
    res.status(200).send(productos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};

//Acá vamos a tener que identificar el producto que queremos eliminar
exports.eliminarProducto = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id); //Esto me devuelve el ID que puso el usuario en la ruta de la URL
    if (!producto) {
      //Si el producto no existe (porque no existe ese ID) vamos acá.
      return res.status(404).json("No existe el producto solicitado");
    }
    await Producto.findOneAndRemove({ _id: req.params.id }); //Busco en la base de datos de mongo en el campo _id por el ID que nos proveyeron y lo eliminamos
    res.status(200).json("El producto ha sido eliminado con éxito");
    console.log(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};

exports.obtenerProducto = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id); //Esto me devuelve el ID que puso el usuario en la ruta de la URL
    if (!producto) {
      //Si el producto no existe (porque no existe ese ID) vamos acá.
      return res.status(404).json("No existe el producto solicitado");
    }
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};

exports.actualizarProducto = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    let producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json("No existe el producto solicitado");
    }

    producto.name = name;
    producto.description = description;
    producto.price = price;
    producto.stock = stock;
    producto = await Producto.findOneAndUpdate(
      { _id: req.params.id },
      producto,
      { new: true }
    );
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};
