import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../components/question/question.component';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) { }

  
  public getquestions() {
    return this.httpClient.get<Question[]>('http://localhost:8080/PFE/question/getall')
  }
  // addUser(a: User) {
  //   return this.httpClient.post('http://localhost:8080/PFE/user/add', a);
  // }
  // addQuestion(question: Question, departmentId: number) {
  //   return this.httpClient.post(`http://localhost:8080/PFE/user/addep/${departmentId}`,question);
  // }
  // addUser1(a: Question, id:number) {
  //   return this.httpClient.post(`http://localhost:8080/PFE/user/add/${id}`, a);
  // }
  public deletequetion(id: number) {
    return this.httpClient.delete(`http://localhost:8080/PFE/question/delete/${id}`);
  }
  public updateQuestion(id: number, question: Question){
    return this.httpClient.put(`http://localhost:8080/PFE/question/update/${id}`,question);
  }
  public retrieveQuestion(id:number){
    return this.httpClient.get<Question>(`http://localhost:8080/PFE/question/getbyid/${id}`)
  }
  public addQuestion(question : Question, idu:any,idt:number,idq:number){
    return this.httpClient.post(`http://localhost:8080/PFE/question/addaffq/${idu}/${idt}/${idq}`,question)
  }
}
