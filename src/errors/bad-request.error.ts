import { BaseError, IErrorResp } from "./base.error.ts";

export class BadRequestError extends BaseError {
  public override httpCode: number = 400;

  public override serialize(): IErrorResp {
    return {
      httpCode: this.httpCode,
      message: this.message,
    };
  }

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}
