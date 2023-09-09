import { Component, OnInit } from '@angular/core';
import { StateService } from '../service/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';
  constructor(private stateService:StateService, private router:Router) { }

  ngOnInit() {
  }

  login() {
    if (this.stateService.login(this.username, this.password)) {
      this.stateService.setUsername(this.username);
      this.router.navigate(['home']);
    }
  }

  goHome() {
    this.router.navigate(['home']);
  }
}
