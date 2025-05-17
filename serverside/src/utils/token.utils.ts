import jwt, { Secret } from "jsonwebtoken";


export const generateAccessToken = (payload: Object) =>{
 return jwt.sign(payload,process.env.SECRET_ACCESS_TOKEN as Secret,{expiresIn: '1m',});
}

export const generateRefreshToken = (payload: Object) =>{
 return jwt.sign(payload,process.env.SECRET_REFRESH_TOKEN as Secret,{expiresIn: '30d',});
}

export const VerifyAccessToken = (token : string) =>{
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as Secret);
}

export const VerifyRefreshToken = (token : string) =>{
    return jwt.verify(token, process.env.SECRET_REFRESH_TOKEN as Secret);
}