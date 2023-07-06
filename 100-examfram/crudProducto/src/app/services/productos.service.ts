import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private baseURL = `http://localhost:2500/v1/inventory/api`

  constructor(private http: HttpClient) { }


  getAllData(): Observable<any> {
    return this.http.get(`${this.baseURL}/products`)
  }
  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/products`, data)
  }
  updateData(data: any, id: string): Observable<any> {
    return this.http.put(`${this.baseURL}/products/${id}`, data)
  }
  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/products/${id}`)
}


}
