import logo from "../../assets/logo.png"
export default function BreachContentComponent(){
    return(
        <div className="flex flex-col justify-center items-center text-deep mt-4 gap-4">
            <label htmlFor="" className="font-mono text-xl text-red ">Your Data have been exposed !!!</label>
            <div className="flex flex-col lg:flex-row bg-lightred">
                <div className="flex flex-col justify-center items-center">
                <img src={logo} alt="" className="max-w-xs"/>
                <label className="text-lg text-black font-mono font-bold ">Company</label>
                </div>
                <div className="flex flex-col justify-between my-5 ">
                    <span>Wongnai experienced a data breach, along with sixteen other companies, in 2020. A data breach broker is now selling these stolen user databases, which together contain a total of 34 million user records. TWongnai.com confirmed the breach and is investigating the incident, but other affected companies had not previously reported these breaches. The exposed information includes email addresses, hashed passwords, names, phone numbers, and other personal data, varying by breach.</span>
                    <div className="flex flex-col my-4 ">
                    <span className="font-bold">Exposed Data</span>
                    <span>Email addresses, Passwords, Dates of birth, Names, Phone numbers</span>
                    </div>
                </div>
            </div>
        </div>
    )
}