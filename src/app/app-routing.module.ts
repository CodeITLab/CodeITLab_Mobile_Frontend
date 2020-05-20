import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'endgame',
    loadChildren: () => import('./pages/endgame/endgame.module').then( m => m.EndgamePageModule)
  },
  {
    path: 'category-selection',
    loadChildren: () => import('./pages/category-selection/category-selection.module').then( m => m.CategorySelectionPageModule)
  },
  {
    path: 'admin-joe',
    loadChildren: () => import('./pages/quiz/admin-joe.module').then( m => m.AdminJoePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
