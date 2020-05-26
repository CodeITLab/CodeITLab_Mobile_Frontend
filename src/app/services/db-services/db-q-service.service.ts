import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizDataModel } from 'src/app/models/quiz-data/quiz-data-model.model';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user/user-model.model';

@Injectable({
  providedIn: 'root'
})
export class DbQServiceService {

  private quizData: Observable<QuizDataModel[]>;
  private quizCollection: AngularFirestoreCollection<QuizDataModel>;

  private userData: Observable<UserModel[]>;
  private userCollection: AngularFirestoreCollection<UserModel>;

  constructor(private firestore: AngularFirestore) {
    this.setQuizData();
  }

  setQuizData() {
    this.quizCollection = this.firestore.collection<QuizDataModel>('QuizData');
    this.quizData = this.quizCollection.snapshotChanges().pipe(
      map(result => {
        return result.map(data => {
          const returnedQuizData = data.payload.doc.data();
          const id = data.payload.doc.id;
          return {id, ...returnedQuizData};
        });
      })
    );
    return this.quizData;
  }
}
