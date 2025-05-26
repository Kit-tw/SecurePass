import { Router } from "express";
import userRoutes from "./userRoutes";
import itemRouter from "./ItemRouter";
import GenerateRouter from "./generateRouter";

const rootRouter : Router = Router();
rootRouter.use('/user',userRoutes);
rootRouter.use('/item',itemRouter);
rootRouter.use('/file',GenerateRouter);
export default rootRouter;