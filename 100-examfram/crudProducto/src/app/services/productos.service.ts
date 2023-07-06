import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct, IProducts } from '../interfaces/IProducto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private baseURL = `http://localhost:2500/v1/inventory/api`

  constructor(private http: HttpClient) { }


  getAllData(): Observable<IProducts> {
    return this.http.get<IProducts>(`${this.baseURL}/products`)
  }
  postData(data: any): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.baseURL}/products`, data)
  }
  updateData(data: any, id: string): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.baseURL}/products/${id}`, data)
  }
  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/products/${id}`)
}


}
