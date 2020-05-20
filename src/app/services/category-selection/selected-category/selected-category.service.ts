import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedCategoryService {

  private selectedCategory$: BehaviorSubject<string>;

  constructor() {
    this.initialSelectedCategoryValue();
   }

  initialSelectedCategoryValue(): void {
    this.selectedCategory$ = new BehaviorSubject<string>('');
  }

  getSelectedCategory(): Observable<string> {
    return this.selectedCategory$.asObservable();
  }

  setSelectedcategoryValue(selectedCategory: string): void {
    this.selectedCategory$.next(selectedCategory);
  }
}
