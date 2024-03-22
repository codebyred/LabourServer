import express from "express"
import {getCategories, getCategory, postCategory, deleteCategory} from "../controller/category.controller.js";

const router = express.Router();

router.get("/",getCategories);
router.get("/:id", getCategory);

router.post("/", postCategory);

router.delete("/:id", deleteCategory);

export default router;