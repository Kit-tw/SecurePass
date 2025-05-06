interface Props {
    logo: string;
    company: string;
    detail: string;
    data: string;
  }
  
  export default function BreachContentComponent({ logo, company, detail, data }: Props) {
    return (
      
        <div className="flex flex-col lg:flex-row bg-lightred rounded-lg shadow-md p-4 gap-4 w-full">
          <div className="flex flex-col justify-center items-center">
            <img src={logo} alt={`${company} logo`} className="max-w-[150px] mb-2 max-h-[150px]" />
            <label className="text-lg text-black font-mono font-bold">{company}</label>
          </div>
          <div className="flex flex-col justify-between my-5 ">
          <span className="font-bold">Detail</span>
            <span className="mb-4">{detail}</span>
            <div className="flex flex-col my-4">
              <span className="font-bold">Exposed Data</span>
              <span>{data}</span>
            </div>
          </div>
      </div>
    );
  }