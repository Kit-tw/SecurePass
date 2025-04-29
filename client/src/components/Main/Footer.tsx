import GithubIcon from "../../assets/GithubIcon";
import GoogleIcon from "../../assets/GoogleIcon";
import LinkedinIcon from "../../assets/Linkedinicon";

export default function FooterComponents() {
  let width = 35;
  let height = 35;
  const socialContract = [
    {
      name: "Linkedin",
      Icon: <LinkedinIcon width={width} height={height} />,
      contract: "kittikhun.tw",
    },
    {
      name: "Github",
      Icon: <GithubIcon width={width} height={height} />,
      contract: "kittikhun.tw",
    },
    {
      name: "Email",
      Icon: <GoogleIcon width={width} height={height} />,
      contract: "kittikhun.tw@gmail.com",
    },
  ];
  return (
    <footer className="flex bg-deep">
      <div className="mx-0 lg:mx-20 w-full my-15">
        <hr className="bg-light"></hr>
        <div className="flex flex-row p-2 justify-center sm:justify-between  flex-wrap gap-4">
          <div className="flex flex-col">
            <label htmlFor="" className="text-lg font-mono font-bold text-yellow">
              SecurePass
            </label>
            <p className="text-lg text-light">
              A website that help you create your own strong password, bench
              pass, manage password. Easy to use and clean UI. Create By
              Kittikhun
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="text-lg text-secondary font-mono font-bold text-center">
              Contract
            </label>
            {socialContract &&
              socialContract.map((data) => (
                <div className="flex flex-row gap-2">
                  {data.Icon}
                  <label htmlFor="" className="text-lg text-light">
                    {data.contract}
                  </label>
                </div>
              ))}
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="text-lg text-light font-mono font-bold text-center">
              Page
            </label>
            <p className="text-lg text-light">Password Generator</p>
            <p className="text-lg text-light">Bench Detector</p>
            <p className="text-lg text-light">Login</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
