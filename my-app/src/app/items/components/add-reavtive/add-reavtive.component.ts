import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Router } from '@angular/router';
import { Item } from '../../../shared/interfaces/item';
import { DateService } from '../../../core/services/date.service';

@Component({
  selector: 'app-add-reavtive',
  templateUrl: './add-reavtive.component.html',
  styleUrls: ['./add-reavtive.component.css']
})
export class AddReavtiveComponent implements OnInit {

  constructor(
    private collectionService : CollectionService,
    private router : Router,
    private dateService : DateService
  ) { }

  ngOnInit() {
  }

  public add(item: Item) : void{
    console.log(item);

    this.collectionService.add(item);
    this.router.navigate(['items/list']);
  }

}
