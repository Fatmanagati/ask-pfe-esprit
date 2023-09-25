import { Component, OnInit } from '@angular/core';
import { Departement } from '../departement/departement.component';
import { Router } from '@angular/router';
import { TechnologyService } from 'src/app/service/technology.service';
export class Technology{
  constructor(
    public idTechnology:number,
    public name:string
  ){}
}
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  isAdmin!:boolean
  techList!:Technology[]
  tech! :Technology
  constructor(public _router:Router,public techservice: TechnologyService) { }

  ngOnInit(): void {
    const userData: {
      userName: string,
      id: string,
      role: string,
      _token: string,
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData')||'')


    if(userData.role==="ADMIN"){
      this.techservice.gettechs().subscribe(
      response => {
        console.log(response);
        this.techList = response;
      }, error =>{
        console.log(error)
      })
    }else{
          this.isAdmin=false;
          // this._router.navigate(['error'])
    } ;
    // this.userservice.getusers().subscribe(
    //   response=>{
    //     console.log(response);
    //     this.userList=response
    //   }
    // );
  }

  message = "";
  deleteTech(idt: number) {
    console.log(`delete technologie ${idt}`);
    this.techservice.deleteTech(idt).subscribe(
      response => {
        console.log(response);
        this.techservice.gettechs().subscribe(
          response => {
            console.log(response);
            this.techList = response;
          });
      })
  }

  addTech() {
    this._router.navigate(['technologyadd'])
  }

}
