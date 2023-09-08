import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  user:BehaviorSubject<string> = new BehaviorSubject('');

  get getUser(){
    return this.user.asObservable();
  }

  set setUser(user:string){
    this.user.next(user);
  }
  
  constructor() { }
}
