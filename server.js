require('dotenv').config();
require('./dbconnect')

const express=require('express')
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const todorouter=require('./routes/user')



app.use('/todo',todorouter)

app.listen(process.env.PORT,()=>{
    console.log(`Server is working at ${process.env.PORT}`);
    
})