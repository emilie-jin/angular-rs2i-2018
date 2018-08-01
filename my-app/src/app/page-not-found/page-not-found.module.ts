import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    AppRoutingModule
  ],
  declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
