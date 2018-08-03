import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public editItem : Item;

  constructor(
    private collectionService : CollectionService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute);
    console.log(this.router);
    this.activatedRoute.data.subscribe((cmd)=>{
      this.editItem = cmd['item'];
      console.log(this.editItem);
    })
  }

  public edit(item: Item) : void{
    console.log(item);
    this.collectionService.update(item);
    this.router.navigate(['items/list']);
  }
}
