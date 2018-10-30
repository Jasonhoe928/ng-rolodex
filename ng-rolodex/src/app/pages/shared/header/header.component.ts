import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from
  '../../../services/auth.service';
import { SessionService } from
  '../../../services/session.service';

@Component({
  selector: 'header-page',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  user: object;
  
  constructor(
    private Router: Router,
    private auth: AuthService,
    private session: SessionService
    ) {
      this.user = this.session.getSession();
    }

    isLoggedIn() {
      return this.session.isLoggedIn();
    }

    login() {
      return this.Router.navigate(['/login']);
    }

    logout() {
      return this.auth.logout();
    }

}