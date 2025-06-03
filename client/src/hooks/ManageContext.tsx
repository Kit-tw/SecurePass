import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "./useDebounce";

interface TableType {
  id?: number;
  name: string;
  URL: string;
  email: string;
  password: string;
}

interface ManageContextType{
    manageData : TableType[] | undefined
    setManageData: React.Dispatch<React.SetStateAction<TableType[] | undefined>>
    search : string
    setSearch : React.Dispatch<React.SetStateAction<string>>
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
  const [search,setSearch] = useState<string>('');
  const debounceSearch =  useDebounce(search , 500);
const { data } = useQuery<TableType[]>({
  queryKey: ["data",debounceSearch],
  queryFn: () => api.get(`/api/item?q=${debounceSearch}`).then((res) => res.data),
});

useEffect(() => {
  if (data) setManageData(data);
}, [data]);
    return(
        <ManageContext.Provider value = {{manageData , setManageData ,search , setSearch}}>
        {children}
        </ManageContext.Provider>
    )
};
