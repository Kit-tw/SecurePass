import FooterComponents from "../components/Main/Footer";
import NavComponents from "../components/Main/Nav";
import Content from "../components/ManagePassword/Contents";
import TableComponent from "../components/Utills/Table";
import { ManageProvider } from "../hooks/ManageContext";

export default function ManagePasswordPage() {
    return(
        <>
       <div className="min-h-screen flex flex-col">
             <NavComponents />
             <ManageProvider>
             <Content />
             
             <main className="flex-grow">
               <TableComponent />
             </main>
       </ManageProvider>
             <FooterComponents />
           </div>
        </>
    )
}