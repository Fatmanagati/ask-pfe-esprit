import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartementService } from 'src/app/service/departement.service';

export class Departement{
  constructor(
    public idDepartement:number,
    public name:string,
  ){}
}

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
isAdmin!:boolean
depList!:Departement[]
departement!:Departement

  constructor(public _router:Router,public depservice: DepartementService) { }

  ngOnInit(): void {
    const userData: {
      userName: string,
      id: string,
      role: string,
      _token: string,
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData')||'')
    if(userData.role==="ADMIN"){
      this.depservice.getdeps().subscribe(
      response => {
        console.log(response);
        this.depList = response;
      }, error =>{
        console.log(error)
      })
    }else{
          this.isAdmin=false;
          // this._router.navigate(['error'])
    } ;
  }
  message = "";
  deleteDep(id: number) {
    console.log(`delete Departement ${id}`);
    this.depservice.deleteDepartement(id).subscribe(
      response => {
        console.log(response);
        this.message = `  departement ${id} deleted successfully `;
        this.depservice.getdeps().subscribe(
          response => {
            console.log(response);
            this.depList = response;
          });
      })
  }

  addDep() {
    this._router.navigate(['departementadd'])
  }
}
