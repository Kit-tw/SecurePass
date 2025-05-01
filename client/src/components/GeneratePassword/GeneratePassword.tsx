import { useEffect, useState } from "react";

const generatepassFn = (
  length: number,
  isUpperCase: boolean,
  isSpecialCase: boolean,
  isLowerCase: boolean,
  isNumber: boolean
): string => {
  console.log(isSpecialCase, isLowerCase, isNumber, isUpperCase);
  const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LowerCase = "abcdefghijklmnopqrstuvwxyz";
  const Number = "123456780";
  const SpecialCase = "!@#$%^&*-_=";
  let allowCase = "";
  let password = "";
  allowCase += isLowerCase ? LowerCase : "";
  allowCase += isUpperCase ? UpperCase : "";
  allowCase += isNumber ? Number : "";
  allowCase += isSpecialCase ? SpecialCase : "";
  if(allowCase.length === 0 || length <=0){
    return "";
  }
  for(let i =0 ;i<length ; i++){
    const randomIndex =  Math.floor(Math.random() * allowCase.length);
    password += allowCase[randomIndex];
  }
  return password;
};

export default function GeneratePassword() {
  const [length, setLength] = useState<number>(8);
  const [condition, setCondition] = useState([
    { name: "UpperCase", state: false },
    { name: "Special Case", state: false },
    { name: "LowerCase", state: true },
    { name: "Number", state: false },
  ]);
  const [password,setPassword] = useState<string>("");
  const clipboard = (text : string) =>{
    navigator.clipboard.writeText(text);
  }
  const GetPassword =() =>{
    const password = generatepassFn(
      length,
      condition[0].state,
      condition[1].state,
      condition[2].state,
      condition[3].state
    );
    setPassword(password);
  }
  useEffect(() => {
    GetPassword();
  }, [condition, length]);

  return (
    <div className="w-full bg-gray py-18">
      <div className="bg-primary mx-0 lg:mx-24 rounded-lg flex flex-col">
        <label
          htmlFor=""
          className="text-2xl font-mono  text-light font-bold mx-2 my-2 lg:mx-20 lg:my-8 lg:text-4xl"
        >
          Password Generator
        </label>
        <div className="flex mx-none lg:mx-20">
          <div className="relative w-full">
            <input
              type="text"
              className="block p-2.5 w-full z-20 bg-white rounded-2xl shadow-lg text-deep text-sm lg:text-lg shadow-lg"
              onChange={e => setPassword(e.target.value)}
              value={password}
              id="input"
            />
            <button className="absolute top-0 end-10 h-full p-2.5 w-[50px]   bg-accent text-white  flex items-center justify-center hover:cursor-pointer" onClick={()=> clipboard(password)}>
              <svg
                fill="#d9d9d9"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 93.842 93.843"
                stroke="#d9d9d9"
                className="w-4 h-4"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M74.042,11.379h-9.582v-0.693c0-1.768-1.438-3.205-3.206-3.205h-6.435V3.205C54.819,1.437,53.381,0,51.614,0H42.23 c-1.768,0-3.206,1.438-3.206,3.205V7.48H32.59c-1.768,0-3.206,1.438-3.206,3.205v0.693h-9.582c-2.393,0-4.339,1.945-4.339,4.34 v73.785c0,2.394,1.946,4.34,4.339,4.34h54.238c2.394,0,4.339-1.946,4.339-4.34V15.719C78.38,13.324,76.434,11.379,74.042,11.379z M32.617,25.336h28.61c1.709,0,3.102-1.391,3.102-3.1v-3.438h7.554l0.021,68.164l-49.939,0.021V18.801h7.554v3.436 C29.517,23.945,30.907,25.336,32.617,25.336z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </button>
            <button className="absolute top-0 end-0 h-full p-2.5 w-[50px]  rounded-e-2xl bg-accent text-white  flex items-center justify-center hover:cursor-pointer" onClick={GetPassword}>
              <svg
                height="200px"
                width="200px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 433.875 433.875"
                fill="#000000"
                transform="rotate(90)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    className="fill-gray-300"
                    d="M417.253,126.408l-36.955,15.308c18.074,43.635,18.074,91.697,0,135.332s-52.059,77.62-95.694,95.694 c-43.635,18.074-91.697,18.074-135.332,0c-43.635-18.074-77.62-52.059-95.694-95.694c-33.258-80.293-2.76-171.359,68.054-216.621 v66.125h40V7.557H42.636v40h29.849c-24.058,21.442-43.167,48.199-55.863,78.851c-22.163,53.506-22.163,112.441,0,165.947 c22.163,53.506,63.835,95.179,117.342,117.342c26.756,11.083,54.86,16.624,82.974,16.622c28.107-0.001,56.224-5.542,82.974-16.622 c53.506-22.163,95.179-63.836,117.342-117.342C439.416,238.849,439.416,179.914,417.253,126.408z"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex p-2 lg:flex-row lg:p-20">
          <div className="flex flex-row gap-4 flex-wrap">
            {condition.map((data, index) => (
              <div className="flex gap-2" key={index}>
                <div className="inline-flex items-center">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="peer h-7 w-7 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-light checked:bg-green checked:border-geen"
                      id={data.name}
                      checked={data.state}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const updated = [...condition];
                        updated[index].state = e.target.checked;
                        setCondition(updated);
                      }}
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </label>
                </div>
                <label htmlFor={data.name} className="text-mono font-bold">
                  {data.name}
                </label>
              </div>
            ))}
          </div>

          <div className="flex flex-col mx-4 my-auto gap-2 w-full ">
            <label htmlFor="" className="text-mono font-bold">
              Length
            </label>
            <div className="flex flex-row items-center gap-4 w-full">
              <input
                type="text"
                className="p-2 w-14 h-10 bg-light text-deep rounded-lg text-center text-lg font-mono font-bold"
                value={length}
                disabled
              />
              <input
                type="range"
                max="16"
                min="0"
                step="1"
                value={length}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLength(Number(e.target.value))
                }
                className="flex-1 h-2 appearance-none bg-light accent-yellow cursor-pointer rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
