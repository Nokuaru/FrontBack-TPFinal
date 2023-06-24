import { Component } from '@angular/core';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent {
  usuarios = ["Pedro","Luna","Jorge"];
  listProducts = [
    {
      nombre: 'Papas fritas',
      descripcion: 'Producto salado',
      precio: '300',
      stock: '17'
    },
    {
      nombre: 'Coca cola',
      descripcion: 'Bebida carbonatada',
      precio: '150',
      stock: '25'
    },
    {
      nombre: 'Chocolate negro',
      descripcion: 'Tableta de chocolate amargo',
      precio: '200',
      stock: '12'
    },
    {
      nombre: 'Galletas de avena',
      descripcion: 'Galletas saludables',
      precio: '250',
      stock: '30'
    },
    {
      nombre: 'Manzanas',
      descripcion: 'Frutas frescas',
      precio: '100',
      stock: '40'
    },
    {
      nombre: 'Pan integral',
      descripcion: 'Pan hecho con harina integral',
      precio: '80',
      stock: '15'
    },
    {
      nombre: 'Yogur griego',
      descripcion: 'Yogur cremoso',
      precio: '120',
      stock: '20'
    },
    {
      nombre: 'Café molido',
      descripcion: 'Café de tueste medio',
      precio: '350',
      stock: '10'
    },
    {
      nombre: 'Agua mineral',
      descripcion: 'Agua sin gas',
      precio: '50',
      stock: '50'
    },
    {
      nombre: 'Huevos',
      descripcion: 'Huevos frescos',
      precio: '180',
      stock: '8'
    }
  ]

  
}
