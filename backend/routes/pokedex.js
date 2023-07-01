const express = require ('express');
const pokedexController = require ('../controllers/pokedexController')
const router = express.Router();

router.post('/', pokedexController.crearPokemon);
router.get('/', pokedexController.obtenerPokemones);
router.get('/:id', pokedexController.obtenerPokemones);
router.put('/:id', pokedexController.actualizarPokemon);
router.delete('/:id', pokedexController.eliminarPokemon);

module.exports = router;
