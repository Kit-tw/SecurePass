
import { TypeAnimation } from 'react-type-animation'
import './App.css'
import logo from './assets/logo.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function App() {
  const [duration, setDuration] = useState(5);
  const navigate = useNavigate()


  useEffect(() => {
    console.log('Timer started');
    const timerId = setInterval(() => {
      setDuration(prev => {
        if (prev <= 1) {
          clearInterval(timerId);
          console.log("Timer is done")
          navigate("/passwordgenerate");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  
    return () => clearInterval(timerId);
  }, []);
  
  return (
    <header className='flex flex-col justify-center items-center h-screen w-screen'>
      <div className="flex flex-row relative">
    <label htmlFor="" className='text-primary text-6xl md:text-8xl  lg:text-9xl font-bold animate-slideUp text-shadow-lg/50 text-shadow-accent opacity-0'>SecurePass</label>
    <img src={logo} alt="logo" className='animate-slideUp opacity-0 h-[75px] w-[100px] md:h-[125px] md:w-[150px] lg:h-[150px] lg:w-[200px] '/>
     </div>
    <div className="p-4 h-0 lg:h-[50px]">
    <TypeAnimation sequence={[2000,"Made By Kittkhun"]} speed={1} className='text-primary text-sm md:text-3xl lg:text-4xl font-bold' repeat={3} cursor={false} />
    </div>
    </header>
  )
}

export default App
