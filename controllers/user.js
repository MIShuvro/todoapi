const Todo=require('../models/user')
module.exports.newtodo=async (req,res,next)=>{
    const todo=new Todo({
        task:req.body.task,
        done:req.body.done
    })
    const newtodo=await todo.save()
    res.json(newtodo)
}

//All todo

module.exports.list=async (req,res)=>{
    
   const alllist=await Todo.find()
   res.send(alllist)
}

//delete Todo

module.exports.deletetodo=async (req,res)=>{
    const {_id}=req.params
    const doc=await Todo.findByIdAndDelete(_id)
    res.json(doc)
}
//Single list
module.exports.singletodo=async (req,res)=>{
    const {_id}=req.params
    const doc=await Todo.findById(_id)
    res.json(doc.createdAt)
}

///update todo
module.exports.upadtetodo=async(req,res)=>{
    
    // const todo=await Todo.findById(req.params._id)
    // todo.task=todo.body.task
    // todo.done=todo.body.done
    // await todo.save()
    // res.send("update Done")
    const update=await Todo.findByIdAndUpdate(req.params._id,{
        $set:{
            task:req.body.task,
            done:req.body.done
        }},{new:true})
    res.json(update)
    
}

// Done True Or False 

module.exports.donestatus=async (req,res)=>{
    const collect=req.query
    
        const doc=await Todo.find({
            done:collect.done
            
        })
        
       res.send(doc)
 }


    //Today...
    module.exports.todayTodo= (req,res)=>{
    console.log("hello");
    
    }





