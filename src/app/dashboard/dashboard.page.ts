import { Component, OnInit } from '@angular/core';
import { StateService } from '../service/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  title: string = 'Panel de Alumno';
  username:string = '';

  constructor(private stateService:StateService, private router:Router) { }

  ngOnInit() {

    if (this.stateService.isLoggedIn) {
      this.stateService.username.subscribe((value) => {
        this.username = value;
      });
    }
    else
    {
      this.router.navigate(['home']);
    }
  }

}
