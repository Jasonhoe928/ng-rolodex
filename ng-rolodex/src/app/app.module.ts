import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateContactComponent } from './pages/createContact/createContact.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component'
import { ExistingContactsComponent } from './pages/existingContacts/existingContacts.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateContactComponent,
    HeaderComponent,
    ProfileComponent,
    LoginComponent,
    ExistingContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
