import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './components/question/question.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { IonicModule } from '@ionic/angular';
import { UpdateuserComponent } from './components/user/updateuser/updateuser.component';
import { AdduserComponent } from './components/user/adduser/adduser.component';
import { DepartementComponent } from './components/departement/departement.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { AdddepartementComponent } from './components/departement/adddepartement/adddepartement.component';
import { AddtechnologyComponent } from './components/technology/addtechnology/addtechnology.component';
import { RetrievequestionComponent } from './components/question/retrievequestion/retrievequestion.component';
import { AnswerComponent } from './components/answer/answer.component';
import { AddquestionComponent } from './components/question/addquestion/addquestion.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { ThemeComponent } from './components/theme/theme.component';
import { RfpComponent } from './components/rfp/rfp.component';
import { AddthemeComponent } from './components/theme/addtheme/addtheme.component';
import { AddrfpComponent } from './components/rfp/addrfp/addrfp.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AuthComponent,
    QuestionComponent,
    HeaderComponent,
    FooterComponent,
    UpdateuserComponent,
    AdduserComponent,
    DepartementComponent,
    TechnologyComponent,
    AdddepartementComponent,
    AddtechnologyComponent,
    RetrievequestionComponent,
    AnswerComponent,
    AddquestionComponent,
    ThemeComponent,
    RfpComponent,
    AddthemeComponent,
    AddrfpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    EditorModule
    
    
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS ,
       useClass : AuthInterceptorService, 
       multi : true},
       {
        provide:TINYMCE_SCRIPT_SRC,useValue:'tinymce/tinymce.min.js'
       }
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
