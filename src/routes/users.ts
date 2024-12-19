import { Router } from "@oak/oak";
import * as controller from "../controllers/users.controller.ts";

const router = new Router();

router.get("/", controller.getAll);

export default router;
