import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RfpService } from 'src/app/service/rfp.service';

export class rfp{
  constructor(
    public idRFP:number,
    public requirement:string,
    public proposal:string,
    public theme: any
  ){}
}

@Component({
  selector: 'app-rfp',
  templateUrl: './rfp.component.html',
  styleUrls: ['./rfp.component.css']
})
export class RfpComponent implements OnInit {
  isAdmin!:boolean
  rfpList!:rfp[]
 rfp! :rfp
  constructor(public _router:Router,public rfpservice:RfpService) { }

  ngOnInit(): void {
    
    const userData: {
      userName: string,
      id: string,
      role: string,
      _token: string,
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData')||'')


    if(userData.role==="ADMIN"){
      this.rfpservice.getRFP().subscribe(
      response => {
        console.log(response);
        this.rfpList = response;
      }, error =>{
        console.log(error)
      })
    }else{
          this.isAdmin=false;
          // this._router.navigate(['error'])
    } ;
  }

  message = "";
  deleteRFP(id: number) {
    console.log(`delete rfp ${id}`);
    this.rfpservice.deleterfp(id).subscribe(
      response => {
        console.log(response);
        this.message = `  rfp ${id} deleted successfully `;
        this.rfpservice.getRFP().subscribe(
          response => {
            console.log(response);
            this.rfpList = response;
          });
      })
  }

  updateRFP(id: number) {
    
    this._router.navigate(['rfpupdate', id])
  }
  addRFP() {
    this._router.navigate(['rfpadd'])
  }

}
