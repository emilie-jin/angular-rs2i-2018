import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//module a-z
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ItemsModule } from './items/items.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//component a-z
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LoginModule,
    PageNotFoundModule,
    SharedModule,
    HomeModule,
    ItemsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
