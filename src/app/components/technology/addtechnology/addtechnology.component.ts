import { Component, OnInit } from '@angular/core';
import { Technology } from '../technology.component';
import { Router } from '@angular/router';
import { TechnologyService } from 'src/app/service/technology.service';

@Component({
  selector: 'app-addtechnology',
  templateUrl: './addtechnology.component.html',
  styleUrls: ['./addtechnology.component.css']
})
export class AddtechnologyComponent implements OnInit {

  technology!:Technology
  id!:number
  constructor(public _router:Router,public techservice:TechnologyService) { }

  ngOnInit(): void {
    this.technology=new Technology(this.id,'')
  }

  addTech(){
    this.techservice.addTech(this.technology)
    .subscribe(
      data=>{
        console.log(data)
        this._router.navigate(['technology'])
      }
    )
  }

}
