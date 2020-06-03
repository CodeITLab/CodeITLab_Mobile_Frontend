import { Component, OnInit, ViewChild } from '@angular/core';

import { QuizDataModel } from '../../models/quiz-data/quiz-data-model.model';

import { IonSlides, AlertController, ToastController } from '@ionic/angular';

import { GameplayFlowService } from '../../services/gameplay-services/gameplay/gameplay-flow.service';
import { IsOfflineServiceService } from '../../services/gameplay-services/is-application-offline/is-offline-service.service';
import { QuestionAnswerIndexService } from '../../services/gameplay-services/question-answer-index/question-answer-index.service';
import { CategoryFilterService } from '../../services/category-selection/category-filter/category-filter.service';
import { SelectedCategoryService } from '../../services/category-selection/selected-category/selected-category.service';
import { UserScoreService } from 'src/app/services/gameplay-services/user-score/user-score.service';

@Component({
  selector: 'app-admin-joe',
  templateUrl: './admin-joe.page.html',
  styleUrls: ['./admin-joe.page.scss'],
})
export class AdminJoePage implements OnInit {

  selectedCategoryData: QuizDataModel[];

  public isApplicationOfflineStatus: boolean;
  public currentQuestionIndexValue: number;
  public currentAnswerIndexValue: number;

  numberOfQuestions: number;

  public selectedCategory: string;

  userInput: any;

  @ViewChild('mySlider', {static: false}) nextSlide: IonSlides;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    private alertController: AlertController,
    private gameplayService: GameplayFlowService,
    private isOffline: IsOfflineServiceService,
    private questionAnswerIndexService: QuestionAnswerIndexService,
    private categorySelectionService: SelectedCategoryService,
    private categoryFilter: CategoryFilterService,
    private userScore: UserScoreService
    ) { }

  ngOnInit() {
    this.getCurrentQuestionIndexValue();
    this.getCurrentAnswerIndexValue();
    this.getSelectedCategoryValue();
    this.getOfflineStatus();
    this.getSelectedCategoryData();
    this.questionAnswerIndexService.updateQuestionIndexValue(1);
    this.questionAnswerIndexService.updateAnswerIndexValue(0);
    this.userScore.updateUserScoreValue(0);
  }

  // Getters

  getOfflineStatus() {
    this.isOffline.getStatus().subscribe((offlineStatus) => {
      this.isApplicationOfflineStatus = offlineStatus;
    });
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

  getSelectedCategoryData() {
    this.gameplayService.getSelectedCategoryData().subscribe((selectedCategoryData) => {
      if (selectedCategoryData.length !== 0) {
        this.selectedCategoryData = this.categoryFilter.filterByCategoryName(selectedCategoryData, this.selectedCategory);
        const numberOfSelectedQuestions = this.selectedCategoryData.length;
        this.numberOfQuestions = numberOfSelectedQuestions;
        this.userScore.updateNumberOfQuestions(this.numberOfQuestions);
      }
    });
  }

  getSelectedCategoryValue() {
    this.categorySelectionService.getSelectedCategory().subscribe((selectedCategory) => {
      this.selectedCategory = selectedCategory;
    });
  }

  isCorrectAnswer() {
    this.gameplayService.checkAnswer(this.userInput, this.selectedCategoryData, this.nextSlide);
    this.userInput = '';
  }

  whatsThisUserInput(correctAnswer) {
    this.userInput = correctAnswer;
  }

  // Display alert methods

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Clue Box',
      subHeader: '',
      message: '<div class="clue-content">' + this.selectedCategoryData[this.currentAnswerIndexValue].clueContent + '</div>',
      buttons: ['OK']
    });
    await alert.present();
  }

}
