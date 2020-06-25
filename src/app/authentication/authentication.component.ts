import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileDataService } from '../shared/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private service: ProfileDataService,private router: Router) {

  }

  ngOnInit(): void {
  }
  Authenticate(form : NgForm)
  {
    this.service.Register(form.value.Email, form.value.Password ).subscribe(logData=>{
      this.service.CreateProfile(logData.localId, form.value.Email, form.value.FirstName, form.value.LastName , form.value.PhoneNumber );
        this.service.AuthenticateLogin(form.value.Email, form.value.password).subscribe(logindata=>{
          this.router.navigate(['/viewProfile']);
        });

    });
    
  }

}
