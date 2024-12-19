import { Router } from "@oak/oak";

import v1Router from "./v1.ts";
import usersRouter from "./users.ts";
import tasksRouter from "./tasks.ts";

const router = new Router();

router.use("/", v1Router.routes());

router.use("/users", usersRouter.routes());
router.use("/tasks", tasksRouter.routes());

router.prefix("/api");

export default router;
