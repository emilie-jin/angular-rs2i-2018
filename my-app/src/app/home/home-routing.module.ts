import { NgModule } from '@angular/core';

import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }
]
@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class HomeRoutingModule { }
