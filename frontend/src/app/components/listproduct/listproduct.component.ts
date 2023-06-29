import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css'],
})
export class ListproductComponent implements OnInit {
  listProducts: Producto[] = [];

  constructor(private _productoService: ProductoService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._productoService.getProductos().subscribe({
      next: (data) => {
        console.log(data);
        this.listProducts = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  eliminarProducto(id:any) {
    this._productoService.deleteProductos(id).subscribe({
      next: (data) => {
        console.log (data);
        this.obtenerProductos() //Yo lo que quiero es que después de borrarlo, me devuelva la página actualizada, entonces le paso la función de obtener producto
      },
      error: (err) => {
        console.log(err)
      }
      }
    )
  }
  
  editarProducto(producto:Producto) {
    
  }


}
