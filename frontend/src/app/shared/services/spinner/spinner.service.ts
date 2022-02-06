import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private isLoading = new BehaviorSubject<boolean>(false);

  constructor() { 

   }
   getSpinnerObserver(): Observable<boolean>{
     return this.isLoading.asObservable();
   }

   requestStarted(){
     this.isLoading.next(true);
   }

   requestEnded(){
     this.isLoading.next(false);
   }
}
