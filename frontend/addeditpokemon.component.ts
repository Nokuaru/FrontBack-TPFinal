import { Component, OnInit } from '@angular/core';
import  {FormBuilder, FormGroup, Validators }  from '@angular/forms';
//import { Producto } from 'src/app/models/producto';
import { Pokemon } from 'src/app/models/pokemon'
import { PokedexService } from 'src/app/services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-addeditpokemon',
  templateUrl: './addeditpokemon.component.html',
  styleUrls: ['./addeditpokemon.component.css']
})

export class AddeditpokemonComponent implements OnInit {
  pokemonForm: FormGroup;
  id: string | null;
 
  constructor(
  private fb: FormBuilder,
  private router: Router,
  private _pokedexService: PokedexService,
  private actRouter: ActivatedRoute
  ) { //importamos router para que cuando le dams aceptar

  
  this.pokemonForm = this.fb.group({
  number: ['', Validators.required],
  name:['', Validators.required],
  description:['', Validators.required],
  price:['', Validators.required],
  stock:['', Validators.required]
  })
  this.id = this.actRouter.snapshot.paramMap.get('id')
  
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
  ngOnInit(): void {
  this.esEditar();
  }
  agregarPokemon(){
  const POKEMON: Pokemon = {
    pokeNum: this.pokemonForm.value.number,
    pokeName: this.pokemonForm.value.name,
    pokeDesc: this.pokemonForm.value.description,
    pokeType: this.pokemonForm.value.type,
    pokeImg: this.pokemonForm.value.image
  }
  if(this.id !== null){
  this._pokedexService.editarPokemon(this.id,POKEMON).subscribe({
  next: data => {
  this.router.navigate(['/'])
  }
  })
  }else{
  console.log(POKEMON)
  this._pokedexService.postPokemon(POKEMON).subscribe({
  next: data => {
  console.log("producto registrado");
  this.router.navigate(['/']) //con esto vuelve a la ruta raiz
  }, error: err => {
  console.log(err);
  this.pokemonForm.reset();
  }
  })
  }
  }
  esEditar(){
  if(this.id !== null){
  this._pokedexService.obtenerPokemon(this.id).subscribe({
  next: data => {
  this.pokemonForm.setValue({
  name: data.name,
  description: data.description,
  price: data.price,
  stock: data.stock,
  })
  }, error: err => {
  console.log(err);
  }
  })
  }
  }
  }
