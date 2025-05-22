import { useMutation } from "@tanstack/react-query"
import React, { useState } from "react"
import { useAuth } from "./AuthProvider"

interface DataProps{
  name : string
  URL : string
  email : string
  password : string
}

interface mode{
  mode : "Add" | "Edit" | "Delete"
}


interface Props  {
   dialog : boolean
   setDialog : React.Dispatch<React.SetStateAction<boolean>>;
   data : DataProps
   setData : React.Dispatch<React.SetStateAction<DataProps>>;
   mode : mode
}
export default function DialogComponents({dialog,setDialog,data,setData,mode} : Props){
   const {api} = useAuth();
   const [message,setMessage] = useState<string>("");
   const addMutation = useMutation({
      mutationFn: async(payload : DataProps) =>{
          const reponse = await api.post(
        `/api/items`,
        payload,
        { withCredentials: true }
      );
      return reponse.data;
      },onSuccess:(res )=>{
         setMessage("");
         setData(data);
         setDialog(false);
      },onError:(error : any)=>{
         setMessage(error.reponse.data.message)
      }
   })
   const handleSubmit = (e : React.FormEvent) =>{
      e.preventDefault();
      switch(mode.mode){
         case 'Add':

      }
   }
    return(
      <>
         <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={() => setDialog(!dialog)}
      ></div>
      <form onSubmit={handleSubmit}>
        <dialog open={dialog} className="flex flex-col my-auto mx-auto rounded-lg w-full lg:w-[50%] text-deep bg-secondary z-50">
        <label className="self-end mx-3 my-2 p-2 bg-deep text-light rounded-3xl hover:cursor-pointer" onClick={()=> setDialog(!dialog)} > &times;</label>
        <label className="self-center text-xl font-bold font-mono" > Add New Items</label>

       <div className="flex flex-row justify-center flex-wrap self-center gap-4 w-full my-5">
          <div className="flex flex-col">
       <p>Name</p>
       <input type="text" className="p-2 w-xs rounded-2xl bg-light text-deep shadow-xl " placeholder="MyAccount01" onChange={(e) =>setData({...data,name : e.target.value} )}required/>
      
          </div>
          <div className="flex flex-col">
       <p>URL</p>
       <input type="text" className="p-2 w-xs rounded-2xl bg-light text-deep shadow-xl " placeholder="www.google.com"  onChange={(e) =>setData({...data,URL : e.target.value} )} required/>
          </div>
          <div className="flex flex-col">
       <p>Email</p>
       <input type="text" className="p-2 w-xs rounded-2xl bg-light text-deep shadow-xl " placeholder="Test@gmail.com"  onChange={(e) =>setData({...data,email : e.target.value} )} required/>
      
          </div>
          <div className="flex flex-col">
       <p>Password</p>
       <input type="password" className="p-2 w-xs rounded-2xl bg-light text-deep shadow-xl " placeholder="1234567"  onChange={(e) =>setData({...data,password : e.target.value} )} required />
          </div>

       </div>
          <button className="self-center text-md rounded-lg font-bold font-mono bg-accent text-light  px-4 py-2 my-10 hover:cursor-pointer" > {mode.mode}</button>
      </dialog>
      </form>
      </>
    )
}