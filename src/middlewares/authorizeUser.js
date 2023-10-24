import jwt from "jsonwebtoken"

export default (req, res, next)=>{

    let token = req.headers.authorization.split(" ")[1];


    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err) return res.status(403).json({message:"user can not be authorized"});   

        req.user = user;
        next();
    });
    


    

}

