import { Router } from "express";
import userRoutes from "./userRoutes";
import itemRouter from "./ItemRouter";

const rootRouter : Router = Router();
rootRouter.use('/user',userRoutes);
rootRouter.use('/item',itemRouter);
export default rootRouter;