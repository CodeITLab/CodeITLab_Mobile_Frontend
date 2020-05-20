import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { OfflineComponentComponent } from './offline-component/offline-component.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [
        HeaderComponent,
        OfflineComponentComponent
    ],
    exports: [
        HeaderComponent,
        OfflineComponentComponent
    ],
    entryComponents: []
})

export class ComponentsModule {}
