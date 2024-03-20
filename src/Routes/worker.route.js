import express from "express"
import {getWorkers, postWorker, getWorker} from "../Controllers/worker.controller.js";

const router = express.Router();

router.get("/",getWorkers);
router.post("/", postWorker);
router.get("/:email",getWorker);

export default router;