import { Component, OnInit } from "@angular/core";
import { User } from "../../../shared/interfaces/user";
import { ConnectService } from "../../../core/services/connect.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public msg: string;
  private userConnect: Observable<User[]>;
  private error = "Login ou Mot de passe incorrect ! ";

  constructor(
    private connectService: ConnectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

  }

  public connect(user: User): void {
    console.log(user);
    this.connectService.connect(user);
  }


}
