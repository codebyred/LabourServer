import express from "express";
import users from "./users.js"
import login from "./login.js"
import register from "./register.js"

const router = express.Router();

router.use("/",users);
router.use("/login",login);
router.use("/register",register);



export default router;