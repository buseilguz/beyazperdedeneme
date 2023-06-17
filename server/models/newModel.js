import mongoose from "mongoose";


const newsSchema=mongoose.Schema({
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
    date:{
        type:String,
        required: true,
        
    },
    category:{
        type:String,
        required:true,
    
    },
    producer:{
        type: String,
        require:true,
    }

})

export default mongoose.model('News',newsSchema)