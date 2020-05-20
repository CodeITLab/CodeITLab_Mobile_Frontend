import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminJoePage } from './admin-joe.page';

const routes: Routes = [
  {
    path: '',
    component: AdminJoePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminJoePageRoutingModule {}
