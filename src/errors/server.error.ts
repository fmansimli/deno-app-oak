import { BaseError, IErrorResp } from "./base.error.ts";

export class ServerError extends BaseError {
  public override httpCode: number = 500;

  public override serialize(): IErrorResp {
    return {
      httpCode: this.httpCode,
      message: this.message,
    };
  }

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, ServerError.prototype);
  }
}
