import { Component } from '@angular/core';
import { GaleriaComponent } from '../../components/galeria/galeria.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [GaleriaComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})


export class ProductosComponent {
  numberProducts!:number;

  productsCount(num:number) {
    this.numberProducts = num;
  }
}
