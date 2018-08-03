import { Login } from "./login";

export interface User extends Login {
  id: string;
  firstName : string;
  lastName : string;
}
