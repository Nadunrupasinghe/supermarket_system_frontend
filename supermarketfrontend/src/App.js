import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/Landing Page/LandingPage';
import ProductView from './Pages/Product View/ProductView';
import AddProduct from './Pages/Add Product/AddProduct';
import OrderStatus from './Pages/Order Status/OrderStatus';
import SignUpPage from './Pages/SignUp Page/SignUpPage';
import SignInPage from './Pages/SignIn Page/SignInPage';
import EditProduct from './Pages/Edit Product/EditProduct';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import ProductCategory from './Pages/View Product Category/ProductCategory';

function App() {
  return (
    <div className='App'>
      {
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/productview' element={<ProductView />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/orderstatus' element={<OrderStatus />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/signin' element={<SignInPage />} />
            <Route path='/editproduct' element={<EditProduct />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/productcategory' element={<ProductCategory />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
