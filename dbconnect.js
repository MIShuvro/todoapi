const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URI,{useNewUrlParser:true})

.then(res=>{
    console.log(`MongoDB is Connected`);
    
})
.catch(error=>{
    console.log(`MongoDB is disconnected`);
    
})