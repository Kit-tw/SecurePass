import jwt, { Secret } from "jsonwebtoken";
import { tokenPayload } from "../models/tokenpayload.model";


export const generateAccessToken = (payload: tokenPayload):string =>{
 return jwt.sign(payload,process.env.SECRET_ACCESS_TOKEN as Secret,{expiresIn: '1m',});
}

export const generateRefreshToken = (payload: tokenPayload):string =>{
 return jwt.sign(payload,process.env.SECRET_REFRESH_TOKEN as Secret,{expiresIn: '30d',});
}

export const VerifyAccessToken = (token : string):tokenPayload =>{
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as Secret) as tokenPayload;
}

export const VerifyRefreshToken = (token : string):tokenPayload =>{
    return jwt.verify(token, process.env.SECRET_REFRESH_TOKEN as Secret) as tokenPayload;
}