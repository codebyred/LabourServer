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

export const postWorker = async (req, res)=>{

    try{

        const {id, firstName, lastName, email, password, category_id} = await req.body;

        const worker = await Worker.build({
            id: id, 
            firstName: firstName, 
            lastName: lastName, 
            email: email, 
            password: password, 
            category_id: category_id
        });

        await worker.save();

        return res.json({success:1, msg: "worker successfully saved"})

    }catch(e){

        return res.json({success:0, msg: "worker could not be saved"});

    }


}

export const deleteWorker = async (req, res)=>{

    const {id} = req.params;

    console.log(id);

    try{

        const worker = await Worker.findOne({
            where:{
                id
            }
        });

        if(!worker) throw new Error("worker not found");

        await worker.destroy();

        return res.json({success:1 , msg: "Woker deleted"});

    }catch(e){
        console.log(e);
        return res.json({success:0, msg: "Can not delete worker"});
    }



}