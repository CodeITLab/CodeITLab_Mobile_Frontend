import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserScoreService {

  private userScore: BehaviorSubject<number>;
  private selectedCategoryQuestions: BehaviorSubject<number>;

  constructor() {
    this.setInitialUserScoreValue();
    this.setInitialNumberOfQuestions();
   }

  setInitialUserScoreValue(): void {
    this.userScore = new BehaviorSubject<number>(0);
  }

  setInitialNumberOfQuestions(): void {
    this.selectedCategoryQuestions = new BehaviorSubject<number>(0);
  }

  getUserScoreValue(): Observable<number> {
    return this.userScore.asObservable();
  }

  getNumberOfQuestions(): Observable<number> {
    return this.selectedCategoryQuestions.asObservable();
  }

  updateUserScoreValue(newScoreValue: number): void {
    this.userScore.next(newScoreValue);
  }

  updateNumberOfQuestions(selectedCategoryQuestionsValue: number): void {
    this.selectedCategoryQuestions.next(selectedCategoryQuestionsValue);
  }
}
