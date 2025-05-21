import { useState } from "react";
import bg from "../../assets/bg.jpg";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "./AuthProvider";
interface PopupProps {
  onClose: () => void;
}
interface FromState {
  state: "Register" | "Login" | "ForgetPassword";
}

interface FormPayload {
  email: string;
  password: string;
}

export default function Popups({ onClose }: PopupProps) {
  const {setToken , api} = useAuth();
  const [popupform, setPopupform] = useState<FromState>({ state: "Register" });
  const [form, setForm] = useState<FormPayload>({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState<string>("");

  const loginMutation = useMutation({
    mutationFn: async (payload: FormPayload) => {
      const reponse = await api.post(
        `${import.meta.env.VITE_SecurePass_API}/api/user/signin`,
        payload,
        { withCredentials: true }
      );
      return reponse.data;
    },
    onSuccess: (data) => {
      setMessage("");
      setToken(data.accessToken);
    },
    onError: (error : any) => {
      setMessage(error.response.data.message);
    },
  });

  const RegisMutation = useMutation({
    mutationFn: async (payload: FormPayload) => {
      const reponse = await api.post(
        `${import.meta.env.VITE_SecurePass_API}/api/user/signup`,
        payload
      );
      return reponse.data;
    },
    onSuccess: (data) => {
      //Todo : Continue to Login
      console.log("Success",data);
    },
    onError: (error : any) => {
      setMessage(error.response.data.message);
    },
  });
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email.trim() || !form.password.trim()) {
      setMessage("Email or Password is Empty");
      return;
    }
    // Todo : Regex Email
    console.log(  `${import.meta.env.VITE_SecurePass_API}/api/user/signin`)
    switch(popupform.state){
      case 'Login':
        return loginMutation.mutate(form);
      case 'Register':
        return RegisMutation.mutate(form);
      case 'ForgetPassword':
        return setMessage("Currently Not have this feature");
      default:
        return;
    }
  };
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Popup */}
      {/* Close button for desktop */}
      <form onSubmit={handleLogin}
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
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
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
            {message && (
              <label className="font-mono text-sm text-deep text-center text-red">
                {message}
              </label>
            )}
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
      </form>
    </>
  );
}
