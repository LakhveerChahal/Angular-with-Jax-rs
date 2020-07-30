import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SalesRep } from '../Models/salesrep.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = 'http://localhost:8080/SalesRep';
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<SalesRep[]>(this.baseUrl + '/api/data/getReps');
  }

  createRep(newSalesRep: SalesRep){
    return this.http.post(this.baseUrl + '/api/data/create', 
      newSalesRep,
      {
        observe: 'response'
      }
    );
  }

  deleteRep(deleteId: number){
    return this.http.delete(this.baseUrl + '/api/data/delete/' + deleteId);
  }

  updateRep(salesRep: SalesRep){
    return this.http.put(this.baseUrl + '/api/data/update', salesRep);
  }
}
