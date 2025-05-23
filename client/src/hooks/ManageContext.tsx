import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { useQuery } from "@tanstack/react-query";

interface TableType {
  id?: number;
  name: string;
  URL: string;
  email: string;
  password: string;
}

interface ManageContextType{
    manageData : TableType[] | undefined
     setManageData: React.Dispatch<React.SetStateAction<TableType[] | undefined>>;
}

const ManageContext =  createContext<ManageContextType | undefined>(undefined);
export const useManage = () =>{
     const manageContext = useContext(ManageContext);
     if (!manageContext) throw Error("useContext can only be used inside an ManageProvider");
     return manageContext;
}
export const ManageProvider = ({ children }: { children: ReactNode }) => {
   const [manageData , setManageData] = useState<TableType[]>();
  const { api } = useAuth();
  const fetchData = async (): Promise<TableType[]> => {
    const res = await api.get("/api/item");
    return res.data;
  };
  const { data } = useQuery<TableType[]>({
    queryKey: ["data"],
    queryFn: fetchData,
  });
  useEffect(() => {
  setManageData(data);
}, [data]);
    return(
        <ManageContext.Provider value = {{manageData , setManageData}}>
        {children}
        </ManageContext.Provider>
    )
};
