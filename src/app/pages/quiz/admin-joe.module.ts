import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminJoePageRoutingModule } from './admin-joe-routing.module';

import { AdminJoePage } from './admin-joe.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminJoePageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminJoePage]
})
export class AdminJoePageModule {}
