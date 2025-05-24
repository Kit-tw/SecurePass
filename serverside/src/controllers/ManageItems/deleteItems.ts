import { NextFunction, Response } from "express";
import { CustomRequest } from "../../models/customRequest.model";
import { prismaClient } from "../../app";


export const DeleteItem = async (req : CustomRequest, res: Response , next : NextFunction) =>{
    try{
        const id = parseInt(req.params.id);
        if(!id){
            res.status(400).json({message : "Error no Id "});
            return;
        }
        const db = await prismaClient.manageItem.delete({where:{id}});
        res.status(200).json(db)
    }catch(error){
        next(error);
    }finally{
        prismaClient.$disconnect;
    }

}