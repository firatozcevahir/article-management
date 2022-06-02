import { EntityBase } from "./base-models";

export class UserDto extends EntityBase {
  userName: string;
  password: string;
}
