import { Component } from '@angular/core';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { ProductoComponent } from '../../components/producto/producto.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-edicion',
  standalone: true,
  imports: [FormularioComponent, ProductoComponent, FormsModule],
  templateUrl: './edicion.component.html',
  styleUrl: './edicion.component.scss'
})

export class EdicionComponent {
  
  public edicionProduct:any;
  public editionMode:boolean = true;

  constructor(private servicio:ApiService) {
  }
  
  ngOnInit() {
    this.edicionProduct = this.servicio.defaultProduct;   
  }

  getData(formData:any) {
    for(const key in this.edicionProduct) {
      if(formData[key]) {
        this.edicionProduct[key] = formData[key];
      }
    }
  }

}
