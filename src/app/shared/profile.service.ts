import { Injectable } from '@angular/core';
import { UserProfile } from './user-profile.model';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { BehaviorSubject, throwError} from 'rxjs';
import { catchError , tap} from 'rxjs/operators';

interface AuthResponseData
{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}
interface LoginResponseData
{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registred: boolean;
}
@Injectable({
    providedIn: 'root'
})
export class ProfileDataService
{
    Profile: UserProfile;
    isLogIn =new BehaviorSubject<boolean>(false);
    
    constructor(private http: HttpClient){

    }

    Register(Email :string, password: string)
    {
      return this.http
      .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDCQrmzkpu-6kCHCodyWfXkmgxzeh0md2k',
      {
          email: Email,
          password: password,
          returnSecureToken: true
      });
        
    }
    CreateProfile( userId: string, Email: string, FirstName: string, LastName: string , PhoneNumber: string)
    {
        console.log(userId);
        this.Profile= new UserProfile(userId, Email, FirstName, LastName, PhoneNumber);
    }
    GetProfileData()
    {
        return this.Profile;
    }
    AuthenticateLogin(Email: string, Password: string)
    {
        return this.http
        .post<LoginResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDCQrmzkpu-6kCHCodyWfXkmgxzeh0md2k',
        {
            email: Email,
            password: Password,
            returnSecureToken: true


        })
        .pipe(catchError(this.handleError), tap(resData =>{
            this.isLogIn.next(true);
        }
        ));
    }
    private handleError(errorRes: HttpErrorResponse)
    {
        let errorMessage='An unknown error occured!';
        if(!errorRes.error|| !errorRes.error.error)
        {
            return throwError(errorMessage);
        }
    }
    logout()
    {
        this.isLogIn.next(false);
    }
    userName()
    {
        return "Harmon Singh";
    }
}