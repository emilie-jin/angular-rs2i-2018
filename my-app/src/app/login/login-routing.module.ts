import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class LoginRoutingModule { }
