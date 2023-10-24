import usermodel from "../models/userModel.js"
import jwt from "jsonwebtoken"

export default (req,res)=>{

    //authentication
    const email = req.body.email;
    const password = req.body.password;

    const found = usermodel.getUser(email);

    if(!found) return res.json({success:"0", message:"no user found"});

    if(found.password === password) {

        // token 
        const accessToken = jwt.sign(found, process.env.ACCESS_TOKEN_SECRET);

        return res.json({success:"1", message:"welcome", accessToken});

    }

    return res.json({success:"0", message:"no user found"});

}