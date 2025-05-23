import { useState } from "react";
import DialogComponents from "../Utills/dialog";



interface mode{
  mode : "Add" | "Edit" | "Delete"
}

export default function Content() {
  
  const [dialog ,setDialog] = useState<boolean>(false);
  const [mode , setMode] = useState<mode>({mode : "Add"});

  return(
   <>
   <div className="w-full bg-primary p-5 my-10">
    <div className="flex flex-col lg:flex-row justify-between font-bold">
    <label htmlFor="" className="text-md font-mono  ml-0 lg:text-xl lg:ml-10 my-auto">Password Management</label>
    <div className="flex flex-row gap-4">
    <div className="flex bg-gray p-1 lg:p-2 text-primary text-xs lg:text-md">
    <select name="Exports" id="Exports" className="w-full lg:w-[180px]">
    <option selected>Export a File</option>
  <option value="Excel">Export To Excel</option>
  <option value="txt">Export To .txt FILE</option>
</select>
    </div>
    <div className="flex bg-gray p-1 lg:p-2 hover:cursor-pointer" onClick={() => setDialog(!dialog)}>
        <label htmlFor="" className="text-xs lg:text-md font-mono text-primary hover:cursor-pointer"> + Add item</label>
    </div>
    {dialog && <DialogComponents dialog={dialog} setDialog={setDialog} mode={mode} />}
    </div>
    </div>
   </div>
   </>
   );
}
