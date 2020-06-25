import { Component, OnInit } from '@angular/core';
import { UserProfile } from './shared/user-profile.model';
import { ProfileDataService } from './shared/profile.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  authenticated=false;
  title = 'BetaFix';

  constructor(private service: ProfileDataService){
    service.isLogIn.subscribe(check=>{
      this.authenticated=!check? false: true;
    })

  }
  ngOnInit()
  {
    
  }
  logOut()
  {
    this.service.logout();
  }

  
}
