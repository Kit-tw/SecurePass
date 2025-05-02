export default function TableComponent() {
    const data = {
      header: ["Name", "URL", "Email", "Password", "Options"],
      rows: [
        {
          name: "Facebook",
          url: "www.facebook.com",
          email: "test@gmail.com",
          password: "123456",
          options: "Edit",
        },
        {
          name: "Google",
          url: "www.google.com",
          email: "user@gmail.com",
          password: "abcdef",
          options: "Edit",
        },
      ],
    };
  
    return (
      <div className="overflow-x-auto w-full">
        <table className="min-w-full text-deep border border-collapse">
          <thead>
            <tr className="bg-deep text-light">
              {data.header.map((title, index) => (
                <th key={index} className="p-2 text-center whitespace-nowrap">
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="text-center border-t">
                <td className="p-2">{row.name}</td>
                <td className="p-2">{row.url}</td>
                <td className="p-2">{row.email}</td>
                <td className="p-2">{row.password}</td>
                <td className="p-2">{row.options}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  