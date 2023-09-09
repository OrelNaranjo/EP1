import { Component } from '@angular/core';
import { StateService } from '../service/state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username:string = '';
  constructor(private stateService: StateService) {}

  ngOnInit(){
    this.username = this.stateService.getUsername();
    console.log(this.username);
  }
  
}
