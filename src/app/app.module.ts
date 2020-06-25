import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQueriesComponent } from './add-queries/add-queries.component';
import { ViewQueriesComponent } from './view-queries/view-queries.component';
import { FormsModule } from '@angular/forms'
import { QueryDataService } from './shared/query.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDataService } from './shared/profile.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    AddQueriesComponent,
    ViewQueriesComponent,
    ProfileComponent,
    AuthenticationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    
  ],
  providers: [QueryDataService, ProfileDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
