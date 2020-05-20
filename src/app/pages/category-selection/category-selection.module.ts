import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorySelectionPageRoutingModule } from './category-selection-routing.module';

import { CategorySelectionPage } from './category-selection.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorySelectionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CategorySelectionPage]
})
export class CategorySelectionPageModule {}
