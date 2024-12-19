import type { Middleware } from "@oak/oak";
import { BaseError } from "../errors/base.error.ts";

export const catch404: Middleware = (ctx) => {
  ctx.response.status = 404;
  ctx.response.body = {
    message: "Route Not Found",
    httpCode: 404,
  };
};

export const catchError: Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (err: any) {
    if (err instanceof BaseError) {
      ctx.response.status = err.httpCode;
      ctx.response.body = err.serialize();
    } else {
      ctx.response.status = 500;
      ctx.response.body = {
        message: err.message,
        httpCode: 500,
      };
    }
  }
};
