import React, { useState, useEffect, useContext } from 'react';
import { FaHeart } from 'react-icons/fa6';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiMenu, FiX, FiLogIn } from 'react-icons/fi';
import Cookies from 'js-cookie';
import { AiTwotoneShop } from 'react-icons/ai';
import { globalContext } from '../Global_variable/context';

const Nav = () => {
  const navigate = useNavigate();
  const { state } = useContext(globalContext);
  const [userId, setUserId] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setUserId(state.userId);
  }, [state.userId]);

  function handleLogout() {
    Cookies.remove('auth');
    console.log('log out');
    location.reload();
    navigate('/');
  }

  function handleLogin() {
    navigate('/auth/login');
  }

  function sellerHandler() {
    navigate('/seller/login');
  }

  return (
    <div className="flex justify-center shadow-lg mb-5">
      <div className="max-w-[1400px] w-full">
        <div className="flex w-full py-5">
          <div className="flex justify-between items-baseline w-full p-4 text-xl">
            <div className="cursor-pointer hover:text-primary md:w-1/4" onClick={() => navigate('/')}>
              <span>FurniZone</span>
            </div>
            {/* Hamburger Menu Icon */}
            <div className="sm:hidden">
              {isMenuOpen ? (
                <FiX className="cursor-pointer text-2xl text-primary" onClick={() => setIsMenuOpen(false)} />
              ) : (
                <FiMenu className="cursor-pointer text-2xl text-primary" onClick={() => setIsMenuOpen(true)} />
              )}
            </div>
            {/* Desktop Menu */}
            <div className="hidden sm:flex md:flex md:justify-between md:w-full">
              <span className="cursor-pointer hover:text-primary" onClick={() => navigate('/')}>Home</span>
              <span className="cursor-pointer hover:text-primary" onClick={() => navigate('/shop')}>Shop</span>
              <span className="cursor-pointer" onClick={() => navigate('/wishlist')}>
                <FaHeart color="red" size={25} />
              </span>
              <span className="cursor-pointer hover:text-primary">
                <MdOutlineShoppingCart size={25} onClick={() => navigate(`/cart`)} />
              </span>
              <div className="cursor-pointer hover:text-primary hover:opacity-55 flex items-center">
                <span><AiTwotoneShop size={25} /></span>
                <span className="px-2  text-primary font-semibold" onClick={sellerHandler}>Become A Seller?</span>
              </div>
              {
              userId?
              <div className='cursor-pointer hover:text-primary flex items-center text-lg' onClick={handleLogout}>
                <span className='px-3'><FiLogOut size={25} /></span>
                <span className='mb-1'>Log Out</span>
              </div>
              :
              <div className='cursor-pointer hover:text-primary flex items-center text-lg' onClick={handleLogin}>
                <span className='px-3'><FiLogIn size={25} /></span>
                <span className='mb-1'>Login</span>
              </div>
            }
            </div>
            {/* Mobile Menu */}
            <div className={`sm:hidden fixed top-16 inset-x-0 bg-bg z-50 ml-20 ${isMenuOpen ? 'block' : 'hidden'}`}>
              <div className="flex flex-col p-4 space-y-2">
                <span className="cursor-pointer hover:text-primary" onClick={() => navigate('/')}>Home</span>
                <span className="cursor-pointer hover:text-primary" onClick={() => navigate('/shop')}>Shop</span>
                <span className="cursor-pointer" onClick={() => navigate('/wishlist')}>
                  <FaHeart color="red" size={25} />
                </span>
                <span className="cursor-pointer hover:text-primary">
                  <MdOutlineShoppingCart size={25} onClick={() => navigate(`/cart`)} />
                </span>
                <div className="cursor-pointer hover:text-primary hover:opacity-55 flex items-center" onClick={sellerHandler}>
                  <span><AiTwotoneShop size={25} /></span>
                  <span className="px-2  text-primary font-semibold">Become A Seller?</span>
                </div>
                {userId ? (
                  <div className="cursor-pointer hover:text-primary flex items-center text-lg" onClick={handleLogout}>
                    <span className="px-3"><FiLogOut size={25} /></span>
                    <span className="mb-1">Log Out</span>
                  </div>
                ) : (
                  <div className="cursor-pointer hover:text-primary flex items-center text-lg" onClick={handleLogin}>
                    <span className=""><FiLogIn size={25} /></span>
                    <span className="mb-1">Login</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
