import { Router } from "express";
import { authenticateToken } from "../middlewares/authmiddleware";
import { GenerateExcel } from "../controllers/GenerateFile/excel";



const GenerateRouter : Router = Router();
GenerateRouter.post('/generateExcel',authenticateToken,GenerateExcel);

export default GenerateRouter;