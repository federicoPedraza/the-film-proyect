import { FC } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/navbar";

const Layout:FC<{}> = () =>{
    return (<>
            <Navbar />
            <Outlet /> 
          </>)
}
export default Layout