import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Shop from './pages/Shop'
import Nav from './components/Nav'
import SignUpModal from './components/SignUpModal'
import ProductCard from './pages/ProductCard'
import CreateProduct from './components/seller/CreateProduct'
import GetProduct from './components/seller/GetProduct'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
      <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/product/:id' element = {<ProductCard/>}/>
            <Route path='/Product/create' element = {<CreateProduct/>}/>
            <Route path='/product/seller/get' element = {<GetProduct/>}/>
            <Route path='/wishlist' element = {<Wishlist/>}/>
            <Route path='/cart' element = {<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
