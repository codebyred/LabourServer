import express from "express";
import categoryRoute from "./category.route.js"
import workerRoute from "./worker.route.js"

const router = express.Router();

router.use("/worker",workerRoute);
router.use("/worker-categories",categoryRoute);

export default router;