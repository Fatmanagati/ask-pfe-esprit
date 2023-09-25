import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../components/user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) { }

  public getusers() {
    return this.httpClient.get<User[]>('http://localhost:8080/PFE/user/getall')
  }
  // addUser(a: User) {
  //   return this.httpClient.post('http://localhost:8080/PFE/user/add', a);
  // }
  addUser(user: User, departmentId: number) {
    return this.httpClient.post(`http://localhost:8080/PFE/user/addep/${departmentId}`,user);
  }
  addUser1(a: User, id:number) {
    return this.httpClient.post(`http://localhost:8080/PFE/user/add/${id}`, a);
  }
  public deleteUser(id: number) {
    return this.httpClient.delete(`http://localhost:8080/PFE/user/delete/${id}`);
  }
  public updateUser(id: number, user: User){
    return this.httpClient.put(`http://localhost:8080/PFE/user/update/${id}`,user);
  }
  public retrieveUser(id:number){
    return this.httpClient.get<User>(`http://localhost:8080/PFE/user/getbyid/${id}`)
  }
}
