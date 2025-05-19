import { NextFunction, Request, Response } from 'express';
import { prismaClient } from '../../app';
import bcrypt from "bcryptjs";
import { User } from '../../models/user.model';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import { generateAccessToken, generateRefreshToken, VerifyRefreshToken } from '../../utils/token.utils';
import { CustomJwtPayload } from '../../models/customJwtPayload.model';



export const Login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
    try{

        const { email, password } = req.body;
        if (!email?.trim() || !password?.trim()) {
            res.status(400).json({ message: 'Email or Password is Empty' });
            return;
        }
        const user: User | null = await prismaClient.user.findFirst({
            where: {
                email: email,
            },
        });
        if(!user){
            res.status(400).json({message : 'User not found!'});
            return;
        }
    const isMatch = await bcrypt.compare(password, user.password);
    if(isMatch){
        const user = {email};
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.cookie('refreshToken',refreshToken,{httpOnly : true, secure : true,sameSite :'strict', maxAge: 7 * 24 * 60 * 60 * 1000})
        res.status(200).json({accessToken,refreshToken});
    }else{
         res.status(200).json({message : 'Wrong Credential'});
    }
    console.log(isMatch ? "This password is Match" : "This password is Not Match");
    return;
    }catch(error){
        next(error);
    }finally{
        prismaClient.$disconnect;
    }
};

export const refresh = (req: Request , res : Response , next : NextFunction ) =>{
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken){
        res.sendStatus(401);
    }
    try{
        const payload = VerifyRefreshToken(refreshToken) as CustomJwtPayload;
        const accessToken = generateAccessToken({email : payload.email});
         res.json({ accessToken });
    }catch(error){
        res.sendStatus(403);
    }
}

export const logout = (req : Request , res : Response) =>{
    res.clearCookie('refreshToken');
    res.sendStatus(204).send();
}
