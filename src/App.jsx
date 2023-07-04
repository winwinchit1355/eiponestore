import ShopApp from "./shop/App";
import AdminApp from "./admin/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./errors/NotFound";
import { Provider } from "react-redux";
import { store } from "./shop/store/index";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ShopApp />}></Route>
          <Route path="/admin/*" element={<AdminApp />}></Route>
          <Route path="*" component={NotFound} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
