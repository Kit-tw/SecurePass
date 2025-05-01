import databreachlogo from "../../assets/data-breach.png"
export default function BreachHeaderComponent(){
    const data = [
        "Check your email regularly for breaches",
        "Never reuse passwords",
        "Change password every 3 months",
        "Check your email regularly for breaches"]
    return(
        <header className="flex flex-row bg-yellow clip-bg py-20">
            <div className="flex flex-col flex-1 gap-4 mx-0 lg:mx-10">
            <div className="flex flex-row text-4xl text-black font-mono font-bold gap-4">
        <label >Check</label>
        <label className='text-primary' >Exposed</label>
        <label >Data</label>
            </div>

            <div className="flex flex-row gap-1 max-w-lg">
                <input type="text" className="p-2 w-full rounded-2xl bg-light text-deep shadow-xl " placeholder="Enter your Email" />
                <button className="bg-accent p-3 rounded-2xl text-light">Submit</button>
            </div>
            <div className="flex flex-col bg-gray rounded-lg max-w-5xl mt-5 p-4 shadow-xl/20 bg-gray gap-3">
            <label htmlFor="" className="text-deep font-mono text-xl font-bold">Common Practices for Email & Password Safety</label>
            {data && data.map((data , index) => (
                
                <div className='flex mb-4 ml-4 w-full h-[15px] item-start lg:items-center lg:mb-2'key={index}><label htmlFor="" className="text-deep font-mono text-xs lg:text-sm">{data}</label></div>            
            )
        )}
        </div>
            </div>
            <div className="flex-1 hidden lg:inline mx-auto my-auto">
                <img src={databreachlogo} className=' mx-auto  lg:max-w-xs my-auto' alt="databreachlogo.png" />
            </div>
        </header>
    )
}