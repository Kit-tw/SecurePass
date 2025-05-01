import { Link } from "react-router-dom";


export default function NavComponents(){
    return(
        <nav className="flex flex-col justify-between bg-white p-5  shadow-lg lg:flex-row">
        
        <label htmlFor="" className="text-mono text-lg font-bold text-black hover:cursor-pointer hover:text-accent hover:scale-[1.1]  transform transition duration-250">SecurePass</label>
        
        <div className="flex flex-col mt-8 gap-8 lg:mt-0 lg:gap-10 lg:flex-row">
        
        <Link to={{pathname : "/passwordgenerate"}} className="text-mono text-lg text-black font-bold hover:cursor-pointer hover:text-accent hover:scale-[1.1]  transform transition duration-250">Password Generation</Link>
        <Link to={{pathname : "/breachdetection"}} className="text-mono text-lg text-black font-bold hover:cursor-pointer hover:text-accent hover:scale-[1.1]  transform transition duration-250">Breach Detection</Link>
        <label htmlFor="" className="text-mono text-lg text-black font-bold hover:cursor-pointer hover:text-accent hover:scale-[1.1]  transform transition duration-250">Login</label>
        
        </div>

        </nav>
    )
}