import { NextFunction, Response } from "express"
import { CustomRequest } from "../../models/customRequest.model"
import { prismaClient } from "../../app";
import { decrypt } from "../../utils/crypto.utils";

export const getItems = async (req : CustomRequest , res: Response , next : NextFunction) =>{
    try{
    const user = req.user;
    const userDB = await prismaClient.user.findFirst({where:{email : user?.email}})
   const items = await prismaClient.manageItem.findMany({
  where: {
    OwnerId: userDB?.id,
  },
  orderBy: {
    id: 'asc',
  },
});
  items.map((data) => data.password = decrypt(data.password));
     res.status(200).json(items);
    return;
        }catch(error){
            next();
        }finally{
            prismaClient.$disconnect;
        }
}