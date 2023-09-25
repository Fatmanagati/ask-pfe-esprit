import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
export class Question{
  constructor(
    public idQuestion:number,
    public text:string,
    public title:string,
    public nbAnswers:number,
    public dateQuestion :Date,
    public answer: any,
    public departement: any,
    public technology :any,
    public nbViews:number,
    public iduserview:any[],
    public codinsert:string
  ){}
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
 question!: Question
 questionList!:Question[]
 iduser!:string
  constructor(public _router:Router,public questionservice: QuestionService) { }

  ngOnInit(): void {
    const userData: {
      userName: string,
      id: string,
      role: string,
      _token: string,
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData')||'')  

    this.iduser=userData.id;
    this.questionservice.getquestions().subscribe(
      response => {
        console.log(response);
        this.questionList = response;
      });
  }

  retrieveQuestion(idq:number)
  {
    this._router.navigate(['questionretrieve',idq]);
   
  }
  addQuestion() {
    this._router.navigate(['questionadd'])
  }

}
