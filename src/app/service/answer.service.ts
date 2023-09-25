import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from '../components/answer/answer.component';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private httpClient: HttpClient) { }

  
  public getanswers(id:number) {
    return this.httpClient.get<Answer[]>(`http://localhost:8080/PFE/answer/getbyquestion/${id}`);
  }

  public addanswer(a:Answer,idu:any,idq:number){
    return this.httpClient.post(`http://localhost:8080/PFE/answer/addaff/${idu}/${idq}`,a);
  }
  public getanswerbyid(id:any){
    return this.httpClient.get<Answer>(`http://localhost:8080/PFE/answer/getbyid/${id}`);
  }


}
