import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import New from '../models/newModel.js';



const router=express.Router();

//localhosta yapılan post isteği
router.post("/addnews",async(req,res)=>{
    const {title,content,image,video,date,category,producer}=req.body
    try {
        const news=await  New.create({title,content,image,video,date,category,producer})
        res.status(200).json(news)
    } catch (error) {
        res.status(400).json({error:error.message })
    }})




router.get('/getall',async(req,res)=>{
    const news=await New.find({}).sort({createdAt: -1})
    res.status(200).json(news)
})





router.get('/getnews/:id',async(req,res)=>{
    const {id}=req.params
   
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such news'})
    } 
    const news =await New.findById(id)
    if (!news) {
        return res.status(404).json({error:'No such news'})
    }
    res.status(200).json(news)})


router.delete('/deletenews/:id',async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such news'})
    } 
    const news=await New.findOneAndDelete({_id: id}) 

    if (!news) {
        return res.status(400).json({error:'No such news'})
    }
    res.status(200).json(news)

})



router.patch('/updatenews/:id',async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such news'})
    } 
    const news=await New.findOneAndUpdate({_id: id},{
        ...req.body
    }) 

    if (!news) {
        return res.status(400).json({error:'No such news'})
    }
    res.status(200).json(news)

})

export default router;