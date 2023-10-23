import express from "express";
import workers from "./workers/index.js"
import users from "./users/index.js"

const router = express.Router();

router.use("/users",users);
router.use("/workers",workers);

export default router;