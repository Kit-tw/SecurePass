import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../app";

export const CreateUser = (req : Request, res : Response , next : NextFunction) =>{
    try{
        const { email , password } = req.body;
        //TODO : Add validate Data (Email)
        if(!email.trim() || !password.trim()){
            res.status(400).json({message : 'Email or Password is Empty'});
        }


        
    }catch(error){
        next(error);
    }

}