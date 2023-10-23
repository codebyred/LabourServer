const sesssionChecker = (req, res, next)=>{

    if(!req.session.isAuth) return res.json({success:0, message:'You are not logged in'})

    next();
}



export {sesssionChecker}