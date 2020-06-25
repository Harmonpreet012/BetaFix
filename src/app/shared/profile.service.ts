import { Injectable } from '@angular/core';
import { UserProfile } from './user-profile.model';
import { HttpClient, HttpErrorResponse} from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})
interface AuthResponseData
{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registred: boolean;
}
export class ProfileDataService
{
    Profile: UserProfile;
    
    constructor(private http: HttpClient){

    }

    CreateProfile(Email :string, password: string, FirstName: string,LastName: string,PhoneNumber: number)
    {
      var ex=this.http
      .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDCQrmzkpu-6kCHCodyWfXkmgxzeh0md2k',
      {
          email: Email,
          password: password,
          returnSecureToken: true
      });

        this.Profile= new UserProfile(ex.localId, Email, FirstName, LastName, PhoneNumber);
        
    }
    GetProfileData()
    {
        return this.Profile;
    }
    AuthenticateLogin(email: string, password: string)
    {

    }
}