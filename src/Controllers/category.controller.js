import { Category } from "../models/category.model.js";

export const getCategories = async (req,res)=>{

    const categories = await Category.findAll();
    return res.json(categories);

}