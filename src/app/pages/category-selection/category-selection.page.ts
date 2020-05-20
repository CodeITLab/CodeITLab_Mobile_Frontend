import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { SelectedCategoryService } from '../../services/category-selection/selected-category/selected-category.service';
import { GameplayFlowService } from '../../services/gameplay-services/gameplay/gameplay-flow.service';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.page.html',
  styleUrls: ['./category-selection.page.scss'],
})
export class CategorySelectionPage implements OnInit {

  selectedCategoryIndex: string;

  slideOptions = {
    initialSlide: 1,
    speed: 400
  };

  @ViewChild('categorySelectionSlider', {static: false}) nextSlide: IonSlides;

  constructor(
    private gameplayService: SelectedCategoryService
  ) { }

  ngOnInit() {
  }

  displayNextSlide() {
    this.nextSlide.slideNext();
  }

  displayPreviousSlide() {
    this.nextSlide.slidePrev();
  }

  setSelectedCategoryIndex(categoryIndex: string) {
    this.selectedCategoryIndex = categoryIndex;
    this.gameplayService.setSelectedcategoryValue(this.selectedCategoryIndex);
  }

}
