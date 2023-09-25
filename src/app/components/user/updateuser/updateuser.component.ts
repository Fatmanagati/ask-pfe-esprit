import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Role, User } from '../user.component';
import { Departement } from '../../departement/departement.component';
import { DepartementService } from 'src/app/service/departement.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  id!: number;
  user!: User;
  deps!:Departement[]
  departmentId!: any;
  confirmPassword!: string;
  selectedRole: Role = Role.ADMIN;
  modesLabels=[
    Role.ADMIN,
    Role.EMPLOYEE
  ];
  constructor(private _router: Router,
    public userservice: UserService,
    private route: ActivatedRoute,public depservice: DepartementService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.user = new User(this.id,'' ,'', '', '',null);
    if (this.id != -1) {
      this.userservice.retrieveUser(this.id)
        .subscribe(
          data => this.user = data
        )
    }
    this.depservice.getdeps().subscribe(
      response=>{
        console.log(response);
        this.deps=response
      }
    );
  }

  updateUser() {
    //update user
    this.userservice.updateUser(this.id, this.user)
      .subscribe(
        data => {
          console.log(data)
          this._router.navigate(['user'])
        }
      )

  }

}
