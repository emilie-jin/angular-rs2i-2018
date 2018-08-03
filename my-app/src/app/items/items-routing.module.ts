import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";

import { AddComponent } from "./components/add/add.component";
import { AddReavtiveComponent } from "./components/add-reavtive/add-reavtive.component";
import { ListComponent } from "./components/list/list.component";
import { LivreesComponent } from "./components/livrees/livrees.component";
import { EditComponent } from "./components/edit/edit.component";
import { AuthGuard } from "../core/services/auth.guard";
import { DetailResolveService } from "../core/services/detail-resolve.service";

const appRoutes: Routes = [
  { path: "add", component: AddComponent },
  {
    path: "add-reactive",
    component: AddReavtiveComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "edit/:id",
    component: EditComponent,
    resolve: {
      item: DetailResolveService
    }
  },
  { path: "list", component: ListComponent },
  { path: "livrees", component: LivreesComponent }
];
@NgModule({
  imports: [RouterModule.forChild(appRoutes)]
})
export class ItemsRoutingModule {}
