import { NextFunction, Response } from "express"
import { CustomRequest } from "../../models/customRequest.model"
import { prismaClient } from "../../app";
import { decrypt } from "../../utils/crypto.utils";

export const getItems = async (req : CustomRequest , res: Response , next : NextFunction) =>{
    try{
    const user = req.user;
    const page = parseInt(req.query.page as string)  || 1;
    const limit = parseInt(req.query.limit as string) || 2;
    const q = req.query.q as string || '';
    const skip = (page - 1) * limit;
    const userDB = await prismaClient.user.findFirst({where:{email : user?.email}})
    const items = await prismaClient.manageItem.findMany({
      skip,
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
  const totalcount = await prismaClient.manageItem.count({
    where:{
       OwnerId: userDB?.id,
        name:{
          contains:q,
        }
    }
  })
  items.map((data) => data.password = decrypt(data.password));
     res.status(200).json({data : items , totalcount});
    return;
        }catch(error){
            next();
        }finally{
            prismaClient.$disconnect;
        }
}