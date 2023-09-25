import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RfpService } from 'src/app/service/rfp.service';
import { ThemeService } from 'src/app/service/theme.service';
import { rfp } from '../rfp.component';
import { Theme } from '../../theme/theme.component';

@Component({
  selector: 'app-addrfp',
  templateUrl: './addrfp.component.html',
  styleUrls: ['./addrfp.component.css']
})
export class AddrfpComponent implements OnInit {

  rfp!:rfp
  id!:number
  themes!:Theme[]
  themeId!:any

  constructor(public _router:Router,public rfpservie:RfpService,public themeservice:ThemeService) { }

  ngOnInit(): void {
    const userData: {
      userName: string,
      id: string,
      role: string,
      _token: string,
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData')||'')  
    this.rfp = new rfp(this.id,'','',null);
        this.themeservice.getthemes().subscribe(
      response=>{
        console.log(response);
        this.themes=response
      }
    );
  }

  addRFP() {
    if (!this.themeId || this.themeId === 0) {
      console.log('theme not selected');
      return;
    }
    console.log(this.themeId);
    const selectedTheme = this.themes.find(t => t.name === this.themeId);
    this.rfp.theme = selectedTheme || null;
    console.log(this.rfp.theme.idTheme);
    this.rfpservie.addrfp(this.rfp,this.rfp.theme?.idTheme ?? 1)
      .subscribe(
        response => {
          console.log(response);
          this._router.navigate(['rfp']);
        },
        error => {
          console.log(error);
        }
      );
  }

}
