import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionAnswerIndexService {

  private questionIndexValue: BehaviorSubject<number>;
  private answerIndexValue: BehaviorSubject<number>;

  constructor() {
    this.setQuestionIndexValue();
    this.setAnswerIndexValue();
   }

  setQuestionIndexValue(): void {
    this.questionIndexValue = new BehaviorSubject<number>(1);
  }

  setAnswerIndexValue(): void {
    this.answerIndexValue = new BehaviorSubject<number>(0);
  }

  getQuestionIndexValue(): Observable<number> {
    return this.questionIndexValue.asObservable();
  }

  getAnswerIndexValue(): Observable<number> {
    return this.answerIndexValue.asObservable();
  }

  updateQuestionIndexValue(updatedQuestionIndexValue: number): void {
    this.questionIndexValue.next(updatedQuestionIndexValue);
  }

  updateAnswerIndexValue(updatedAnswerIndexValue: number): void {
    this.answerIndexValue.next(updatedAnswerIndexValue);
  }
 }
