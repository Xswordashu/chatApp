
import express from "express";
import routes from "./routes/index.js";
//create express app
const app = express();


app.use("/api/v1", routes);

app.get('/', (req,res)=>{
  res.send("hello from server")
})


export default app;