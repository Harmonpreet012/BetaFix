import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../shared/user-profile.model';
import { ProfileDataService } from '../shared/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: UserProfile;
  constructor(service: ProfileDataService) {
    
    this.profile=service.GetProfileData();
   }

  ngOnInit(): void {
  }

}
