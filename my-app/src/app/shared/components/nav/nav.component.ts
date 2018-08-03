import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../../../core/services/connect.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public title = "My Super App!";
  public isCollapsed = true;
  public connextion : BehaviorSubject<boolean>;
  public user : BehaviorSubject<User>;

  constructor(private connectService : ConnectService,private router : Router) { }

  ngOnInit() {
    this.connextion = this.connectService.connextion$;
    this.user = this.connectService.userConnecte;
  }

  public logout() :void{
    this.connectService.connextion$.next(false);
    this.router.navigate(['login']);
  }
}
