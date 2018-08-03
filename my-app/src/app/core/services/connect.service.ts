import { Injectable } from "@angular/core";
import { User } from "../../shared/interfaces/user";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, BehaviorSubject } from "rxjs";
import { AngularFirestoreCollection,AngularFirestore } from "angularfire2/firestore";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ConnectService {
  private itemsCollection$: AngularFirestoreCollection<User>;
  public users$ : Observable<User[]>;
  public userConnecte : BehaviorSubject<User> = new BehaviorSubject(null);
  public connextion$ : BehaviorSubject<boolean> = new BehaviorSubject(false);
  public msg : BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(private afs: AngularFirestore, private router : Router) {
  }

  /**
   * connexion
   */

  connect(user: User): void {
    console.log(user);

    this.itemsCollection$ = this.afs.collection<User>("user",ref => ref.where('email', '==', user.email ).where('password', '==', user.password));
    // this.collection = COLLECTION;
    this.users$ = this.itemsCollection$.valueChanges();
    this.users$.subscribe((user)=>{
      if(user.length > 0 ){
        this.connextion$.next(true);
        this.router.navigate(["home"]);
        this.userConnecte.next(user[0]);
      }else{
        this.msg.next('Login ou Mot de passe incorrect !');
      }
    });
  }
}
