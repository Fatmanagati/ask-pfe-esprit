import { Injectable } from '@angular/core';
import { Technology } from '../components/technology/technology.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(private httpClient: HttpClient) { }

  public gettechs() {
    return this.httpClient.get<Technology[]>('http://localhost:8080/PFE/technology/getall')
  }
  addTech(a: Technology) {
    return this.httpClient.post('http://localhost:8080/PFE/technology/add', a);
  }

  public deleteTech(id: number) {
    return this.httpClient.delete(`http://localhost:8080/PFE/technology/delete/${id}`);
  }

}

