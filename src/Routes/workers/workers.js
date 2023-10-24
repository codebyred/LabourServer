import express from "express"
import workersController from "../../Controllers/workersController.js"

const router = express.Router();

router.get("/",workersController);

export default router;