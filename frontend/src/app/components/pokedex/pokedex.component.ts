import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { Producto } from 'src/app/models/producto';
import { PokedexService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  pokedex: Pokemon[] = [];

  constructor(private _pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.obtenerPokemones();
  }

  obtenerPokemones() {
    this._pokedexService.getPokemones().subscribe({
      next: (data) => {
        console.log(data);
        this.pokedex = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  eliminarPokemon(id:any) {
    this._pokedexService.deletePokemones(id).subscribe({
      next: (data) => {
        console.log (data);
        this.obtenerPokemones()
      },
      error: (err) => {
        console.log(err)
      }
      }
    )
  }
  
  editarPokemon(pokemon:Pokemon) {
    
  }


}
