import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Router } from '@angular/router';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

//module a-z
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
// import { HomeModule } from './home/home.module';
// import { ItemsModule } from './items/items.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//component a-z
import { AppComponent } from './app.component';
import { ItemComponent } from './shared/components/item/item.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    LoginModule,
    // HomeModule,
    AppRoutingModule,
    BrowserModule,
    // ItemsModule,
    PageNotFoundModule,
    NgbModule.forRoot(),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' } ],
  bootstrap: [AppComponent]
})
export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
 }
