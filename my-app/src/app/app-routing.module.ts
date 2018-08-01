import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/components/home/home.component';
import { LoginComponent } from './login/components/login/login.component';
import { PageNotFoundComponent } from './page-not-found/containers/page-not-found/page-not-found.component';
import { ListComponent } from './items/components/list/list.component';
import { LivreesComponent } from './items/components/livrees/livrees.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'livrees', component: LivreesComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
