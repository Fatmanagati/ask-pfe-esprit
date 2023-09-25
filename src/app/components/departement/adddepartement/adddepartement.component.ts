import { Component, OnInit } from '@angular/core';
import { Departement } from '../departement.component';
import { Router } from '@angular/router';
import { DepartementService } from 'src/app/service/departement.service';

@Component({
  selector: 'app-adddepartement',
  templateUrl: './adddepartement.component.html',
  styleUrls: ['./adddepartement.component.css']
})
export class AdddepartementComponent implements OnInit {
  departement!:Departement
  id!:number
  constructor(public _router:Router, public depservice:DepartementService) { }

  ngOnInit(): void {
    this.departement=new Departement(this.id,'');
  }
  addDep(){
    this.depservice.addDepartement(this.departement)
    .subscribe(data=>{
      console.log(data)
      this._router.navigate(['departement'])
    })
  }

}
