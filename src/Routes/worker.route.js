import express from "express"
import {getWorkers, getWorker, postWorker, updateWorker, deleteWorker} from "../Controllers/worker.controller.js";

const router = express.Router();

router.get("/", getWorkers);
router.get("/:email", getWorker);

router.post("/", postWorker);

router.patch("/:id", updateWorker);

router.delete("/:id", deleteWorker);

export default router;