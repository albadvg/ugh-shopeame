import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoComponent } from '../components/producto/producto.component';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL:string = 'https://ugh-shopeame-json-server.vercel.app/';
  PRODUCTS_URL:string = `${this.BASE_URL}libros`;

  public clickedId!:number;

  public defaultProduct:any = {
    name: 'Producto de muestra',
    price: 1,
    author: 'Loli Pocholi',
    stars: 5,
    image: 'https://redthread.uoregon.edu/files/original/affd16fd5264cab9197da4cd1a996f820e601ee4.png'
  };

  constructor(private http:HttpClient) { }

  public getProducts(page:number) {
    return this.http.get(this.PRODUCTS_URL + '?_page=' + page);
  }

  public getProduct(id:number) {
    return this.http.get(this.PRODUCTS_URL + id);
  }

  public postProduct(newProd:any) {
    return this.http.post(this.PRODUCTS_URL, newProd);
  }

  public updateProduct(id:number, newData:any) {
    return this.http.put(this.PRODUCTS_URL + id, newData);
  }

  public deleteProduct(id:number) {
    return this.http.delete(this.PRODUCTS_URL + id);
  }
}
