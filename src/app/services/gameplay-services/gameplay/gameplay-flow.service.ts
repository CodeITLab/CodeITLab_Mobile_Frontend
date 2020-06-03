import { Injectable } from '@angular/core';
import { QuizDataModel } from 'src/app/models/quiz-data/quiz-data-model.model';

import { ValidAnswerService } from '../../toast-notifications/valid-answer-notification/is-valid-answer.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { DbQServiceService } from '../../db-services/db-q-service.service';
import { CategoryFilterService } from '../../category-selection/category-filter/category-filter.service';
import { IsOfflineServiceService } from '../is-application-offline/is-offline-service.service';
import { QuestionAnswerIndexService } from '../question-answer-index/question-answer-index.service';
import { IonSlides } from '@ionic/angular';
import { SelectedCategoryService } from '../../category-selection/selected-category/selected-category.service';
import { UserModel } from 'src/app/models/user/user-model.model';
import { UserScoreService } from '../user-score/user-score.service';

@Injectable({
  providedIn: 'root'
})
export class GameplayFlowService {

  categoriesData: QuizDataModel[];

  selectedCategoryData: BehaviorSubject<QuizDataModel[]>;

  public currentQuestionIndexValue: number;
  public currentAnswerIndexValue: number;
  public currentUserScore: number;

  constructor(
    private router: Router,
    private databaseService: DbQServiceService,
    private toastNotification: ValidAnswerService,
    private isOffline: IsOfflineServiceService,
    private questionAnswerIndexService: QuestionAnswerIndexService,
    private userScore: UserScoreService
  ) {
    this.initialSelectedCategoryData();
    this.subscribeToQuizData();
    this.getCurrentQuestionIndexValue();
    this.getCurrentAnswerIndexValue();
    this.getCurrentUserScore();
   }

  // Setters

  initialSelectedCategoryData(): void {
    this.selectedCategoryData = new BehaviorSubject<QuizDataModel[]>([]);
  }

  updateSelectedCategoryData(selectedCategoryData: QuizDataModel[]) {
    this.selectedCategoryData.next(selectedCategoryData);
  }

  // Getters

  getSelectedCategoryData(): Observable<QuizDataModel[]> {
    return this.selectedCategoryData.asObservable();
  }

  getCurrentQuestionIndexValue() {
    this.questionAnswerIndexService.getQuestionIndexValue().subscribe((questionIndexValue) => {
      this.currentQuestionIndexValue = questionIndexValue;
    });
  }

  getCurrentAnswerIndexValue() {
    this.questionAnswerIndexService.getAnswerIndexValue().subscribe((answerIndexValue) => {
      this.currentAnswerIndexValue = answerIndexValue;
    });
  }

  getCurrentUserScore() {
    this.userScore.getUserScoreValue().subscribe((userScoreValue) => {
      this.currentUserScore = userScoreValue;
    });
  }

  // Data fetching

  subscribeToQuizData() {
    return this.databaseService.setQuizData().subscribe(result => {
      if (result.length !== 0) {
        this.categoriesData = result;
        this.updateSelectedCategoryData(this.categoriesData);
      } else {
        this.isOffline.isApplicationOffline(true);
      }
    });
  }

  // Gameplay Logic

  checkAnswer(userInputValue: string, categoryName: QuizDataModel[], nextSlide: IonSlides) {
      if (!userInputValue) {
        this.toastNotification.isValidAnswer('Please input your answer.', 'warning');
      } else {
        this.isCorrectAnswer(userInputValue, categoryName, nextSlide);
        this.isEndgame(this.currentQuestionIndexValue, categoryName);
        this.delayNextSlideAfterCorrectAnswer(userInputValue, nextSlide);
      }
  }

  isEndgame(currentQuestionIndexValue: number, quizCategory: QuizDataModel[]) {
    if (currentQuestionIndexValue === quizCategory.length) {
      this.router.navigateByUrl('/endgame');
    }
  }

  isCorrectAnswer(userInput: string, category: QuizDataModel[], nextSlide: IonSlides) {
    if (userInput === category[this.currentAnswerIndexValue].questionData) {
      this.toastNotification.isValidAnswer('Correct answer!', 'success');
      this.userScore.updateUserScoreValue(this.currentUserScore + 1);
    } else {
      this.toastNotification.isValidAnswer('Wrong answer.', 'danger');
    }
  }

  delayNextSlideAfterCorrectAnswer(userInput: string, nextSlide: IonSlides) {
    setTimeout(() => {
      this.incrementQuestionAnswerIndex();
      nextSlide.slideNext();
    }, 500);
  }

  incrementQuestionAnswerIndex() {
    this.questionAnswerIndexService.updateQuestionIndexValue(this.currentQuestionIndexValue + 1);
    this.questionAnswerIndexService.updateAnswerIndexValue(this.currentAnswerIndexValue + 1);
  }

}
