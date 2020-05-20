import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndgamePage } from './endgame.page';

const routes: Routes = [
  {
    path: '',
    component: EndgamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndgamePageRoutingModule {}
