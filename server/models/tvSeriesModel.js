import mongoose from "mongoose";


const tvSeriesSchema=mongoose.Schema({
    title:{
        type:String,
        required: true,
       
    },
    content:{
        type:String,
        required: true,
        
    }, 
    image:{
        type:String,
        required: true,
      
    },
    video:{
        type:String,
        
    },
    views:{
        type:Number,
        required: true,
        
    },
    category:{
        type:String,
        required:true,
    
    },
    

})

export default mongoose.model('TvSeries',tvSeriesSchema)