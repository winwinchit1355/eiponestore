import { Outlet } from "react-router-dom";
import ShopNavbar from "./Navbar";
import TopNavbar from "./TopNavbar";

function ShopLayout() {
    return ( 
        <div id='page'>
            <TopNavbar/>
            <ShopNavbar/>
            <Outlet/>
        </div>
     );
}

export default ShopLayout;