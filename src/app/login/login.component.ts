import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileDataService } from '../shared/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService: ProfileDataService, private router: Router) { }

  ngOnInit(): void {
  }
  Login(form: NgForm)
  {
    var email=form.value.Email;
    var password= form.value.Password;
    this.AuthService.AuthenticateLogin(email, password).subscribe(logData=>{
      this.router.navigate(['/viewProfile']);

    });

    
  }

}
