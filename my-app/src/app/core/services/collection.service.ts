import { Injectable } from "@angular/core";
import { Item } from "../../shared/interfaces/item";
import { COLLECTION } from "../collection";

@Injectable({
  providedIn: "root"
})
export class CollectionService {
  private _collection: Item[];
  constructor() {
    this.collection = COLLECTION;
  }

  /**
   * get collection
   */
  get collection(): Item[] {
    return this._collection;
  }
  /**
   * set collection
   */
  set collection(col: Item[]) {
    this._collection = col;
  }

  /**
   * get one item form collection
   */

  /**
   * add one item form collection
   */
  public add(item: Item): void {
    this.collection.push(item);
  }
  /**
   * update item in collection
   */
  public update(item: Item): void {
    //update et catch les erreur
  }
  /**
   * delete item in collection
   */
}
