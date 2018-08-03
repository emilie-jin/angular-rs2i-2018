import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./login-routing.module";

import { LoginComponent } from "./components/login/login.component";
import { LoginFormComponent } from "../shared/components/login-form/login-form.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, LoginRoutingModule, SharedModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
