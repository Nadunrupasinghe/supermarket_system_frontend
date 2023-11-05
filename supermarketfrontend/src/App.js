import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/Landing Page/LandingPage";
import ProductView from "./Pages/Product View/ProductView";
import AddProduct from "./Pages/Add Product/AddProduct";
import OrderStatus from "./Pages/Order Status/OrderStatus";


function App(){
  return(
    <div className="App">
      {<BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/productview" element={<ProductView/>} />
            <Route path="/addproduct" element={<AddProduct/>} />
            <Route path="/orderstatus" element={<OrderStatus/>} />


          </Routes>

      </BrowserRouter>}
    </div>
  );
}

export default App;
