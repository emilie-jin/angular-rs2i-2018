import { Component, OnInit } from "@angular/core";
import { CollectionService } from "../../../core/services/collection.service";
import { Item } from "../../../shared/interfaces/item";
import { AbstractComponent } from "../abstract/abstract.component";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent extends AbstractComponent
  implements OnInit {
  constructor(collectionService: CollectionService) {
    super(collectionService);
    super.ngOnInit();
  }

  ngOnInit() {

    //copy de reference
    //this.collection = this.collectionService.collection;
    // super.ngOnInit();
    //console.log('list');
  }

}
