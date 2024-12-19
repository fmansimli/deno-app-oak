import type { RouterContext } from "@oak/oak";

export function getAll(ctx: RouterContext<string>) {
  ctx.response.body = {
    data: { users: [] },
    meta: {
      ip: ctx.request.ip,
      url: ctx.request.url,
    },
  };
}
