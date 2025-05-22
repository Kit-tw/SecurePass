import { Link } from "react-router-dom";
import Popups from "../Utills/Popups";
import { useState } from "react";
import { useAuth } from "../Utills/AuthProvider";


export default function NavComponents(){
    const [isPopup,setIsPopup] = useState(false);
    const {token} = useAuth();
    return(
        <nav className="flex flex-col justify-between bg-white p-5  shadow-lg lg:flex-row">
        
        <Link to={{pathname : "/passwordgenerate"}}  className="text-mono text-lg font-bold text-black hover:cursor-pointer hover:text-accent hover:scale-[1.1]  transform transition duration-250">SecurePass</Link>
        
        <div className="flex flex-col mt-8 gap-8 lg:mt-0 lg:gap-10 lg:flex-row">
        
        <Link to={{pathname : "/passwordgenerate"}} className="text-mono text-lg text-black font-bold hover:cursor-pointer hover:text-accent hover:scale-[1.1]  transform transition duration-250">Password Generation</Link>
        <Link to={{pathname : "/breachdetection"}} className="text-mono text-lg text-black font-bold hover:cursor-pointer hover:text-accent hover:scale-[1.1]  transform transition duration-250">Breach Detection</Link>
        {!token ?
       <button
          onClick={() => setIsPopup(true)}
          className="text-mono text-md text-black font-bold hover:cursor-pointer hover:text-accent hover:scale-[1.1] transform transition duration-250 bg-yellow rounded-lg p-1"
        >
          Login
        </button>
        : <Link to={{pathname : "/ManagePassword"}} className="text-mono text-lg text-black font-bold hover:cursor-pointer hover:text-accent hover:scale-[1.1]  transform transition duration-250">ManagePassword</Link>
        }
        {isPopup && <Popups onClose={() => setIsPopup(false)} />}
        </div>

        </nav>
    )
}