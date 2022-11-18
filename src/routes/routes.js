import { Router } from "express";
import elementController from "../controllers/controller.js";

const router = Router();

router.get("/", elementController.getAll);

router.get("/:id", elementController.getUser);

router.get("/routines/:id", elementController.getRoutines)

router.get("/record/:id", elementController.getRecord)

router.get("/imc/:id", elementController.getImc)

router.patch("/user", elementController.authUser)

router.post("/", elementController.store)


router.post("/routines/:id", elementController.addRoutine)

router.post("/record/:id", elementController.addRecord)

router.delete("/routines/:id", elementController.deleteRoutine)

router.put("/:id", elementController.updateAllRoutines)

router.put("/routines/:id", elementController.updateRoutine)

router.put("/imc/:id", elementController.setImc)

export default router;