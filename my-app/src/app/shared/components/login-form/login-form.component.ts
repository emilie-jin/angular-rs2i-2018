import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { User } from "../../interfaces/user";
import { BehaviorSubject } from "rxjs";
import { ConnectService } from "../../../core/services/connect.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  public loginForm : FormGroup;
  public msg : BehaviorSubject<string>;
  @Output() user: EventEmitter<User> = new EventEmitter();
  constructor(private fb : FormBuilder,private connectService : ConnectService) {
    this.msg = this.connectService.msg;
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() : void{
    this.loginForm = this.fb.group({
      email : ['',Validators.required],
      password : ['',Validators.required]
    });
  }

  public process() : void {
    this.user.emit(this.loginForm.value);
    this.loginForm.reset();
  }

  public isError(attributName: string) : boolean{
    return this.loginForm.get(attributName).invalid && this.loginForm.get(attributName).touched;
  }






}
