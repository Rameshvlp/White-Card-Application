const express = require('express')
const Schema = require('../schema/userSchema')
const CardSchema= require('../schema/userSchema2')
const aadharSchema=require('../schema/userSchema3')
const drivingSchema=require('../schema/userSchema4')
const panSchema=require('../schema/userSchema5')
const voterSchema=require('../schema/userSchema6')
const router = express.Router();
const bcrypt =require("bcryptjs"); 

router.post('/addUser',async(req,res)=>{
    console.log('From the addUser API : ', req.body);

    const user = await new Schema(req.body);
    const result = await user.save();

    if(result){
        res.json({
            message:"Success in Insertion of Data"
        })
    }
    else{
        res.json({
            message:"Failed in Insertion of Data"
        })
    }
}),

router.post('/aadhar',async(req,res)=>{
    console.log('From the addUser API : ', req.body);

    const user = await new voterSchema(req.body);
    const result = await user.save();

    if(result){
        res.json({
            message:"Success in Insertion of Data"
        })
    }
    else{
        res.json({
            message:"Failed in Insertion of Data"
        })
    }
}),

router.post("/aadharvalid",async (req,res)=>{
    console.log('From the addUser API : ', req.body);
    const {name,aadhar} =req.body;

    const user = await aadharSchema.findOne({aadhar });
    if(!user){
      return  res.send({ error:"Invalid aadhar"});
    }
    if(name==user.name){
        // const token =jwt.sign({}, JWT_SECRET);
        if(res.status(201)){
            return res.json({
                status:"ok"});
        }else{
            return res.json({error:"error"});
        }
    }
    res.json({ status:"error",error:"Invalid Aadhar Details"});

}),

router.post("/drivingvalid",async (req,res)=>{
    console.log('From the addUser API : ', req.body);
    const {name,driving} =req.body;

    const user = await drivingSchema.findOne({driving });
    if(!user){
      return  res.send({ error:"Invalid Driving"});
    }
    if(name==user.name){
        // const token =jwt.sign({}, JWT_SECRET);
        if(res.status(201)){
            return res.json({
                status:"ok"});
        }else{
            return res.json({error:"error"});
        }
    }
    res.json({ status:"error",error:"Invalid Driving Details"});

}),

router.post("/panvalid",async (req,res)=>{
    console.log('From the addUser API : ', req.body);
    const {name,pan} =req.body;

    const user = await panSchema.findOne({pan });
    if(!user){
      return  res.send({ error:"Invalid Pan"});
    }
    if(name==user.name){
        // const token =jwt.sign({}, JWT_SECRET);
        if(res.status(201)){
            return res.json({
                status:"ok"});
        }else{
            return res.json({error:"error"});
        }
    }
    res.json({ status:"error",error:"Invalid Pan Details"});

}),

router.post("/votervalid",async (req,res)=>{
    console.log('From the addUser API : ', req.body);
    const {name,voter} =req.body;

    const user = await voterSchema.findOne({voter });
    if(!user){
      return  res.send({ error:"Invalid Voter ID"});
    }
    if(name==user.name){
        // const token =jwt.sign({}, JWT_SECRET);
        if(res.status(201)){
            return res.json({
                status:"ok"});
        }else{
            return res.json({error:"error"});
        }
    }
    res.json({ status:"error",error:"Invalid Voter ID Details"});

}),

router.post('/card',async(req,res)=>{
    const {name} =req.body;
    console.log('From the addUser API : ', req.body);
    const cuser = await Schema.findOne({name });
    if(!cuser){
      return  res.send({ error:"User Not Found "});
    }
    const user = await new CardSchema(req.body);
    const result = await user.save();

    if(result){
        res.json({
            message:"Success in Insertion of Data"
        })
    }
    else{
        res.json({
            message:"Failed in Insertion of Data"
        })
    }
}),

router.get('/getAllUser',async(req,res)=>{
    console.log('From the getAllUser API : ', req.body);

    const user = await Schema.find();

    if(user){
        res.json({
            user
        })
    }
    else{
        res.json({
            message:"Failed to Fetch all users Data"
        })
    }
}),

router.post('/getUser',async(req,res)=>{
    console.log('From the getUser API : ', req.body);
    
    const user = await Schema.findOne(req.body);

    if(user){
        res.json({
            user
        })
    }
    else{
        res.json({
            message:"Failed to Fetch required User Data"
        })
    }
}),

router.post("/login-user",async (req,res)=>{
    const {name,email,password} =req.body;

    const user = await Schema.findOne({email });
    if(!user){
      return  res.send({ error:"User Not Found "});
    }
    if(name==user.name && password==user.password){
        // const token =jwt.sign({}, JWT_SECRET);
        if(res.status(201)){
            return res.json({
                status:"ok"});
        }else{
            return res.json({error:"error"});
        }
    }
    res.json({ status:"error",error:"Invalid Password"});

}),

router.patch('/update',async(req, res)=>{
    console.log('From the Update API : ', req.body);

    const mail = req.body.email;
    const pass = req.body.password;

    const result = await Schema.updateOne(
        {
            email: mail
        },
        {
            $set:{
                password: pass
            }
        }
    )
    if(result){
        res.json({
            message:"Successfull in Updation of Data"
        })
    }
    else{
        res.json({
            message:"Failed in Updation of Data"
        })
    }
}),

router.delete('/deleteAll', async(req, res)=>{
    console.log('From the deleteAll API : ', req.body);

    const result = await Schema.deleteMany();

    if(result){
        res.json({
            message:"Successfull in Deletion of All Data"
        })
    }
    else{
        res.json({
            message:"Failed in Deletion of All Data"
        })
    }
}),

router.post('/deleteUser',async(req,res)=>{
    console.log('From the deleteUser API : ', req.body);

    const mail = req.body.email;
    console.log(mail);
    const result = await Schema.deleteOne({
        email:mail
    })

    if(result){
        res.json({
            message:"Successfull in Deletion of Data"
        })
    }
    else{
        res.json({
            message:"Failed in Deletion of Data"
        })
    }
})

module.exports = router