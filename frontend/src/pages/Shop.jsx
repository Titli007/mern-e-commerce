import React, { useState, useEffect, useContext, Suspense } from 'react';
import axios from 'axios';
import ShopMaster from '../components/ShopMaster';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { globalContext } from '../Global_variable/context';
import Loading from '../assets/animation/loading';


// Lazy load the EachProduct component
const LazyEachProduct = React.lazy(() => import('../components/EachProduct'));

// Fallback component to render while LazyEachProduct is being loaded
const LoadingFallback = () =>   <div><Loading/></div>;
        

const Shop = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [allWishlist, setAllWishlist] = useState([]);
  const { state } = useContext(globalContext);
  const [userId, setUserId] = useState();

  useEffect(() => {
    setUserId(state.userId);
  }, [state.userId]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');
  console.log(category);

  useEffect(() => {
    const getProductUrl = category
      ? `${import.meta.env.VITE_API_URL}/product/get?category=${category}`
      : `${import.meta.env.VITE_API_URL}/product/get`;
    axios
      .get(getProductUrl)
      .then((res) => {
        setAllProducts(res.data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (userId) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/wishlist/get/${userId}`)
        .then((res) => {
          const productIds = res.data.existingWishlist.products.map((data) => data.product_id._id);
          setAllWishlist(productIds);
        })
        .catch((error) => console.log(error));
    }
  }, [userId]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[1400px] w-full">
        <div>
          <ShopMaster />
        </div>
        <div>
          {allProducts.length > 0 && (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 my-10 mx-3">
              <Suspense fallback={<LoadingFallback />}>
                {allProducts.map((product, index) => (
                  <LazyEachProduct
                    key={index}
                    product={product}
                    button="Add To Cart"
                    isWishListed={allWishlist.includes(product._id)}
                  />
                ))}
              </Suspense>
            </div>
          )}
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Shop;


// {allProducts.length>0&&
//     <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 my-10 mx-3'>
//         {allProducts.map((product,index)=>{
//         return(
//             <EachProduct key={index} product={product} button="Add To Cart" isWishListed={allWishlist.includes(product._id)}/>
//         )
//         })}
//     </div>}