import { useReducer } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import Home from './pages/Home';
import Shop from './pages/Shop';
import Nav from './components/Nav';
import ProductCard from './pages/ProductCard';
import CreateProduct from './seller/pages/CreateProduct';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import SellerHome from './seller/pages/SellerHome';
import SellerHeader from './seller/components/SellerHeader';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Protected from './middleware/Protected';
import { globalContext, initialState, reducer } from './Global_variable/context'
import SellerSignup from './seller/pages/SellerSignup';
import SellerLogin from './seller/pages/SellerLogin';
import ProtectedSeller from './seller/sellerMiddleware/ProtectedSeller'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <globalContext.Provider value={{state:state , dispatch: dispatch}}>
      <BrowserRouter>
        <div className="w-full h-full">
          <NavComponent/>
          <Routes>
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Protected Component={Shop} />} />
            <Route path="/product/:id" element={<Protected Component={ProductCard} />} />
            <Route path="/wishlist" element={<Protected Component={Wishlist} />} />
            <Route path="/cart" element={<Protected Component={Cart} />} />
            <Route path="/seller" element={<ProtectedSeller Component={SellerHome} />} >
              <Route path='' element={<SellerHeader/>}/>
              <Route path='create' element={<CreateProduct/>}/>
            </Route>
            <Route path='/seller/login' element={<SellerLogin/>}/>
            <Route path='/seller/signup' element={<SellerSignup/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </globalContext.Provider>
  );
}

function NavComponent() {
  const location = useLocation();
  return location.pathname.startsWith('/seller') || location.pathname.startsWith('/auth') ? null : <Nav />;
}


export default App;
