import { Router } from 'express';
import { CreateUser } from '../controllers/User/SignUp';
import { Login } from '../controllers/User/Signin';

const userRoutes:Router = Router();
userRoutes.post('/signup',CreateUser);
userRoutes.post('/signin',Login);
export default userRoutes;