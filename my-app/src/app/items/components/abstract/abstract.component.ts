import { Component, OnInit, OnDestroy } from "@angular/core";
import { CollectionService } from "../../../core/services/collection.service";
import { Item } from "../../../shared/interfaces/item";
import { Observable } from "rxjs";




@Component({
  selector: "app-abstract",
  templateUrl: "./abstract.component.html",
  styleUrls: ["./abstract.component.css"]
})
export class AbstractComponent implements OnInit, OnDestroy {
  public collection : Observable<Item[]>;
  // public collection: Item[];
  // private sub: Subscription;
  constructor(protected collectionService: CollectionService) {}

  ngOnInit() {
    //copy de reference
    this.collection = this.collectionService.collection;
    //souscription observable
    console.log('ngOnInit parent');
    // this.sub = this.collectionService.collection.subscribe((data) => {
    //   this.collection = data;
    //   console.log("souscription");
    //   console.log(data);
    // },);
    // console.log(this.collection);
    //console.log('abstract');
  }

  ngOnDestroy() : void{
    console.log("unsubscribe");
    // this.sub.unsubscribe;
  }
}
