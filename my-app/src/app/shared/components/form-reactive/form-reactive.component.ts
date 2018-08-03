import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { State } from "../../enums/state.enum";
import { Item } from "../../interfaces/item";
import { DateService } from "../../../core/services/date.service";

@Component({
  selector: "app-form-reactive",
  templateUrl: "./form-reactive.component.html",
  styleUrls: ["./form-reactive.component.css"]
})
export class FormReactiveComponent implements OnInit {
  public form: FormGroup;
  public states = Object.values(State);
  @Output() nItem: EventEmitter<Item> = new EventEmitter();
  @Input() editItem: Item;
  constructor(private fb: FormBuilder, private dateService: DateService) {}

  ngOnInit() {
    this.createForm();
    console.log(this.editItem);
  }

  private createForm(): void {
    this.form = this.fb.group({
      name: [
        this.editItem ? this.editItem.name : "",
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      reference: [
        this.editItem ? this.editItem.reference : "",
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      state: this.editItem ? this.editItem.state : State.ALIVRER,
      deliveryDate: this.editItem
        ? this.dateService.dateToNgPicker(this.editItem.deliveryDate)
        : ""
    });
  }

  public process(): void {
    this.form
      .get("deliveryDate")
      .setValue(
        this.dateService.dateToIso(this.form.get("deliveryDate").value)
      );
    console.log(this.form.value);
    this.nItem.emit(this.form.value);
    this.form.reset();
    this.form.get("state").setValue(State.ALIVRER);
    // this.router.navigate(['items' , 'list']);
  }

  public isError(attributName: string): boolean {
    return (
      this.form.get(attributName).invalid && this.form.get(attributName).touched
    );
  }
}
