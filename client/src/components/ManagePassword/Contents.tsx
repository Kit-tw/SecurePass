import { useCallback, useMemo, useState } from "react";
import DialogComponents from "../Utills/dialog";
import { useAuth } from "../../hooks/AuthProvider";
import { useManage } from "../../hooks/ManageContext";
interface mode {
  mode: "Add" | "Edit" | "Delete";
}

export default function Content() {
  const [dialog, setDialog] = useState<boolean>(false);
  const { api } = useAuth();
  const {search, setSearch} = useManage();
  const [mode, setMode] = useState<mode>({ mode: "Add" });
  const DownloadExcel = async () => {
    try {
      const res = await api.post(
        "/api/file/generateExcel",
        {},
        { responseType: "blob" }
      );
      const blob = new Blob([res.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      let filename = "report.xlsx";
      const customHeader = res.headers["x-filename"];

      if (customHeader) {
        filename = customHeader;
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      document.body.appendChild(a);
      a.download = filename;
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <>
      <div className="w-full bg-primary p-5 my-10">
        <div className="flex flex-col lg:flex-row justify-between font-bold">
          <label
            htmlFor=""
            className="text-md font-mono  ml-0 lg:text-xl lg:ml-10 my-auto"
          >
            Password Management
          </label>
          <div className="flex flex-row gap-4">
              <div className="flex bg-gray text-deep text-sm lg:text-md hover:cursor-pointer  rounded-lg">
              <input type="text" placeholder="Search By Name.." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="flex bg-gray p-1 lg:p-2 text-primary text-xs lg:text-md hover:cursor-pointer">
              <button onClick={DownloadExcel}>Export To Excel</button>
            </div>
            <div
              className="flex bg-gray p-1 lg:p-2 hover:cursor-pointer"
              onClick={() => setDialog(!dialog)}
            >
              <label
                htmlFor=""
                className="text-xs lg:text-md font-mono text-primary hover:cursor-pointer"
              >
                {" "}
                + Add item
              </label>
            </div>
            {dialog && (
              <DialogComponents
                dialog={dialog}
                setDialog={setDialog}
                mode={mode}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
