import ShopApp from "./shop/App";
import AdminApp from "./admin/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./errors/NotFound";

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<ShopApp />}></Route>
            <Route path="/admin/*" element={<AdminApp />}></Route>
            <Route path="*" component={NotFound} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
