import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
export function authenticateToken(req : Request,res : Response , next : NextFunction){
     const authHeader = req.headers.authorization;
    const Token = authHeader && authHeader.split(' ')[1];
    if(!Token){
        res.status(401).json({error : 'Access Denied'});
        return;
    }
        jwt.verify(Token,process.env.SECRET_ACCESS_TOKEN as Secret,(err,user)=>{
            if(err){
                res.status(403).json({error : 'Invalid Credential'});
                return;
            }
            next();
        })

}