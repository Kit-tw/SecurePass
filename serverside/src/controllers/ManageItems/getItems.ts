import { NextFunction, Response } from "express"
import { CustomRequest } from "../../models/customRequest.model"
import { prismaClient } from "../../app";
import { decrypt } from "../../utils/crypto.utils";

export const getItems = async (req : CustomRequest , res: Response , next : NextFunction) =>{
    try{
    const user = req.user;
    const page = parseInt(req.query.page as string)  || 0;
    const limit = parseInt(req.query.take as string) || 2;
    const q = req.query.q as string || '';
    const userDB = await prismaClient.user.findFirst({where:{email : user?.email}})
    const items = await prismaClient.manageItem.findMany({
      skip: page,
      take: limit,
      where: {
        OwnerId: userDB?.id,
        name:{
          contains:q,
        }
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