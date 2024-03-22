import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import Home from './pages/Home';
import Shop from './pages/Shop';
import Nav from './components/Nav';
import SignUpModal from './components/SignUpModal';
import ProductCard from './pages/ProductCard';
import CreateProduct from './seller/pages/CreateProduct';
import GetProduct from './seller/components/GetProductOfSeller';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import SellerHome from './seller/pages/SellerHome';
import SellerNav from './seller/components/SellerNav';
import SideBar from './seller/components/SideBar';
import SellerHeader from './seller/components/SellerHeader';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-full">
        <NavComponent/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductCard />} />
          <Route path="/product/seller/get" element={<GetProduct />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/get" element={<Shop />} />
          <Route path="/seller" element={<SellerHome />} >
            <Route path='' element={<SellerHeader/>}/>
            <Route path='create' element={<CreateProduct/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function NavComponent() {
  const location = useLocation();
  return location.pathname.startsWith('/seller') ? null : <Nav />;
}

export default App;
