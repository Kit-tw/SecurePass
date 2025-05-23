import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/AuthProvider"

export const ProtectedRoute = () =>{
    const {token,loading} = useAuth();
    if (loading) return <div>Loading...</div>; 
    return token ? <Outlet/> : <Navigate to="/passwordgenerate" replace/>
}