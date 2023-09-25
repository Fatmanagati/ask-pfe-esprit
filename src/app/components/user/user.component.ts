import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Departement } from '../departement/departement.component';
export class User{
  constructor(
    public idUser:number,
    public username:string,
    public password:string,
    public email:string,
    public role :string,
    public departement: any
  ){}
}
export enum Role {
  ADMIN = 'ADMIN',
  EMPLOYEE = 'EMPLOYEE'
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isAdmin!:boolean
  userList!:User[]
  user! :User
  constructor(public _router:Router,public userservice: UserService) { }

  ngOnInit(): void {


    const userData: {
      userName: string,
      id: string,
      role: string,
      _token: string,
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData')||'')


    if(userData.role==="ADMIN"){
      this.userservice.getusers().subscribe(
      response => {
        console.log(response);
        this.userList = response;
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
  deleteUser(id: number) {
    console.log(`delete user ${id}`);
    this.userservice.deleteUser(id).subscribe(
      response => {
        console.log(response);
        this.message = `  user ${id} deleted successfully `;
        this.userservice.getusers().subscribe(
          response => {
            console.log(response);
            this.userList = response;
          });
      })
  }

  updateUser(id: number) {
    
    this._router.navigate(['userupdate', id])
  }
  addUser() {
    this._router.navigate(['useradd'])
  }

}
