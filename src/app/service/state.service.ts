import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private isLoggedIn: boolean = false;
  private username: string = '';

  login(username: string, password: string): boolean {
    if (username == 'admin' && password == 'admin') {
      this.isLoggedIn = true;
      this.username = username;
      return true;
    }
    return false;
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(username: string) {
    this.username = username;
  }
  constructor() { }
}
