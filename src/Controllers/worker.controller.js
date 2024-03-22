import {Worker} from "../models/worker.model.js"

export const getWorkers = async (req,res)=>{

    const {category} = req.query;

    try{

        const workers = category?await Worker.findAll({
            where:{
                category_id:category
            }
            
        }): await Worker.findAll();
    
        return res.json(workers);

    }catch(e){

        return res.json({msg: "Can not retrieve list of workers"});

    }



}

export const getWorker = async (req,res)=>{

    const {email} = req.params;


    try{

        const worker = await Worker.findAll({
            where:{
                email:email
            }
            
        });
    
        return res.json(worker);

    }catch(e){

        return res.json({msg: "Can not find worker"});


    }


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

export const updateWorker = async (req, res)=>{

    const {id} = req.params;
    const {firstName, lastName, email, category_id} = req.body;

    try{

        await Worker.update({
            firstName,
            lastName,
            email,
            category_id
        },{
            where:{
                id
            }
        })

        return res.json({success:1, msg: "Worker updated successfully"})

    }catch(e){

        return res.json({success:0, msg: "Can not update worker"})
        
    }

}

export const deleteWorker = async (req, res)=>{

    const {id} = req.params;

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