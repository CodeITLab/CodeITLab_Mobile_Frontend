import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  navigate: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenuItems();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenuItems() {
    this.navigate = [
      {
        title : 'Home',
        url   : '/',
        icon  : 'home'
      },
      {
        title : 'About',
        url   : '/about',
        icon  : 'chatboxes'
      },
      {
        title : 'Play',
        url   : '/category-selection',
        icon  : 'contacts'
      },
    ]
  }

}
