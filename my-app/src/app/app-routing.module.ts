import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'items',
    loadChildren: './items/items.module#ItemsModule',
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        preloadingStrategy: PreloadAllModules,
      } // <-- debugging purposes only
    )
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {}
