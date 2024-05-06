import express from "express";
import workerRouter from "./worker/index.js"

const router = express.Router();


router.use("/worker", workerRouter);


export default router;