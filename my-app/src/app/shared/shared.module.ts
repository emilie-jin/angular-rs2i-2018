import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';
import { FormComponent } from './components/form/form.component';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterByStatePipe } from './pipes/filter-by-state.pipe';

import { StateDirective } from './directives/state.directive';

import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';


//external librairies
import { IconModule } from '../icon/icon.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    IconModule
  ],
  declarations: [NavComponent, ItemComponent, CapitalizePipe, FilterByStatePipe,StateDirective, FormComponent],
  exports: [NavComponent,ItemComponent,FilterByStatePipe,FormComponent],})
export class SharedModule { }
