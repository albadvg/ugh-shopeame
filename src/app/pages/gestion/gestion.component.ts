import { Component } from '@angular/core';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { ProductoComponent } from '../../components/producto/producto.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [FormularioComponent, ProductoComponent, FormsModule],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.scss'
})

export class GestionComponent {
  
  public gestionProduct:any;
  public editionMode:boolean = false;

  constructor(private servicio:ApiService) {
  }
  
  ngOnInit() {
    this.gestionProduct = this.servicio.defaultProduct;   
    if(this.gestionProduct.id) {
      this.editionMode = true;
    }
  }

  getData(formData:any) {
    for(const key in this.gestionProduct) {
      if(formData[key]) {
        this.gestionProduct[key] = formData[key];
      }
    }
  }

}
