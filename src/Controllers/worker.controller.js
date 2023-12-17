import {Worker} from "../models/worker.model.js"

export const getWorkers = async (req,res)=>{

    const {category} = req.query;

    const workers = category?await Worker.findAll({
        where:{
            category_id:category
        }
        
    }): await Worker.findAll();

    res.json(workers);

}

export const getWorker = async (req,res)=>{

    const {email} = req.params;

    const worker = await Worker.findAll({
        where:{
            email:email
        }
        
    });

    res.json(worker);


}