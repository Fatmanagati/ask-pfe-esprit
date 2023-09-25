import { Injectable } from '@angular/core';
import { Departement } from '../components/departement/departement.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  constructor(private httpClient: HttpClient) { }

  public getdeps() {
    return this.httpClient.get<Departement[]>('http://localhost:8080/PFE/departement/getall')
  }
  addDepartement(d: Departement) {
    return this.httpClient.post('http://localhost:8080/PFE/departement/add', d);
  }
  public deleteDepartement(id: number) {
    return this.httpClient.delete(`http://localhost:8080/PFE/departement/delete/${id}`);
  }

}
