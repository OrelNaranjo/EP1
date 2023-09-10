import { Component, OnInit } from '@angular/core';
import { StateService } from '../service/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  title: string = 'Ingresar al Portal Academico';
  username: string = '';
  password: string = '';
  constructor(private stateService:StateService, private router:Router) { }

  ngOnInit() {
    console.log(this.title);
  }

  login() {
    if (this.stateService.login(this.username, this.password)) {
      this.stateService.setUsername(this.username);
      this.router.navigate(['home']);
      this.stateService.setIsLoggedIn(true);
      this.stateService.setUsername(this.username);
    }
  }

  goHome() {
    this.router.navigate(['home']);
  }

  recuperar() {
    this.router.navigate(['/recuperar']);
  }
}
