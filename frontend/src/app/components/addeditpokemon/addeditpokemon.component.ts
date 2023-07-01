import { Component, OnInit } from '@angular/core';
import  {FormBuilder, FormGroup, Validators }  from '@angular/forms';
import { Router } from '@angular/router';
//import { Producto } from 'src/app/models/producto';
import { Pokemon } from 'src/app/models/pokemon'
import { PokedexService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-addeditpokemon',
  templateUrl: './addeditpokemon.component.html',
  styleUrls: ['./addeditpokemon.component.css']
})
export class AddeditpokemonComponent {

pokemonForm: FormGroup;

constructor(private fb: FormBuilder, private router: Router, private _pokedexService: PokedexService){
  this.pokemonForm = this.fb.group ({
    number: ['', Validators.required],
    name: ['', Validators.required],
    description: ['', Validators.required],
    type: ['', Validators.required],
    image: ['', Validators.required],
  })
}

onPaste(event: ClipboardEvent) {
  const clipboardData = event.clipboardData;
  if (clipboardData && clipboardData.items) {
    for (let i = 0; i < clipboardData.items.length; i++) {
      const item = clipboardData.items[i];
      if (item.type.indexOf('image') !== -1) {
        if (item instanceof ClipboardItem) { // Verificar si es una instancia de ClipboardItem
          const reader = new FileReader();
          reader.onload = (e: any) => {
            const imagePreview = document.getElementById('imagePreview');
            if (imagePreview) {
              imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview" />`;
            }
          };
          const file = item.getAsFile();
          if (file) {
            reader.readAsDataURL(file);
          }
        }
      }
    }
  }
}


agregarPokemon () {
  const POKEMON: Pokemon = {
    pokeNum: this.pokemonForm.value.number,
    pokeName: this.pokemonForm.value.name,
    pokeDesc: this.pokemonForm.value.description,
    pokeType: this.pokemonForm.value.type,
    pokeImg: this.pokemonForm.value.image
  }
  console.log(POKEMON);

  this._pokedexService.postPokemon(POKEMON).subscribe({
    next: data => {
      console.log("Nuevo Pokemon agregado a la Pokedex ");
      this.router.navigate(['/'])
  }, error: err => {
    console.log(err);
    this.pokemonForm.reset();
  }
})
}

}
