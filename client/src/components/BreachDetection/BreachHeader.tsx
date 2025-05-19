import { useState } from "react";
import databreachlogo from "../../assets/data-breach.png";
import axios from "axios";
import BreachContentComponent from "./BreachContent";

interface Exposed_Data {
  logo: string;
  company: string;
  detail: string;
  data: string;
  date: number;
}
export default function BreachHeaderComponent() {
  const [email, useEmail] = useState<string>("");
  const [data, setData] = useState<Exposed_Data[]>([]);
  const [submitted, setSubmitted] = useState(false); 

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const link = `${import.meta.env.VITE_API_URL}/breach-analytics?email=${email}`;
    try {
      const res = await axios.get(link);
      const result: Exposed_Data[] = res.data?.ExposedBreaches?.breaches_details?.flatMap((p: any) => {
        return [{
          logo: p.logo,
          company: p.breach,
          detail: p.details,
          data: p.xposed_data.replaceAll(";",", "),
          date: p.xposed_date
        }];
      }) ?? [];
  
      result.sort((a, b) => a.date - b.date);
      setData(result);
    } catch (error: any) {
      console.log(error.message);
      setData([]);
    }
    setSubmitted(true);
  };
  
  const description = [
    "Check your email regularly for breaches",
    "Never reuse passwords",
    "Change password every 3 months",
    "Check your email regularly for breaches",
  ];
  return (
      <>
    <header className="flex flex-row bg-yellow clip-bg py-20">
      <div className="flex flex-col flex-1 gap-4 mx-0 lg:mx-10">
        <div className="flex flex-row text-4xl text-black font-mono font-bold gap-4">
          <label>Check</label>
          <label className="text-primary">Exposed</label>
          <label>Data</label>
        </div>

        <form onSubmit={HandleSubmit} className="flex flex-row gap-1 max-w-lg">
  <input
    type="text"
    className="p-2 w-full rounded-2xl bg-light text-deep shadow-xl"
    placeholder="Enter your Email"
    onChange={(e) => useEmail(e.target.value)}
    value={email}
    required
  />
  <button
    type="submit"
    className="bg-accent p-3 rounded-2xl text-light hover:cursor-pointer"
  >
    Submit
  </button>
</form>

        <div className="flex flex-col bg-gray rounded-lg max-w-5xl mt-5 p-4 shadow-xl/20 bg-gray gap-3">
          <label htmlFor="" className="text-deep font-mono text-xl font-bold">
            Common Practices for Email & Password Safety
          </label>
          {description &&
            description.map((description, index) => (
              <div
                className="flex mb-4 ml-4 w-full h-[15px] item-start lg:items-center lg:mb-2"
                key={index}
              >
                <label
                  htmlFor=""
                  className="text-deep font-mono text-xs lg:text-sm"
                >
                  {description}
                </label>
              </div>
            ))}
        </div>
      </div>
      <div className="flex-1 hidden lg:inline mx-auto my-auto">
        <img
          src={databreachlogo}
          className=" mx-auto  lg:max-w-xs my-auto"
          alt="databreachlogo.png"
        />
      </div>
    </header>
            {/* Breach Result Display */}
    {submitted && (
            <main className="flex flex-col justify-center items-center text-deep mt-8 gap-4">
              {data.length > 0 ? (
                <>
                  <label className="font-mono text-xl text-red">Your data has been exposed!!!</label>
                  {data.map((item, index) => (
                    <BreachContentComponent
                      key={index}
                      logo={item.logo}
                      company={item.company}
                      detail={item.detail}
                      data={item.data}
                    />
                  ))}
                </>
              ) : (
                <label className="font-mono text-xl text-green-600">
                  Your data is safe ✅
                </label>
              )}
            </main>
          )}
    </>
  );
}
