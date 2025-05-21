import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import { CustomRequest } from "../models/customRequest.model";
import { tokenPayload } from "../models/tokenpayload.model";
import { VerifyAccessToken } from "../utils/token.utils";
export function authenticateToken(req : CustomRequest,res : Response , next : NextFunction){
     const authHeader = req.headers.authorization;
     console.log(req.headers.authorization)
    const Token = authHeader && authHeader.split(' ')[1];
     console.log(Token)
    if(!Token){
        res.status(401).json({error : 'Access Denied'});
        return;
    }
      try {
    const payload = VerifyAccessToken(Token) as tokenPayload;
    req.user = payload;
    next();
  } catch (err) {
   res.status(401).json({ message: 'Invalid Credential' });
   return;
  }

}