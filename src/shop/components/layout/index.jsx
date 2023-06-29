import { Outlet } from "react-router-dom";
import ShopNavbar from "./Navbar";

function ShopLayout() {
    return ( 
        <div id='page'>
            <ShopNavbar/>
            <Outlet/>
        </div>
     );
}

export default ShopLayout;