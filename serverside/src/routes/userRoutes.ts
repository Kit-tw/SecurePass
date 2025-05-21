import { Router } from 'express';
import { CreateUser } from '../controllers/User/SignUp';
import { Login, logout, refresh } from '../controllers/User/Signin';

const userRoutes:Router = Router();
userRoutes.post('/signup',CreateUser);
userRoutes.post('/signin',Login);
userRoutes.get('/refresh', refresh);
userRoutes.post('/logout', logout);
export default userRoutes;