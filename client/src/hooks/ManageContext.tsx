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

interface TableResponse {
  data: TableType[];
  totalcount: number;
}

interface ManageContextType{
    manageData : TableType[] | undefined
    setManageData: React.Dispatch<React.SetStateAction<TableType[] | undefined>>
    search : string
    setSearch : React.Dispatch<React.SetStateAction<string>>
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    limit: number;
    setLimit: React.Dispatch<React.SetStateAction<number>>;
    totalPage : number
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
  const [page , setPage] = useState<number>(1);
  const [limit , setLimit] = useState<number>(2);
  const debounceSearch =  useDebounce(search , 500);
  
const { data } = useQuery<TableResponse>({
  queryKey: ["data",debounceSearch,page,limit],
  queryFn: () => api.get(`/api/item?q=${debounceSearch}&page=${page}&limit=${limit}`).then((res) => res.data),
  
});
const totalPage = Math.ceil((data?.totalcount || 0) / limit);
useEffect(() => {
  if (data) setManageData(data?.data);
}, [data]);
    return(
        <ManageContext.Provider value = {{manageData , setManageData ,search , setSearch , page , setPage , limit , setLimit , totalPage}}>
        {children}
        </ManageContext.Provider>
    )
};
