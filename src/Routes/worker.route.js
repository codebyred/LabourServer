import express from "express"
import {getWorkers, getWorker} from "../Controllers/worker.controller.js";

const router = express.Router();

router.get("/",getWorkers);
router.get("/:email",getWorker);

export default router;