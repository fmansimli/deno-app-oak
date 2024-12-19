import { BaseError, IErrorResp } from "./base.error.ts";

export class ValidationError extends BaseError {
  public httpCode = 400;

  constructor(private errors: any[]) {
    super("Validation Error");

    this.message = "Validation Error";
    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  serialize(): IErrorResp {
    return {
      httpCode: this.httpCode,
      message: this.message,
      errors: this.errors.map((error) => {
        return {
          field: error.property,
          constraints: error.constraints,
          value: error.value,
        };
      }),
    };
  }
}
