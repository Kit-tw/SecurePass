import { useState } from "react";
import { useManage } from "../../hooks/ManageContext";
import DialogComponents from "./dialog";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../hooks/AuthProvider";

interface TableType {
  id?: number;
  name: string;
  URL: string;
  email: string;
  password: string;
}
interface mode {
  mode: "Add" | "Edit" | "Delete";
}

export default function TableComponent() {
  const { api } = useAuth();
  const { manageData, setManageData } = useManage();
  const [dialog, setDialog] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<TableType>();
  const [mode, setMode] = useState<mode>({ mode: "Edit" });

  const HandleEdit = (Data: TableType) => {
    setDialog(true);
    setDataEdit(Data);
    return;
  };
  const table = {
    header: ["Name", "URL", "Email", "Password", "Options"],
    rows: manageData,
  };

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      {
        const response = await api.delete(`/api/item/delete/${id}`);
        return response.data;
      }
    },
    onSuccess: (res) => {
      setManageData((prev) => prev?.filter((data) => data.id != res.id));
    },
  });

  const handleShow = (index: number) => {
    const input = document.getElementById(
      `passwordfield-${index}`
    ) as HTMLInputElement;
    if (input) {
      input.type = input.type === "password" ? "text" : "password";
    }
  };
  return (
    <div className="overflow-x-auto w-full">
      {dialog && (
        <DialogComponents
          dialog={dialog}
          setDialog={setDialog}
          mode={mode}
          dataEdit={dataEdit}
        />
      )}
      <table className="min-w-full text-deep border border-collapse">
        <thead>
          <tr className="bg-deep text-light">
            {table.header.map((title, index) => (
              <th key={index} className="p-2 text-center whitespace-nowrap">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows
            ? table.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="text-center border-t">
                  <td className="p-2">{row.name}</td>
                  <td className="p-2">{row.URL}</td>
                  <td className="p-2">{row.email}</td>
                  <input
                    type="password"
                    id={`passwordfield-${rowIndex}`}
                    value={row.password}
                    disabled
                  />
                  <button
                    onClick={() => handleShow(rowIndex)}
                    className="bg-yellow rounded-lg px-2 hover:cursor-pointer"
                  >
                    Show
                  </button>
                  <td className="p-2">
                    <div className="flex flex-row justify-center gap-4">
                      <button
                        className="bg-secondary px-4 rounded-lg text-black hover:text-accent hover:cursor-pointer"
                        onClick={() => HandleEdit(row)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-400 px-4 rounded-lg text-black hover:text-light hover:cursor-pointer"
                        onClick={() =>
                          row.id ? deleteMutation.mutate(row.id) : ""
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            : "No password saved"}
        </tbody>
      </table>
    </div>
  );
}
