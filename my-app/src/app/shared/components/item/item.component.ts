import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interfaces/item';
import { State } from '../../enums/state.enum';
import { CollectionService } from '../../../core/services/collection.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item : Item;
  public state = State;
  public states = Object.values(State);
  constructor(private collectionService : CollectionService) { }

  ngOnInit() {
  }

  public changeState(state){
    this.item.state = state;
    //update item in collectionService in database
    this.collectionService.update(this.item);
  }



}
