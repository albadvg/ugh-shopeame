import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  @Input() product:any = { }
  @Input() hasEditBtn!:boolean;


  constructor(private servicio:ApiService) {};


  //al clicar en "Editar", el id del producto clicado se almacena y se hace una petición que actualiza el valor de product.
  updateClickedProduct = (product:any) => {
    this.product = product;
    this.servicio.defaultProduct = product;
    console.log(this.servicio.defaultProduct);
  }
  
}
