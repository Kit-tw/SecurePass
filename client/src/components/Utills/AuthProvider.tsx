import axios, { AxiosInstance } from "axios"
import { createContext, ReactNode, useContext, useEffect, useLayoutEffect, useState } from "react"

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  api: AxiosInstance; 
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const useAuth= () =>{
    const authContext = useContext(AuthContext);
    if(!authContext){
        throw new Error('useAuth must be used witnin a AuthProvider')
    }
    return authContext;
}
export const AuthProvider = ({ children }: { children: ReactNode }) =>{
 const api = axios.create({baseURL : import.meta.env.VITE_SecurePass_API,withCredentials: true,});
 const [token,setToken] = useState<string | null>(null);
 useEffect(()=>{
    const fetchMe = async () =>{
        try{
            const reponse = await api.get('/api/user/refresh');
            setToken(reponse.data.accessToken);
        }catch(error){
            setToken(null);
        }
    }
    fetchMe();
 },[]);

 useLayoutEffect(()=>{
    const authInterceptor = api.interceptors.request.use((config) =>{
        config.headers.Authorization = token ?  `Bearer ${token}` : config.headers.Authorization;
        console.log(config.headers.Authorization)
        return config;
    });
    return ()=>{
        api.interceptors.request.eject(authInterceptor);
    }
 },[token]);

 useLayoutEffect(() =>{
    const refreshInterceptor = api.interceptors.response.use((response) => response,async (error) =>{
        const originalRequest = error.config;
        if(error.response.status === 403 && !originalRequest._retry){
            try{
                const response = await axios.get('/api/user/refresh');
                setToken(response.data.accessToken);
                originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
                originalRequest._retry = true;
                return api(originalRequest);
            }catch{
                setToken(null);
            }
        }
        return Promise.reject(error);
    })
    return () => api.interceptors.response.eject(refreshInterceptor);
 }, []);
 return (
    <AuthContext.Provider value={{ token, setToken, api }}>
      {children}
    </AuthContext.Provider>
  );
}