import { NextFunction, Response } from "express";
import { CustomRequest } from "../../models/customRequest.model";
import { prismaClient } from "../../app";
import { encrypt } from "../../utils/crypto.utils";



export const EditItem = async (req : CustomRequest , res : Response , next : NextFunction) =>{
    try{

        const {id , name , URL , email , password} = req.body
        if(!id || !name.trim() || !URL.trim() || !email.trim() || !password.trim()){
            res.status(400).json({message : "Some field is Empty!"});
            return;
        }
        const data = await prismaClient.manageItem.update({where:{id},data:{name,URL,email,password : encrypt(password)}})
        res.status(200).json({data});
        return;
    }catch(error){
        next(error);
    }finally{
        prismaClient.$disconnect;
    }
}