import { Router } from "@oak/oak";
import * as controller from "../controllers/tasks.controller.ts";

const router = new Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

router.post("/", controller.create);
router.put("/:id", controller.updateById);

router.delete("/:id", controller.deleteById);

export default router;
