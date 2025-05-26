import { NextFunction, Response } from "express";
import { CustomRequest } from "../../models/customRequest.model";
import { prismaClient } from "../../app";
import ExcelJs from "exceljs";
import { decrypt } from "../../utils/crypto.utils";
import { ManageItem } from "../../models/MangeItem.model";

export const GenerateExcel = async (req : CustomRequest, res : Response, next : NextFunction) =>{
    try{

    const email = req.user?.email;
    const userDB = await prismaClient.user.findFirst({where:{email}})
    if(!userDB){
        res.status(400).json({message : "User not found!"});
        return;
        }
    const data  = await prismaClient.manageItem.findMany({where:{OwnerId : userDB.id},orderBy:{id : "asc"}});
    if(!data){
        res.status(400).json({message : "No save password"});
        return;
    }
    data.map((item) => {item.password = decrypt(item.password)});
    const workbook = new ExcelJs.Workbook();
    const sheet = workbook.addWorksheet('Password');
    setHeader(sheet);
    setContent(sheet,data);
    res.status(200);
    res.setHeader('Content-Type','text/xlsx');
    res.setHeader('Content-Disposition',`attachment; filename=${userDB.email.split("@")[0]}_password.xlsx}`);
    workbook.xlsx.write(res).then(()=>res.end());
    return;
    }catch(error){
        next();
    }finally{
        prismaClient.$disconnect;
    }
}


const setHeader = (sheet : ExcelJs.Worksheet) =>{
    let Header = ["Name","URL","Email","Password"]
    Header.map((header,idx) => {
        sheet.getCell(1,idx+1).value = header;
    }
)
}

const setContent = (sheet : ExcelJs.Worksheet, data : ManageItem[]) => {
    let strRIdx = 2;
    data.map((item) => {
        sheet.getCell(strRIdx,1).value = item.URL
        sheet.getCell(strRIdx,2).value = item.name
        sheet.getCell(strRIdx,3).value = item.email
        sheet.getCell(strRIdx,4).value = item.password
        strRIdx++;
    })
}
