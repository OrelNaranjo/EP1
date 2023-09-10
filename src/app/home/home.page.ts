import { Component } from '@angular/core';
import { StateService } from '../service/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: string = 'Portal Academico';
  username:string = '';
  isLoggedIn:boolean = false;
  constructor(private stateService: StateService, private router: Router) {}

  ngOnInit(){
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }

    this.stateService.isLoggedIn.subscribe((value) => {
      this.isLoggedIn = value;
    });

    this.stateService.username.subscribe((value) => {
      this.username = value;
    });
  }
  
}
