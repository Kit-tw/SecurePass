import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import { CustomRequest } from "../models/customRequest.model";
import { tokenPayload } from "../models/tokenpayload.model";
export function authenticateToken(req : CustomRequest,res : Response , next : NextFunction){
     const authHeader = req.headers.authorization;
    const Token = authHeader && authHeader.split(' ')[1];
    if(!Token){
        res.status(401).json({error : 'Access Denied'});
        return;
    }
      try {
    const payload = jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET as string) as tokenPayload;
    req.user = payload;
    next();
  } catch (err) {
   res.status(403).json({ message: 'Invalid Creidential' });
   return;
  }

}