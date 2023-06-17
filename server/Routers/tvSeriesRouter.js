import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import TvSeries from '../models/tvSeriesModel.js';



const router=express.Router();

//localhosta yapılan post isteği
router.post("/addtvseries",async(req,res)=>{
    const {title,content,image,video,views,category}=req.body
    try {
        const tvSeries=await TvSeries.create({title,content,image,video,views,category})
        res.status(200).json(tvSeries)
    } catch (error) {
        res.status(400).json({error:error.message })
    }})




router.get('/getall',async(req,res)=>{
    const tvSeries=await TvSeries.find({}).sort({createdAt: -1})
    res.status(200).json(tvSeries)
})





//router.get('/getnews/:id',async(req,res)=>{
//    const {id}=req.params
 //  
 //   if(!mongoose.Types.ObjectId.isValid(id)){
 //       return res.status(404).json({error:'No such news'})
 //   } 
 //   const news =await New.findById(id)
 //   if (!news) {
  //      return res.status(404).json({error:'No such news'})
 //   }
 //   res.status(200).json(news)})







export default router;