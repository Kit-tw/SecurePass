import { Router } from 'express';
import { CreateUser } from '../controllers/User/SignUp';
import { getMe, Login, logout, refresh } from '../controllers/User/Signin';
import { authenticateToken } from '../middlewares/authmiddleware';

const userRoutes:Router = Router();
userRoutes.post('/signup',CreateUser);
userRoutes.post('/signin',Login);
userRoutes.get('/refresh', refresh);
userRoutes.post('/logout', logout);
userRoutes.get('/me',getMe);
export default userRoutes;