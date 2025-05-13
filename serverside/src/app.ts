import express from "express";
import config from "./config/config";
const app = express();

app.get('/', (req,res)=>{
    res.send('Working');
})

app.listen(config.port, () =>{
    console.log(`Connected Successfully on port ${config.port}`);
})