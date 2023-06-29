import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Producto } from '../models/producto';
//Básicamente 

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = "http://localhost:3000/api/productos/";
  constructor(private http:HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(this.url);
  }
  
  deleteProductos(id:string):Observable<any> {
    return this.http.delete(this.url+id);
  }
  
  postProducto(producto: Producto):Observable<any> {
    return this.http.post(this.url, producto);
  }

}

