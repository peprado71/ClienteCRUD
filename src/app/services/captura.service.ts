import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/capturas';

const arch = 'archivo';

@Injectable({
  providedIn: 'root'
})
export class CapturaService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id: any) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: { marca: string; nombre_fantasia: string; denominacion: any; rnpa: any}) {
    return this.http.post(baseUrl, data);
  }

  createAll() {
    return this.http.post( `${baseUrl}/${arch}`,"");
  }


  update(id: any, data: { marca: any; nombre_fantasia: any; denominacion: any; rnpa: any }) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByMarca(marca: string) {
    return this.http.get(`${baseUrl}?marca=${marca}`);
  }

}
