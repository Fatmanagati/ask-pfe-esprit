import { Component, OnInit } from '@angular/core';

export class Answer{
  constructor(
    public idAnswer:number,
    public text:string,
    public resolved:boolean,
    public dateAswer :Date,
    public user: any
  ){

  }
}
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
