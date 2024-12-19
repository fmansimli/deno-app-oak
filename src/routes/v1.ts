import { Router } from "@oak/oak";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = ctx.request.url;
});

export default router;
