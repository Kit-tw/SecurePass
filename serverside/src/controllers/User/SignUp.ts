import { NextFunction, Request, Response } from 'express';
import { prismaClient } from '../../app';
import bcrypt from 'bcryptjs';
export const CreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;
    //TODO : Add validate Data (Email)
    if (!email.trim() || !password.trim()) {
       res.status(400).json({ message: 'Email or Password is Empty' });
       return;
    }
    const hasuser = await prismaClient.user.findFirst({
      where: { email: email },
    });
    if (hasuser) {
       res.status(400).json({ message: 'Email already Exist!' });
      return;
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await prismaClient.user.create({
        data:{
            email:email,
            password:hashPassword
        }
    })
     res.status(200).json({ message: 'user is created' ,user});
    return;
  } catch (error) {
    next(error);
  } finally {
    prismaClient.$disconnect;
  }
};
