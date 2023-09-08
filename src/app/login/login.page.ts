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
    console.log('login');
    console.log(this.username);
    console.log(this.password);
    if (this.username == 'admin' && this.password == 'admin') {
      console.log('Bienvenido');
      this.stateService.setUser = this.username;
      this.router.navigate(['home'])
    }else{
      console.log('Usuario no encontrado');
    }

  }

}
