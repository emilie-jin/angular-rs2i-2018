import { Injectable } from "@angular/core";
import { Item } from "../../shared/interfaces/item";
// import { COLLECTION } from "../collection";

import { HttpClient } from "@angular/common/http";

import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CollectionService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  private _collection: Observable<Item[]>;
  private url_api = 'api.myapp.com/';

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    this.itemsCollection = afs.collection<Item>("collection");
    // this.collection = COLLECTION;
    this.collection = this.itemsCollection.valueChanges();
    // this.collection = this.http.get<Item[]>(`${this.url_api}collection`);
  }

  /**
   * get collection
   */
  get collection(): Observable<Item[]> {
    return this._collection;
  }
  /**
   * set collection
   */
  set collection(col: Observable<Item[]>) {
    this._collection = col;
  }

  /**
   * get one item form collection
   */

  /**
   * add item in collection
   */
  add(item: Item): void {
    item.id = this.afs.createId();
    this.itemsCollection
      .doc(item.id)
      .set(item)
      .catch(error => console.log(error));

      // return this.http.post<Item>(url,itme,option);
  }

  /**
   * update item in collection
   */
  update(item: Item): void {
    this.itemsCollection
      .doc(item.id)
      .update(item)
      .catch(error => console.log(error));
      // return this.http.patch<Item>(url,item,option);
  }

  /**
   * delete item in collection
   */
  delete(item: Item): void {
    this.itemsCollection
      .doc(item.id)
      .delete()
      .catch(error => console.log(error));
  }
}
