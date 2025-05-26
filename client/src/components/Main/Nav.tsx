import { Link, useNavigate } from "react-router-dom";
import Popups from "../Utills/Popups";
import { useState } from "react";
import { useAuth } from "../../hooks/AuthProvider";
import { useMutation } from "@tanstack/react-query";


export default function NavComponents(){
    const [isPopup,setIsPopup] = useState(false);
    const {token,api,setToken} = useAuth();
    const navigate = useNavigate(); 
    const fetchLogout =async () =>{
      const response = await api.post('/api/user/logout', { } , { withCredentials: true });
      return response.data;
    }
  const logoutMutation = useMutation({
    mutationFn: fetchLogout,
    onSuccess: (res) => {
      console.log("this is success");
      setToken(null);
      navigate("/passwordgenerate");
    },
  });
    const HandleLogout = async () =>{
      logoutMutation.mutate();
    }
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
        :
        <> 
        <Link to={{pathname : "/ManagePassword"}} className="text-mono text-lg text-black font-bold hover:cursor-pointer hover:text-accent hover:scale-[1.1]  transform transition duration-250">ManagePassword</Link>
        <button className="text-mono text-lg text-black font-bold hover:cursor-pointer hover:text-accent hover:scale-[1.1]  transform transition duration-250" onClick={HandleLogout}>Logout</button>
        </>
        }
        {isPopup && <Popups onClose={() => setIsPopup(false)} />}
        </div>

        </nav>
    )
}