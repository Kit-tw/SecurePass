

export default function NavComponents(){
    return(
        <nav className="flex flex-col justify-between bg-deep p-5  shadow-lg shadow-white lg:flex-row">
        
        <label htmlFor="" className="text-mono text-lg font-bold text-white hover:cursor-pointer hover:text-accent hover:scale-[1.1]  transform transition duration-250">SecurePass</label>
        
        <div className="flex flex-col mt-8 gap-8 lg:mt-0 lg:gap-10 lg:flex-row">
        
        <label htmlFor="" className="text-mono text-lg text-white hover:cursor-pointer hover:text-accent hover:scale-[1.1]  transform transition duration-250">Password Generation</label>
        <label htmlFor="" className="text-mono text-lg text-white hover:cursor-pointer hover:text-accent hover:scale-[1.1]  transform transition duration-250">Breach Detection</label>
        <label htmlFor="" className="text-mono text-lg text-white hover:cursor-pointer hover:text-accent hover:scale-[1.1]  transform transition duration-250">Login</label>
        
        </div>

        </nav>
    )
}