import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auth-form';
  user$ = this.authService.afUser$;
  constructor(
    private authService: AuthService,
  ) {}

  googleLogin() {
    this.authService.googleLogin();
  }

  facebookLogin() {
    this.authService.facebookLogin();
    }

  githubLogin() {
    this.authService.githubLogin();
  }


  logout() {
    this.authService.logout();
  }
}
