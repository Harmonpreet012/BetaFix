import { Component, OnInit } from '@angular/core';
import { NgForm  } from '@angular/forms'
import { QueryDataService } from '../shared/query.service';
import { ProfileDataService } from '../shared/profile.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-queries',
  templateUrl: './add-queries.component.html',
  styleUrls: ['./add-queries.component.css']
})
export class AddQueriesComponent implements OnInit {

  authenticated=false;
  constructor(private service: QueryDataService, private auth: ProfileDataService, private router: Router) {
      auth.isLogIn.subscribe(check=>{
        this.authenticated=check;
      })
      
   }

  ngOnInit(): void {
  }
  addQuery(form :NgForm)
  {
    this.service.AddQuery(1, form.value.queryHeading, form.value.queryDescription, this.auth.userName());
    this.router.navigate(['/viewQuery']);

  }


}
