import { config } from "dotenv";
config();
import express from 'express'
const app = express()

const PORT = process.env.PORT || 8080

app.get('/',(req,res)=>{
    res.send("Hello from Backend")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})