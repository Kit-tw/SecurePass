import { Router } from "express";
import userRoutes from "./userRoutes";

const rootRouter : Router = Router();
rootRouter.use('/user',userRoutes);
export default rootRouter;