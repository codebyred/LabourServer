import { Category } from "../model/category.model.js";

export const getCategories = async (req,res)=>{

    const categories = await Category.findAll();

    console.log(categories);

    return res.json(categories);

}

export const getCategory = async (req,res)=>{

    const {id} = req.params;

    try{

        const category = await Category.findAll({
            where:{
                id
            }
            
        });
    
        return res.json(category);

    }catch(e){

        return res.json({msg: "Can not find category"});


    }


}

export const postCategory = async (req, res)=>{

    try{

        const {id, name, description} = await req.body;

        const category = await Category.build({
            id, 
            name,
            description
        });

        await category.save();

        return res.json({success:1, msg: "category successfully saved"})

    }catch(e){

        return res.json({success:0, msg: "category could not be saved"});

    }


}

export const updateCategory = async (req, res)=>{

    const {id} = req.params;

    const {name, description} = req.body;

    try{

        await Category.update({
            name,
            description
        },{
            where:{
                id
            }
        })

        return res.json({success:1, msg: "Category updated successfully"})

    }catch(e){

        return res.json({success:0, msg: "Can not update category"})
        
    }

}

export const deleteCategory = async (req, res)=>{

    const {id} = req.params;

    try{

        const category = await Category.findOne({
            where:{
                id
            }
        });

        if(!category) throw new Error("category not found");

        await category.destroy();

        return res.json({success:1 , msg: "Woker deleted"});

    }catch(e){
        return res.json({success:0, msg: "Can not delete category"});
    }

}