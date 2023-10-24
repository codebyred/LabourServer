import workerModel from "../models/workerModel.js"

export default (req,res)=>{

    let workers = workerModel.getWorkers(req.query.start, req.query.end);

    return res.json(workers);

}