import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterByStatePipe } from './pipes/filter-by-state.pipe';
import { StateDirective } from './directives/state.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavComponent, ItemComponent, CapitalizePipe, FilterByStatePipe,StateDirective],
  exports: [NavComponent,ItemComponent,FilterByStatePipe]
})
export class SharedModule { }
