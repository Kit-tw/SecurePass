import express, { Express, Request, Response } from 'express';
import config from './config/config';
import { PrismaClient } from '@prisma/client';
import rootRouter from './routes/rootRouter';
import { authenticateToken } from './middlewares/authmiddleware';

const app: Express = express();
app.use(express.json());

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
