import { useState } from "react";
import bg from "../../assets/bg.jpg";

export default function Popups() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>

      {/* Popup */}
      {/* Close button for desktop */}
      <div
        role="dialog"
        aria-modal="true"
        className="fixed z-50 flex flex-col lg:flex-row bg-white rounded-lg 
                   w-full h-full 
                   lg:w-auto lg:h-auto 
                   lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2"
      >
                  <button
            onClick={() => setIsOpen(false)}
            aria-label="Close popup"
            className="absolute top-0 right-0 text-gray-500 hover:text-black text-3xl font-bold hidden lg:block"
          >
            &times;
          </button>
        {/* Image */}
        <div className="w-full lg:w-[50%] overflow-hidden relative">
          <img
            src={bg}
            alt=""
            className="w-full h-[120%] opacity-80 object-cover"
          />

          {/* Close button on image for mobile */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close popup"
            className="absolute top-4 right-4 text-white text-3xl font-bold lg:hidden"
          >
            &times;
          </button>
        </div>

        {/* Form section */}
        <div className="w-full lg:w-[50%] flex flex-col my-5 text-black relative">


          <label className="font-mono text-xl font-bold text-center">
            Login Form
          </label>

          <div className="flex flex-col gap-4 p-4">
            <label className="font-mono text-xl font-bold">Email</label>
            <input
              type="email"
              className="p-3 bg-light text-deep shadow-lg/30 text-lg rounded-3xl w-full"
              placeholder="Enter email"
              required
            />

            <label className="font-mono text-xl font-bold">Master Password</label>
            <input
              type="password"
              className="p-3 bg-light text-deep shadow-lg/30 text-lg rounded-3xl w-full"
              placeholder="Enter password"
              required
            />
    <label className="font-mono text-xs text-deep ">Forget password?</label>
            <div className="flex w-full justify-center">
              <button className="px-10 py-3 bg-yellow rounded-lg">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
