import { Item } from "../shared/interfaces/item";
import { State } from "../shared/enums/state.enum";

export const COLLECTION:Item[] = [
  {
    id:'id1234',
    name:'yuzhu',
    reference:'1234',
    deliveryDate:'2018-07-28T22:00:00.000Z',
    state:State.ALIVRER
  },
  {
    id:'id2345',
    name:'léon',
    reference:'2345',
    deliveryDate:'2018-07-29T22:00:00.000Z',
    state:State.ENCOURS
  },
  {
    id:'id3456',
    name:'réda',
    reference:'3456',
    deliveryDate:'2018-07-30T22:00:00.000Z',
    state:State.LIVREE
  }
];
