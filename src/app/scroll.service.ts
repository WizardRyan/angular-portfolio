import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ScrollService {

  private messageSource = new BehaviorSubject(false);
  public currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeScrolled(scrolled: boolean) {
    this.messageSource.next(scrolled)
    console.log("changed: ", scrolled);
  }

}