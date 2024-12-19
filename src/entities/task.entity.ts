import { BaseEntity } from "./base.entity.ts";

export class Task extends BaseEntity {
  public title: string;
  public description: string;
  public completed: boolean = false;

  constructor(attrs: Partial<Task>) {
    super();

    if (attrs) {
      Object.assign(this, attrs);
    }
  }
}
