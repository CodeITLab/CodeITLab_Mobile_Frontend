import { Component, OnInit } from '@angular/core';
import { QuestionAnswerIndexService } from 'src/app/services/gameplay-services/question-answer-index/question-answer-index.service';
import { UserScoreService } from 'src/app/services/gameplay-services/user-score/user-score.service';

@Component({
  selector: 'app-endgame',
  templateUrl: './endgame.page.html',
  styleUrls: ['./endgame.page.scss'],
})
export class EndgamePage implements OnInit {

  public userScoreValue: number;
  public numberOfQuestions: number;

  constructor(private userScore: UserScoreService) {
   }

  ngOnInit() {
    this.getCurrentUserScore();
    this.getNumberOfQuestions();
  }

  getCurrentUserScore() {
    this.userScore.getUserScoreValue().subscribe((userScoreValue) => {
      this.userScoreValue = userScoreValue;
    });
  }

  getNumberOfQuestions() {
    this.userScore.getNumberOfQuestions().subscribe((numberOfQuestions) => {
      this.numberOfQuestions = numberOfQuestions;
    })
  }

}
