import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import User from '../models/userModel.js';

const router=express.Router();

//localhosta yapılan post isteği
router.post("/signup",async(req,res)=>{
    try{
        console.log(req.body)
        const {fullname,password,correctionPassword,phoneNumber,email}=req.body;
        if(password!==correctionPassword){
            return res.status(400).json({message:"Passwords do not match"})
        }


        const userExist =await User.findOne({email})
        if(userExist)
        return res.status(400).json({message:'User already exists.'})
        const hashedPassword=await bcrypt.hash(password,10)
        const createdUser=await User.create({
            fullname,
            email,
            password:hashedPassword,
            phoneNumber
        })
        return res.status(201).json(createdUser);

    }catch(error){
        console.log(error)
        return res.json({message:"create user failer"})
    }
})
router.post("/signin",async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user =await User.findOne({email})
        if(!user)
        return res.status(400).json( {message: "user does not exist"})


        const isPasswordCorrect=await bcrypt.compare(password,user.password)
        if (!isPasswordCorrect) {
            return res.status(400).json( {message: "Wrong password"})

        }
        return res.status(200).json({user,message:"Authentication successful"})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
})

export default router;