import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsOfflineServiceService {

  private isOffline: BehaviorSubject<boolean>;

  constructor() {
    this.initialStatus();
   }

  initialStatus(): void {
    this.isOffline = new BehaviorSubject<boolean>(false);
  }

  getStatus(): Observable<boolean> {
    return this.isOffline.asObservable();
  }

  isApplicationOffline(offlineStatus): void {
    this.isOffline.next(offlineStatus);
  }
}
