import { useState } from "react";
import bg from "../../assets/bg.jpg";
interface PopupProps {
  onClose: () => void;
}
interface FromState {
  state: "Register" | "Login" | "ForgetPassword";
}

export default function Popups({ onClose }: PopupProps) {
  const [popupform, setPopupform] = useState<FromState>({ state: "Register" });
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message ,setMessage] = useState<string>("");
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={onClose}
      ></div>

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
          onClick={onClose}
          aria-label="Close popup"
          className="absolute top-0 right-0 text-gray-500 hover:text-black text-3xl font-bold hidden lg:block hover:cursor-pointer"
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
            onClick={onClose}
            aria-label="Close popup"
            className="absolute top-4 right-4 text-white text-3xl font-bold lg:hidden hover:cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Form section */}

        <div className="w-full lg:w-[50%] flex flex-col my-5 text-black relative">
          <label className="font-mono text-xl font-bold text-center">
            {popupform.state} Form
          </label>

          <div className="flex flex-col gap-4 p-4">
            <label className="font-mono text-xl font-bold">Email</label>
            <input
              type="email"
              className="p-3 bg-light text-deep shadow-lg/30 text-lg rounded-3xl w-full"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {(popupform.state === "Login" ||
              popupform.state === "Register") && (
              <>
                <label className="font-mono text-xl font-bold">
                  Master Password
                </label>
                <input
                  type="password"
                  className="p-3 bg-light text-deep shadow-lg/30 text-lg rounded-3xl w-full"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </>
            )}
            {popupform.state === "Login" ? (
              <label
                className="font-mono text-xs text-deep hover:text-primary hover:cursor-pointer"
                onClick={() => setPopupform({ state: "ForgetPassword" })}
              >
                Forget password?
              </label>
            ) : (
              ""
            )}
            {message && <label
                  className="font-mono text-sm text-deep text-center text-red"
                >
                  {message}
                </label>}
            <div className="flex flex-col w-full justify-center">
              <button className="px-10 py-3 bg-yellow rounded-lg hover:text-accent hover:cursor-pointer">
                {popupform.state === "Login"
                  ? "Login"
                  : popupform.state === "Register"
                  ? "Signup"
                  : "Forget Password"}
              </button>
              {popupform.state === "Login" ? (
                <label
                  className="font-mono text-xs text-deep hover:text-primary hover:cursor-pointer "
                  onClick={() => setPopupform({ state: "Register" })}
                >
                  Don't have account?
                </label>
              ) : popupform.state === "Register" ? (
                <label
                  className="font-mono text-xs text-deep hover:text-primary hover:cursor-pointer "
                  onClick={() => setPopupform({ state: "Login" })}
                >
                  Already have account?
                </label>
              ) : (
                <label
                  className="font-mono text-xs text-deep hover:text-primary hover:cursor-pointer "
                  onClick={() => setPopupform({ state: "Login" })}
                >
                  Remember password?
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
