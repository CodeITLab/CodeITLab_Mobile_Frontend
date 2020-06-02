import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserScoreService {

  private userScore: BehaviorSubject<number>;

  constructor() { }

  setInitialUserScoreValue(): void {
    this.userScore = new BehaviorSubject<number>(0);
  }

  getUserScoreValue(): Observable<number> {
    return this.userScore.asObservable();
  }

  updateUserScoreValue(newScoreValue: number): void {
    this.userScore.next(newScoreValue);
  }
}
