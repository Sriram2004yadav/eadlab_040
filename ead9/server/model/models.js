const mongoose=require('mongoose')
const mSchema=new mongoose.Schema
({
    StudentName:{
        type:String,
        required:true
    },
    Technology:{
        type:String,
        required:true
    },
    Status:{
        type:Boolean,
        required:true,
        default:false
    }
})
module.exports=new mongoose.model("it",mSchema)