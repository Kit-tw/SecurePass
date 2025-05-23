import { useManage } from "../../hooks/ManageContext";


interface TableType{
  id? : number
  name : string
  URL : string
  email : string
  password : string
}

export default function TableComponent() {
  const {manageData} = useManage();
   
    const table = {
      header: ["Name", "URL", "Email", "Password", "Options"],
      rows:manageData
    };
  
    return (
      <div className="overflow-x-auto w-full">
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
            {table.rows ? table.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="text-center border-t">
                <td className="p-2">{row.name}</td>
                <td className="p-2">{row.URL}</td>
                <td className="p-2">{row.email}</td>
                <td className="p-2">{row.password}</td>
                <td className="p-2"><p>Edit</p><p>Delete</p></td>
              </tr>
            )) : "No password saved"}
          </tbody>
        </table>
      </div>
    );
  }
  