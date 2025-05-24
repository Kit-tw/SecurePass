import axios, { AxiosInstance } from "axios"
import { createContext, ReactNode, useContext, useEffect, useLayoutEffect, useState } from "react"

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  api: AxiosInstance; 
  loading: boolean;
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
 const [loading, setLoading] = useState(true);
 const api = axios.create({baseURL : import.meta.env.VITE_SecurePass_API,withCredentials: true,});
 const [token,setToken] = useState<string | null>(null);
 useEffect(()=>{
    const fetchMe = async () =>{
        try{
            console.log(token)
            const reponse = await api.get('/api/user/me');
            setToken(reponse.data.accessToken);
             console.log("Token restored from /api/me");
        }catch(error){
            setToken(null);
        } finally {
      setLoading(false);
    }
    }
    fetchMe();
 },[]);

 useLayoutEffect(()=>{
    console.log("This is config ",token);
    const authInterceptor = api.interceptors.request.use((config) =>{
        config.headers.Authorization = token ?  `Bearer ${token}` : config.headers.Authorization;
        console.log("This is config ",config.headers.Authorization)
        return config;
    });
    return ()=>{
        api.interceptors.request.eject(authInterceptor);
    }
 },[token]);

 useLayoutEffect(() =>{
    console.log("THIS TRIGGEr")
    const refreshInterceptor = api.interceptors.response.use((response) =>  response,async (error) =>{
        const originalRequest = error.config;
        if(error.response.status === 403 && !originalRequest._retry){
            originalRequest._retry = true;
            try{
                const response = await api.get('/api/user/refresh');
                setToken(response.data.accessToken);
                originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
                return api(originalRequest);
            }catch{
                setToken(null);
            }
        }
        return Promise.reject(error);
    })
    return () => api.interceptors.response.eject(refreshInterceptor);
 }, [api]);
 return (
    <AuthContext.Provider value={{ token, setToken, api ,loading}}>
      {children}
    </AuthContext.Provider>
  );
}