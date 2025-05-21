import express, { Express, Request, Response } from 'express';
import config from './config/config';
import { PrismaClient } from '@prisma/client';
import rootRouter from './routes/rootRouter';
import { authenticateToken } from './middlewares/authmiddleware';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app: Express = express();
const corsOptions ={
    origin:process.env.FrontEnd_URL, 
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
export const prismaClient = new PrismaClient();
app.get('/', (req: Request, res: Response) => {
  res.send('Working');
});

app.use('/api', rootRouter);

app.get('/protected', authenticateToken, (req : any ,res : any) => {
    return res.json({ user: req.user });
})

app.listen(config.port, () => {
  console.log(`Connected Successfully on port ${config.port}`);
});
