import workermodel from "../models/userModel.js"


export default (req, res)=>{

    return res.json({message:`hello ${req.user.email}`});

}