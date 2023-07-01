const Pokemon = require("../models/pokemon");

exports.crearPokemon = async (req, res) => {
  try {
    let pokemon;
    pokemon = new Pokemon(req.body);
    await pokemon.save();
    res.status(200).send(pokemon);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al crear el Pokemon...");
  }
};
exports.obtenerPokemones = async (req, res) => {
  try {
    let pokedex;
    pokedex = await Pokemon.find();
    res.status(200).send(pokedex);
  } catch (error) {
    console.log(error);
    res.status(500).send("Se produjo un error al obtener la Pokedex");
  }
};

exports.eliminarPokemon = async (req, res) => {
  try {
    let pokemon = await Pokemon.findById(req.params.id);
    if (!pokemon) {
      return res.status(404).json("No existe el Pokemon que estás buscando");
    }
    await Pokemon.findOneAndRemove({ _id: req.params.id });
    res
      .status(200)
      .json("El Pokemon ha sido eliminado con éxito de la Pokedex");
    console.log(pokemon);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};

exports.obtenerPokemon = async (req, res) => {
  try {
    let pokemon = await Pokemon.findById(req.params.id);
    if (!pokemon) {
      return res.status(404).json("No existe el Pokemon que estás buscando");
    }
    res.json(pokemon);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};

exports.actualizarPokemon = async (req, res) => {
  try {
    const { number, name, desc, type, image } = req.body;
    let producto = await Producto.findById(req.params.id);
    if (!pokemon) {
      return res.status(404).json("No existe el Pokemon solicitado");
    }

    pokemon.pokeNum = number;
    pokemon.pokeName = name;
    pokemon.pokeDesc = desc;
    pokemon.pokeType = type;
    pokemon.pokeImg = image;
    producto = await Pokemon.findOneAndUpdate({ _id: req.params.id }, pokemon, {
      new: true,
    });
    res.json(pokemon);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};
