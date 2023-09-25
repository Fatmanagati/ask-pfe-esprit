import { Component, OnInit } from '@angular/core';
import { Question } from '../question.component';
import { Departement } from '../../departement/departement.component';
import { Technology } from '../../technology/technology.component';
import { Router } from '@angular/router';
import { DepartementService } from 'src/app/service/departement.service';
import { QuestionService } from 'src/app/service/question.service';
import { TechnologyService } from 'src/app/service/technology.service';
declare var hljs: any;
@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  editorConfig={
    base_url:'tinymce',
    suffix:'.min',
    plugins:'lists link image table wordcount code'
  };
  question!:Question
  id!:number
  deps!:Departement[]
  departmentId!: any;
  techs!:Technology[]
  techId!:any
  iduserco!:string
  constructor(public _router:Router,public queservice: QuestionService,public depservice: DepartementService,public techservice:TechnologyService) { }

  ngOnInit(): void {

    const userData: {
      userName: string,
      id: string,
      role: string,
      _token: string,
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData')||'')  

    this.iduserco=userData.id;
    this.question = new Question(this.id,'','',0,new Date(),null,null,null,0,[],'');
        this.depservice.getdeps().subscribe(
      response=>{
        console.log(response);
        this.deps=response
      }
    );
    this.techservice.gettechs().subscribe(
      response=>{
        console.log(response);
        this.techs=response
      }
    )
  }

  addQuestion() {
    if (!this.departmentId || this.departmentId === 0) {
      console.log('Department not selected');
      return;
    }
    console.log(this.departmentId);
    const selectedDepartment = this.deps.find(dep => dep.name === this.departmentId);
    this.question.departement = selectedDepartment || null;
    console.log(this.question.departement.idDepartement);


    if (!this.techId || this.techId === 0) {
      console.log('Technology not selected');
      return;
    }
    console.log(this.techId);
    const selectedTechnology = this.techs.find(tech => tech.name === this.techId);
    this.question.technology = selectedTechnology || null;
    console.log(this.question.technology.idTechnology);
    
    this.queservice.addQuestion(this.question,this.iduserco,this.question.technology?.idTechnology ?? 1, this.question.departement?.idDepartement ?? 1)
      .subscribe(
        response => {
          console.log(response);
          this._router.navigate(['question']);
        },
        error => {
          console.log(error);
        }
      );
  }


}
