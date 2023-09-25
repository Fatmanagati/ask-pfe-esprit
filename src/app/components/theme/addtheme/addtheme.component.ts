import { Component, OnInit } from '@angular/core';
import { Theme } from '../theme.component';
import { ThemeService } from 'src/app/service/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtheme',
  templateUrl: './addtheme.component.html',
  styleUrls: ['./addtheme.component.css']
})
export class AddthemeComponent implements OnInit {
  
  theme!:Theme
  id!:number
  constructor(public _router:Router,public tserv:ThemeService) { }

  ngOnInit(): void {
    this.theme=new Theme(this.id,'');
  }

  addTheme(){
    this.tserv.addtheme(this.theme)
      .subscribe(data=>{
       console.log(data)
       this._router.navigate(['theme'])
      })
  }
}
