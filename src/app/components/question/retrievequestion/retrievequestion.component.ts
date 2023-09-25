import { Component, OnInit } from '@angular/core';
import { Question } from '../question.component';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import { AnswerService } from 'src/app/service/answer.service';
import { Answer } from '../../answer/answer.component';
import { UserStored } from 'src/app/auth/user-stored';

@Component({
  selector: 'app-retrievequestion',
  templateUrl: './retrievequestion.component.html',
  styleUrls: ['./retrievequestion.component.css']
})
export class RetrievequestionComponent implements OnInit {
 
  editorConfig={
    base_url:'tinymce',
    suffix:'.min',
    plugins:'lists link image table wordcount'
  };

  id!:number;
  question!:Question;
  answerList!:Answer[];
  iduser!:string;
  answer!:Answer;
  idans!:number;

  code = `
  <script
    src="somescript.js"
  <script/>

  <script>
    const test = 'some text'

    function logger(test) {
      console.log(test)
    }
  <script/>
  `;


  Ans!:Answer

  constructor(private _router:Router,
    public questionservice: QuestionService,
    private route:ActivatedRoute,
    public answerservice:AnswerService) { }

  ngOnInit(): void {


    const userData: {
      userName: string,
      id: string,
      role: string,
      _token: string,
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData')||'')  

    this.iduser=userData.id;
    this.id=this.route.snapshot.params['id'];
    this.answer=new Answer(this.idans,'',false,new Date,null)
  
    this.question=new Question(this.id,'','',0,new Date,null,null,null,0,[],'');
    if (this.id != -1) {
      for(let i=0;i<this.question.iduserview.length;i++){
        console.log('fgeuailel')
        if(userData.id!=this.question.iduserview[i]){
          console.log('id')
          this.question.iduserview[i]=userData.id
          this.question.nbViews++
        }
      }
      this.questionservice.retrieveQuestion(this.id)
        .subscribe(
          data => {this.question = data}
          
        )
    
      this.answerservice.getanswers(this.id)
      .subscribe(
        res=>this.answerList=res
      )
    }

  
  }

  addanswer(){

    this.answerservice.addanswer(this.answer,this.iduser,this.id)
    .subscribe(data=>{
      console.log(data)
    window.location.reload()
    })

  }
  resolvedAnswer(id:number){
  //  this.answerservice.getanswerbyid(id).subscribe(
  //   res=>{
  //     this.Ans.resolved=true
  //     console.log(res)}  
  //  )

  }

}
