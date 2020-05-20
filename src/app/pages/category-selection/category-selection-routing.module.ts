import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorySelectionPage } from './category-selection.page';

const routes: Routes = [
  {
    path: '',
    component: CategorySelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorySelectionPageRoutingModule {}
