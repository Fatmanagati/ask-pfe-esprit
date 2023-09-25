import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { QuestionComponent } from './components/question/question.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './auth/auth.guard';
import { AdduserComponent } from './components/user/adduser/adduser.component';
import { UpdateuserComponent } from './components/user/updateuser/updateuser.component';
import { DepartementComponent } from './components/departement/departement.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { AdddepartementComponent } from './components/departement/adddepartement/adddepartement.component';
import { AddtechnologyComponent } from './components/technology/addtechnology/addtechnology.component';
import { RetrievequestionComponent } from './components/question/retrievequestion/retrievequestion.component';
import { AddquestionComponent } from './components/question/addquestion/addquestion.component';
import { ThemeComponent } from './components/theme/theme.component';
import { AddthemeComponent } from './components/theme/addtheme/addtheme.component';
import { RfpComponent } from './components/rfp/rfp.component';
import { AddrfpComponent } from './components/rfp/addrfp/addrfp.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:"login",component:AuthComponent},
  {path:"home",component:QuestionComponent,canActivate : [AuthGuard]},
  {path:"user",component:UserComponent,canActivate : [AuthGuard]},
  {path:"useradd",component:AdduserComponent,canActivate : [AuthGuard]},
  {path:"userupdate/:id",component:UpdateuserComponent,canActivate : [AuthGuard]},
  {path:"departement",component:DepartementComponent,canActivate:[AuthGuard]},
  {path:"technology",component:TechnologyComponent,canActivate:[AuthGuard]},
  {path:"departementadd",component:AdddepartementComponent,canActivate:[AuthGuard]},
  {path:"technologyadd",component:AddtechnologyComponent,canActivate:[AuthGuard]},
  {path:"question",component:QuestionComponent,canActivate:[AuthGuard]},
  {path:"questionretrieve/:id",component:RetrievequestionComponent,canActivate:[AuthGuard]},
  {path:"questionadd",component:AddquestionComponent,canActivate:[AuthGuard]},
  {path:"theme",component:ThemeComponent,canActivate:[AuthGuard]},
  {path:"themeadd",component:AddthemeComponent,canActivate:[AuthGuard]},
  {path:"rfp",component:RfpComponent,canActivate:[AuthGuard]},
  {path:"rfpadd",component:AddrfpComponent,canActivate:[AuthGuard]}

];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
