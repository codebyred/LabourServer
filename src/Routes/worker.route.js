import express from "express"
import {getWorkers, getWorker, postWorker, deleteWorker} from "../Controllers/worker.controller.js";

const router = express.Router();

router.get("/", getWorkers);
router.get("/:email", getWorker);
router.post("/", postWorker);
router.delete("/:id", deleteWorker);

export default router;