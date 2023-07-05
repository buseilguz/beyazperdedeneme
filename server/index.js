import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './Routers/userRouter.js'
import newRouter from './Routers/newRouter.js'
import tvSeriesRouter from './Routers/tvSeriesRouter.js'
import cors from 'cors'



dotenv.config()
const corsOptions = {
    origin: "https://reactapp-frontend.onrender.com" // frontend URI (ReactJS)
}
const app=express()
app.use(cors())
app.use(express.json())
app.use("/users",userRouter)
app.use("/news",newRouter)
app.use('/tvseries',tvSeriesRouter)



app.listen(process.env.PORT ||5000,()=>{ 
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true

    }).then(()=>
        console.log("mongodb connected")
    ).catch((error)=>console.log("bağlantı yok",error))
    console.log("Server is running")
})