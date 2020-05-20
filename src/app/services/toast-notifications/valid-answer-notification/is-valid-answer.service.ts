import { Injectable } from '@angular/core';

import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ValidAnswerService {

  constructor(public toastController: ToastController) { }

  async isValidAnswer(toastMessage, toastColor) {
    const toast = await this.toastController.create({
      message: toastMessage,
      duration: 2000,
      position: 'bottom',
      color: toastColor,
      buttons: [
        {
          side: 'end',
          icon: 'close-circle-outline'
        }
      ]
    });
    toast.present();
  }
}
