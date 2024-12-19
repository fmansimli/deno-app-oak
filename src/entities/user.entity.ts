import { BaseEntity } from "./base.entity.ts";

export class User extends BaseEntity {
  public name: string;
  public email: string;
  public password: string;

  constructor(public attrs: Partial<User>) {
    super();

    if (attrs) {
      Object.assign(this, attrs);
    }
  }
}
