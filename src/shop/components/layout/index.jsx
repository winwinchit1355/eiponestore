import { Outlet } from "react-router-dom";
import ShopNavbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import { apiCall } from "../../services/apiService";

function ShopLayout() {
    console.log(apiCall.get('categories'));
    return ( 
        <div id='page'>
            <TopNavbar/>
            <ShopNavbar/>
            <Outlet/>
        </div>
     );
}

export default ShopLayout;