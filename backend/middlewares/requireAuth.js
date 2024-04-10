require('dotenv').config();

const jwt = require('jsonwebtoken');
const User=require('../models/userModel');

const requireAuth=async(req,res,next)=>{
    const {authorization}=req.headers;

    if(!authorization) return res.status(400).json({error:"Auth failed because authorization is not found in header"});

    const token=authorization.split(' ')[1];

    try{
        const {_id}=jwt.verify(token,process.env.SECRET);
        req.user=await User.findOne({_id}).select('_id');
        next();
    }
    catch(e){
        console.log(e);
        res.status(400).json({error:"Auth failed because validation of token failed"})
    }
}

module.exports=requireAuth;