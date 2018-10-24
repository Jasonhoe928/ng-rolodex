import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import { CreateContactComponent } from './pages/createContact/createContact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { ExistingContactsComponent } from './pages/existingContacts/existingContacts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'createContact', component: CreateContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'existingContacts', component: ExistingContactsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
