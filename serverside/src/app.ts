import express , {Express} from "express";
import config from "./config/config";
import { PrismaClient } from "@prisma/client";

const app:Express = express();
export const prismaClient = new PrismaClient({
    log:['query']
});
app.get('/', (req,res)=>{
    res.send('Working');
})

app.listen(config.port, () =>{
    console.log(`Connected Successfully on port ${config.port}`);
})