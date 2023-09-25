import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Role, User } from '../user.component';
import { Departement } from '../../departement/departement.component';
import { DepartementService } from 'src/app/service/departement.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  primaryMode:any;
  modesLabels=[
    Role.ADMIN,
    Role.EMPLOYEE
  ];
  user! :User;
  id!:number;
  deps!:Departement[]
  departmentId!: any;
  confirmPassword!: string;
  selectedRole: Role = Role.ADMIN;
  constructor(public _router:Router,public userservice: UserService,public depservice: DepartementService) { }

  ngOnInit(): void {
    this.user = new User(this.id, '','', '', '',null);
        this.depservice.getdeps().subscribe(
      response=>{
        console.log(response);
        this.deps=response
      }
    );
  }

  addUser() {
    if (!this.departmentId || this.departmentId === 0) {
      console.log('Department not selected');
      return;
    }
    console.log(this.departmentId);
    const selectedDepartment = this.deps.find(dep => dep.name === this.departmentId);
    this.user.departement = selectedDepartment || null;
    console.log(this.user.departement.idDepartement);
    this.user.role = this.selectedRole;
    this.userservice.addUser(this.user, this.user.departement?.idDepartement ?? 1)
      .subscribe(
        response => {
          console.log(response);
          this._router.navigate(['user']);
        },
        error => {
          console.log(error);
        }
      );
  }


  primaryModeChangeHandler(event:any) {
    console.log(this.primaryMode);    
  }
}
