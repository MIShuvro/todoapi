const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({
    task:{
        type:String,
        required:[true,'Task required'],
        trim:true
    },
    done:{
        type:Boolean,
        default:false

    },
    
},{timestamps:true})


const Todo=mongoose.model('Todo',todoSchema);

module.exports=Todo