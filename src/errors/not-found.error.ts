import { BaseError, IErrorResp } from "./base.error.ts";

export class NotFoundError extends BaseError {
  public override httpCode: number = 404;

  public override serialize(): IErrorResp {
    return {
      httpCode: this.httpCode,
      message: this.message,
    };
  }

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
