import express from "express"
import usersController from "../../Controllers/usersController.js";
import authorizeUser from "../../middlewares/authorizeUser.js";

const router = express.Router();

router.get("/", authorizeUser, usersController);

export default router;