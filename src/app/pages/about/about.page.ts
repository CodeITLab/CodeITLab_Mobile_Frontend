import { Component, OnInit, ViewChild } from '@angular/core';

import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  slideOptions = {
    initialSlide: 1,
    speed: 400
  };

  @ViewChild('aboutMeSlider', {static: false}) nextSlide: IonSlides;

  constructor() { }

  ngOnInit() {
  }

  displayNextSlide() {
    this.nextSlide.slideNext();
  }

  displayPreviousSlide() {
    this.nextSlide.slidePrev();
  }

}
