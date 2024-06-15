import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose"
//dotenv config
dotenv.config();

//env variables
const PORT = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connection.on("error", (err)=>{
    console.log(`Mongodb connection error ${err}`)
   
})

mongoose.connect(DATABASE_URL).then(
    ()=>console.log("connected to mongodb")
)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}...`)
})

