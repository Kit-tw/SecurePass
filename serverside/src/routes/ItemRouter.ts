import { Router } from "express";
import { authenticateToken } from "../middlewares/authmiddleware";
import { addItems } from "../controllers/ManageItems/addItems";
import { getItems } from "../controllers/ManageItems/getItems";
import { EditItem } from "../controllers/ManageItems/edititems";
import { DeleteItem } from "../controllers/ManageItems/deleteItems";



const itemRouter: Router = Router();
itemRouter.post('/add',authenticateToken,addItems);
itemRouter.get('/',authenticateToken,getItems);
itemRouter.post('/update',authenticateToken,EditItem);
itemRouter.delete('/delete/:id',authenticateToken,DeleteItem);

export default itemRouter;