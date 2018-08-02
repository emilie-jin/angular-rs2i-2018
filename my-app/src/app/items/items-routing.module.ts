import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AddComponent } from './components/add/add.component';
import { AddReavtiveComponent } from './components/add-reavtive/add-reavtive.component';
import { ListComponent } from './components/list/list.component';
import { LivreesComponent } from './components/livrees/livrees.component';


const appRoutes: Routes = [
  { path: 'add', component:  AddComponent},
  { path: 'list', component: ListComponent },
  { path: 'livrees', component: LivreesComponent },
  { path: 'add-reactive', component: AddReavtiveComponent },
]
@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ItemsRoutingModule { }
