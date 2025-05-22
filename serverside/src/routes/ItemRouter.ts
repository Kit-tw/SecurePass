import { Router } from "express";
import { authenticateToken } from "../middlewares/authmiddleware";
import { addItems } from "../controllers/ManageItems/addItems";
import { getItems } from "../controllers/ManageItems/getItems";



const itemRouter: Router = Router();
itemRouter.post('/add',authenticateToken,addItems);
itemRouter.get('/',authenticateToken,getItems);

export default itemRouter;