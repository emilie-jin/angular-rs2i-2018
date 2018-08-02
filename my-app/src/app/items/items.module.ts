import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



import { ItemsRoutingModule } from './items-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AbstractComponent } from './components/abstract/abstract.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { LivreesComponent } from './components/livrees/livrees.component';
import { AddReavtiveComponent } from './components/add-reavtive/add-reavtive.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule,

  ],
  declarations: [ListComponent, LivreesComponent, AbstractComponent, AddComponent, AddReavtiveComponent,],
  exports:[ListComponent,LivreesComponent]
})
export class ItemsModule { }
