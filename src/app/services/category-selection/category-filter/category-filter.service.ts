import { Injectable } from '@angular/core';
import { QuizDataModel } from 'src/app/models/quiz-data/quiz-data-model.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryFilterService {

  filteredData: QuizDataModel[];

  constructor() {
  }

  filterByCategoryName(quizData: QuizDataModel[], categoryName: string) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < quizData.length; i++) {
         this.filteredData = quizData.filter((element) => {
          return element.category === categoryName;
        });
    }
    return this.filteredData;
  }

}
