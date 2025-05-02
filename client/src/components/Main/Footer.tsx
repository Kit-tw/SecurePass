import GithubIcon from "../../assets/GithubIcon";
import GoogleIcon from "../../assets/GoogleIcon";
import LinkedinIcon from "../../assets/Linkedinicon";

export default function FooterComponents() {
  const width = 35;
  const height = 35;

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
    <footer className="bg-deep text-light w-full mt-auto">
      <div className="mx-0 lg:mx-20 py-6 px-4">
        <hr className="bg-light mb-4" />
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between flex-wrap gap-6">
          <div className="flex flex-col max-w-md">
            <label className="text-lg font-mono font-bold text-yellow">SecurePass</label>
            <p className="text-lg">
              A website that helps you create strong passwords, bench pass, manage passwords. Easy to use and clean UI. Created by Kittikhun.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-lg text-secondary font-mono font-bold text-center">Contact</label>
            {socialContract.map((data, index) => (
              <div key={index} className="flex flex-row items-center gap-2">
                {data.Icon}
                <span className="text-lg">{data.contract}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg text-light font-mono font-bold text-center">Pages</label>
            <p className="text-lg">Password Generator</p>
            <p className="text-lg">Bench Detector</p>
            <p className="text-lg">Login</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
