import { config } from "dotenv";
config();
import express from 'express'
import authRouter from './routes/authRouter.js'
import connectToDB from "./model/db_connection.js";
const app = express()
connectToDB()

const PORT = process.env.PORT || 8080

app.get('/',(req,res)=>{
    res.send("Hello from Backend")
})

app.use('/auth',authRouter)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})