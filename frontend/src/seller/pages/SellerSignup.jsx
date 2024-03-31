import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookie from 'js-cookie'
import axios from 'axios'; 

const SellerSignup = () => {
  const [userId, setUserId] = useState()

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const shop_name = useRef()


  const navigate = useNavigate()

  const formHandler = async (e) => {
    e.preventDefault();
    if (name.current.value !== "" && email.current.value && password.current.value.length > 4) {
      try {
        const res1 = await axios.post("${import.meta.env.VITE_API_URL}/user/signup", {
          name: name.current.value,
          email: email.current.value,
          pass: password.current.value
        });
        const userIdFromResponse = res1.data.user._id; // Extract userId from response

        console.log("afsetyr6ryutyutytyutuyutu");
        console.log("UserId from response:", userIdFromResponse);

        setUserId(userIdFromResponse); // Update userId state variable

        console.log("Updated UserId:", userIdFromResponse);

        const res2 = await axios.post(`${import.meta.env.VITE_API_URL}/seller/create/${userIdFromResponse}`, {
          shop_name: shop_name.current.value
        });
        if (res2.status === 200) {
          navigate('/seller/login');
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }

  return (
    <div className='text-2xl tracking-wider space-y-12 m-10'>
      <p className='text-center text-3xl font-semibold'>Sign Up :</p>
      <form onSubmit={formHandler} className='flex flex-col items-center'>
        <div className='border-2 px-8 py-9 space-y-6 border-primary border-dashed '>
          <div className='space-y-2'>
            <p>User Name :</p>
            <input ref={name} className='outline-none border-2 border-slate-300' />
          </div>
          <div className='space-y-2'>
            <p>Email : </p>
            <input ref={email} className='outline-none border-2 border-slate-300' />
          </div>
          <div className='space-y-2'>
            <p>Password :</p>
            <input ref={password} className='outline-none border-2 border-slate-300' />
          </div>
          <div className='space-y-2'>
            <p>Shop Name :</p>
            <input ref={shop_name} className='outline-none border-2 border-slate-300' />
          </div>
          <div className='space-y-12 text-center'>
            <button className='py-2 bg-primary px-14 rounded-lg text-white' type='submit'>Sign Up</button>
          </div>
          <div className='text-center'>
            <span>Already a User ? </span>
            <span className='border-b-2 border-gray-700 text-xl cursor-pointer' onClick={() => navigate('/seller/login')}>LOGIN</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SellerSignup

