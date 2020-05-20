import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndgamePageRoutingModule } from './endgame-routing.module';

import { EndgamePage } from './endgame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndgamePageRoutingModule
  ],
  declarations: [EndgamePage]
})
export class EndgamePageModule {}
