import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL:string = 'https://ugh-shopeame-json-server.vercel.app/';
  // BASE_URL:string = ' http://localhost:3000/';
  PRODUCTS_URL:string = `${this.BASE_URL}libros`;

  public clickedId!:number;

  public defaultProduct:any = {
    id: 0,
    name: 'Producto de muestra',
    price: 8.5,
    author: 'Autorx de muestra',
    stars: 5,
    image: 'https://redthread.uoregon.edu/files/original/affd16fd5264cab9197da4cd1a996f820e601ee4.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
  };

  constructor(private http:HttpClient) { }

  public getProducts(page: number): Observable<any> {
    return this.http.get(this.PRODUCTS_URL + '?_page=' + page)
      
  }


  public getProduct(id:number) {
    return this.http.get(this.PRODUCTS_URL + id);
  }

  public postProduct(newProd:any) {
    return this.http.post(this.PRODUCTS_URL, newProd);
  }

  public updateProduct(id:number, newData:any) {
    return this.http.patch(this.PRODUCTS_URL  + '/' + id, newData);
  }

  public deleteProduct(id:number) {
    return this.http.delete(this.PRODUCTS_URL + '/' + id)
    
  }
}
