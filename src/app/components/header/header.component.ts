import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  @Input() title: string = '';
  isLogged: boolean = false;
  constructor(private stateService:StateService, private router:Router) { }

  ngOnInit() {
    this.stateService.getIsLoggedIn().subscribe((loggedIn: boolean) => {
      this.isLogged = loggedIn;
    });
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }
  goToHome(){
    this.router.navigate(['/home']);
  }

  logout() {
    this.stateService.logout();
    this.router.navigate(['/home']);
  }

  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }

}
