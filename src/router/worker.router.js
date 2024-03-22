import express from "express"
import {getWorkers, getWorker, postWorker, updateWorker, deleteWorker} from "../controller/worker.controller.js";

const router = express.Router();

router.get("/", getWorkers);
router.get("/:id", getWorker);

router.post("/", postWorker);

router.patch("/:id", updateWorker);

router.delete("/:id", deleteWorker);

export default router;