import { NextFunction, Response } from "express";
import { CustomRequest } from "../../models/customRequest.model";
import { prismaClient } from "../../app";
import { encrypt } from "../../utils/crypto.utils";
export const addItems = async (req : CustomRequest , res : Response , next : NextFunction) =>{
    try{
    const user = req.user;
    const {name , URL , email , password} = req.body;
    if(!name.trim() || !URL.trim() || !email.trim() || !password.trim()){
        res.status(400).json({message : "Some fields is Empty!!"});
        return;
    }
    const userDB = await prismaClient.user.findFirst({where:{email : user?.email}});
    if(!userDB){
        res.status(400).json({message : "user not found"});
        return;
    }
    const encryptedpassword =await encrypt(password);
    const add = await prismaClient.manageItem.create({
        data:{
        name,
        URL,
        email,
        password : encryptedpassword,
        OwnerId : userDB.id,
    }})
    res.status(200).json(add);
    return;
    }catch(error){
 next(error);
    }finally{
        prismaClient.$disconnect;
    }
}