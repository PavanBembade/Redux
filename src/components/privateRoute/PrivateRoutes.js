import { useSelector } from "react-redux";
import { Outlet,Navigate } from "react-router-dom";

const PrivateRoutes=()=>{
    const isAuthenticated =useSelector((state)=>state.auth.isAuthenticated);
    // let auth ={'token':false}
    return(
        // auth.token
         isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes;