export abstract class BaseError extends Error {
  public abstract httpCode: number;
  public abstract serialize(): IErrorResp;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, BaseError.prototype);
  }
}

export interface IErrorResp {
  message: string;
  httpCode: number;
  code?: string;
  errors?: Array<{
    message?: string;
    field?: string;
    value?: string | number | boolean;
    constraints?: { [key: string]: string };
  }>;
}
