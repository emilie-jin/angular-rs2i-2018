import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private collectionService : CollectionService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  public edit(item: Item) : void{
    console.log(item);
    this.collectionService.update(item);
    this.router.navigate(['items/list']);
  }
}
