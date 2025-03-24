import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private inputClanId = new BehaviorSubject<string>('');
  inputClanIdValue$ = this.inputClanId.asObservable();

  updateClanIdValue(value: string): void {
    this.inputClanId.next(value);
  }
}
