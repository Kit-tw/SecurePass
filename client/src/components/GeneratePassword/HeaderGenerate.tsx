import Checkicon from '../../assets/Checkicon'
import logo from '../../assets/logo.png'
export default function HeaderGenerate(){
    const data = [
        "At least 12 characters long but 14 or more is better",
        "A combination of uppercase, lowercase, numbers, and symbols",
        "Not a word that can be found in a dictionary",
        "Significantly different from your previous passwords",
    "Easy for you to remember but difficult for others to guess"]
return(
    <header className="flex flex-col-reverse lg:flex-row  ">
        <div className="flex flex-col w-full mx-0 md:mx-2 lg:mx-5 mt-10">
        <label htmlFor="" className="text-4xl text-black font-mono font-bold">Generate Strong Password</label>
        <div className="flex flex-col bg-gray rounded-lg max-w-5xl mt-5 p-4 shadow-xl/20">
        <label htmlFor="" className="text-deep font-mono text-xl font-bold">Password security starts with creating a strong password</label>
        <label htmlFor="" className="text-deep font-mono ml-4 text-xl font-bold">Best Practices</label>
        {data && data.map((data , index) => (
            <div className='flex mb-4 ml-4 w-full h-[30px] item-start lg:items-center lg:mb-2'key={index}><Checkicon height={15} width={15}/><label htmlFor="" className="text-deep font-mono text-xs lg:text-sm">{data}</label></div>            
    )
        )}
        </div>
        </div>
       <img src={logo} className=' h-full mx-auto max-w-xs lg:max-w-lg my-auto' alt='secure'/>
    </header>
)
}