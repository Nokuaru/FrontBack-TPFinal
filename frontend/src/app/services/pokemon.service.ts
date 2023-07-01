import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
//import { Producto } from '../models/producto';
import {Pokemon} from '../models/pokemon'

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  url = "http://localhost:3000/api/pokedex/";
  constructor(private http:HttpClient) { }

  getPokemones(): Observable<any> {
    return this.http.get(this.url);
  }
  
  deletePokemones(id:string):Observable<any> {
    return this.http.delete(this.url+id);
  }
  
  postPokemon(pokemon: Pokemon):Observable<any> {
    return this.http.post(this.url, pokemon);
  }

}


