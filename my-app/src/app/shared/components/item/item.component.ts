import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interfaces/item';
import { State } from '../../enums/state.enum';
import { CollectionService } from '../../../core/services/collection.service';


import { faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item : Item;
  public state = State;
  public states = Object.values(State);
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  constructor(private collectionService : CollectionService,private router : Router) { }

  ngOnInit() {
    console.log(this.item);
  }

  public changeState(state){
    this.item.state = state;
    //update item in collectionService in database
    this.collectionService.update(this.item);
    // this.collectionService.update(this.item).subscribe((data)=>{
    //   if(data){
    //     //action ou msg of user
    //     data.state = item.state
    //   }
    // });
  }

  public deleteItem() : void{
    this.collectionService.delete(this.item);
  }

  public modifyItme(item : Item){
    this.router.navigate(['items' , 'edit']);
  }


}
