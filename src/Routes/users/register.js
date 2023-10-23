import express from "express"

const router = express.Router();

router.post("/",(req, res)=>{

    res.json({success:"1"});

});

export default router;