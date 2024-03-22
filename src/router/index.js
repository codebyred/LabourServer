import express from "express";
import categoryRouter from "./category.router.js"
import workerRouter from "./worker.router.js"

const router = express.Router();

//Order path is important
router.use("/worker/category",categoryRouter);

router.use("/worker", workerRouter);



export default router;