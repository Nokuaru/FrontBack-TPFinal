import { Component, OnInit } from '@angular/core';
import  {FormBuilder, FormGroup, Validators }  from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-addeditproduct',
  templateUrl: './addeditproduct.component.html',
  styleUrls: ['./addeditproduct.component.css']
})
export class AddeditproductComponent {

productoForm: FormGroup;

constructor(private fb: FormBuilder, private router: Router, private _productoService: ProductoService){
  this.productoForm = this.fb.group ({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    stock: ['', Validators.required],
  })
}
agregarProducto () {
  const PRODUCTO: Producto = {
    name: this.productoForm.value.name,
    description: this.productoForm.value.description,
    price: this.productoForm.value.price,
    stock: this.productoForm.value.stock
  }
  console.log(PRODUCTO);

  this._productoService.postProducto(PRODUCTO).subscribe({
    next: data => {
      console.log("producto registrado");
      this.router.navigate(['/']) //con esto vuelve a la ruta raiz
  }, error: err => {
    console.log(err);
    this.productoForm.reset();
  }
})
}

}
