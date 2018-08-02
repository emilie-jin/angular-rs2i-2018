import { Pipe, PipeTransform } from "@angular/core";
import { State } from "../enums/state.enum";

@Pipe({
  name: "filterByState"
})
export class FilterByStatePipe implements PipeTransform {
  transform(value?: any, args?: any): any {
    /*
   console.log(value);
   let cmdlivree = [];
   value.forEach(cmd => {
     if(cmd.state == State.LIBREE){
       cmdlivree.push(cmd);
     }
   });
   return cmdlivree;
   */
    if (value) {
      return "LIVREE" === args
        ? value.filter(item => item.state == State.LIVREE)
        : value.filter(item => item.state !== State.LIVREE);
    }
  }
}
