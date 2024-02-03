import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ApiService } from '../../services/api.service';
import { ProductoComponent } from '../producto/producto.component';
import { PaginacionComponent } from '../paginacion/paginacion.component';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [ProductoComponent, PaginacionComponent],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})

export class GaleriaComponent {

  @Output() emitter = new EventEmitter<number>();

  public productsList:any[] = [];
  page:number = 1;

  //traerme el servicio
  constructor(private servicio:ApiService) {};

  ngOnInit():void {
    //petición get de todos los productos a través de mi servicio
    this.servicio.getProducts(this.page).subscribe((data:any) => {
      this.productsList = data;
      //enviar al padre en número de productos para que lo pinte en el título de la página
      this.emitter.emit(this.productsList.length);

    })
  }

  updatePage(page:number) {
    this.page = page;
    this.servicio.getProducts(this.page).subscribe((data:any) => {
      this.productsList = data;
      this.emitter.emit(this.productsList.length);
    });
  }
  
}
