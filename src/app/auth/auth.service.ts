import { Injectable } from '@angular/core';
import { UserStored } from './user-stored';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<UserStored| null>(null);
  private tokenExpirationTimer: any;
  constructor(private http: HttpClient, private router: Router) { }
  login(username: string, password: string) {
    return this.http.post('http://localhost:8080/PFE/user/login', {
      username: username,
      password: password,
    }, {
      observe: 'response'
    }).pipe(catchError(errorRes => {
      console.log(username,password)
      let errorMessage='authentification failed'
      return throwError(errorMessage)
    })
      , tap(resData => {

        console.log(resData.headers.get('authorization'));
        console.log(resData.headers.get('id'));
        console.log(resData.headers.get('role'));
        console.log(resData.headers);
        const expirationDate = new Date(new Date().getTime() + 3600000*5);
        console.log(expirationDate)
        const user = new UserStored(username,resData.headers.get('id')||'',resData.headers.get('role')||'', resData.headers.get('authorization')||'', expirationDate);
        // const expirationDate = new Date(new Date().getTime() + 3600000)
        // const user = new UserStored(username,token.toString(),expirationDate)
        //  const user = new UserStored(email , "resData.headers.get('role')",resData.headers.get('role'),resData.headers.get('authorization'),expirationDate)
          this.user.next(user);
          console.log(this.user)
          this.autoLogout(3600000);
           localStorage.setItem('userData',JSON.stringify(user))

      })
    )
  }
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if (!errorRes.error || errorRes.error.error) {
      return throwError(errorMessage);
    }
    return throwError(errorMessage);
  }

  logout() {
      this.user.next(null);
      this.router.navigate(['/login'])
      localStorage.removeItem('userData')
      if(this.tokenExpirationTimer) {
          clearTimeout(this.tokenExpirationTimer)
      }
      this.tokenExpirationTimer=null
  }

  autoLogout(expirationDuration : number) {
      console.log(expirationDuration)
    this.tokenExpirationTimer= setTimeout(() => {
         this.logout()
     },expirationDuration)
  }

  autoLogin() {
   const userData : {
    username : string,
       id:string,
       role:string,
       _token:string,
       _tokenExpirationDate:string;
   }=  JSON.parse(localStorage.getItem('userData')!)
   if(!userData) {
       return;
   }
   const loadedUser = new UserStored(userData.username,userData.id,userData.role,userData._token,new Date(userData._tokenExpirationDate))

   if(loadedUser.token) {
       this.user.next(loadedUser);
       const expirationDuration =new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()
       this.autoLogout(expirationDuration)
   }
  }
}
