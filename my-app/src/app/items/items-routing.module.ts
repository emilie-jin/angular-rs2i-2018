import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { LivreesComponent } from './components/livrees/livrees.component';


const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'livrees', component: LivreesComponent }
]
@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ItemsRoutingModule { }
