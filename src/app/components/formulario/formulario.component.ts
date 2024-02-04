import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Product } from '../../interfaces/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, RouterLink , CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})

export class FormularioComponent {
  
  @Input() formData:any = {};
  
  @Input() editionMode!:boolean;
  
  @Output() formChange  = new EventEmitter<any>();
  
  crudFeedback:any = {};
  
  constructor(private service:ApiService) {}

  emitData() {
    this.formChange.emit(this.formData);
  }

  saveProduct() {
    const newProduct:Product = this.formData;
    this.service.postProduct(newProduct).subscribe();
    this.crudFeedback.msg = 'Producto creado con éxito';
  }

  updateProduct() {
    const productId = this.service.defaultProduct.id;
    const updateInfo = this.formData;
    console.log(updateInfo);
    this.service.updateProduct(productId, updateInfo).subscribe();
    this.crudFeedback.msg = 'Producto modificado con éxito';
  }

  deleteProduct() {
    const productId = this.service.defaultProduct.id;
    console.log(productId);
    this.service.deleteProduct(productId).subscribe();
    this.crudFeedback.msg = 'Producto eliminado con éxito';
  }

  resetEdition(){
    this.service.defaultProduct = {
      name: 'Producto de muestra',
      price: 1,
      author: 'Loli Pocholi',
      stars: 5,
      image: 'https://redthread.uoregon.edu/files/original/affd16fd5264cab9197da4cd1a996f820e601ee4.png'
    };  
  }
}
