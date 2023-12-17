import express from "express"
import {getCategories} from "../Controllers/category.controller.js";

const router = express.Router();

router.get("/",getCategories);

export default router;