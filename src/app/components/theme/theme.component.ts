import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/service/theme.service';

export class Theme{
  constructor(
    public idTheme:number,
    public name:string,
  ){}
}
@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  isAdmin!:boolean
  ThemeList!: Theme[]
  theme!: Theme
  constructor(public _router:Router,public tserv:ThemeService) { }

  ngOnInit(): void {
    const userData: {
      userName: string,
      id: string,
      role: string,
      _token: string,
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData')||'')
    if(userData.role==="ADMIN"){
      this.tserv.getthemes().subscribe(
      response => {
        console.log(response);
        this.ThemeList = response;
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
    console.log(`delete Theme ${id}`);
    this.tserv.deleteTheme(id).subscribe(
      response => {
        console.log(response);
        this.message = `  theme ${id} deleted successfully `;
        this.tserv.getthemes().subscribe(
          response => {
            console.log(response);
            this.ThemeList = response;
          });
      })
  }

  addTheme() {
    this._router.navigate(['themeadd'])
  }

}
