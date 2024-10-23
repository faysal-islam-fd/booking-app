
import express, {Request,Response} from 'express'
import cors from 'cors' 
import 'dotenv/config'
import mongoose from 'mongoose'


mongoose.connect(`${process.env.MONGO_URI}`)


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/api',(req: Request,res,Response)=>{
    res.json({message:"api end point hitting.."})
})



app.listen(5000,()=>{
    console.log("server running");
    
})