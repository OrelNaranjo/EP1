import { Component } from '@angular/core';
import { StateService } from '../service/state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username:string = '';
  isLoggedIn:boolean = false;
  constructor(private stateService: StateService) {}

  ngOnInit(){
    this.stateService.isLoggedIn.subscribe((value) => {
      this.isLoggedIn = value;
    });

    this.stateService.username.subscribe((value) => {
      this.username = value;
    });
  }
  
}
