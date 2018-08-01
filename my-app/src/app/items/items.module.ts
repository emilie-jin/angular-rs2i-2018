import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItemsRoutingModule } from './items-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './components/list/list.component';
import { LivreesComponent } from './components/livrees/livrees.component';
import { AbstractComponent } from './components/abstract/abstract.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule
  ],
  declarations: [ListComponent, LivreesComponent, AbstractComponent],
  exports:[ListComponent,LivreesComponent]
})
export class ItemsModule { }
