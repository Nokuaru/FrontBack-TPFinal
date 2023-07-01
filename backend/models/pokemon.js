const mongoose = require ('mongoose');

const pokedexSchema = mongoose.Schema(
    {
    pokeNum: {
        type: Number,
        required:true
    },
    pokeName: {
        type: String,
        required:true
    },
    pokeDesc: {
        type: String,
        required:true
    },
    pokeType: {
        type: String,
        required:true
    },
    pokeImg: {
        type: String,
        required:true
    },
    
},

{
    collection: "pokedex"
}

)

module.exports = mongoose.model('Pokemon',pokedexSchema);