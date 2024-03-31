import React, {useRef, useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { globalContext } from '../../Global_variable/context'
import Cookie from 'js-cookie'

const SellerLogin = () => {
    const email = useRef()
    const pass = useRef()
    const [loginData, setLoginData] = useState([])
    const { dispatch } = useContext(globalContext)
    const navigate = useNavigate()
    const [userId, setUserId] = useState()

    async function formHandler(e) {
        e.preventDefault();
        
    
        console.log(email.current.value, pass.current.value);
    
        if (email.current.value !== "" && pass.current.value.length > 4) {
            try {
                const res = await axios.post(`${import.meta.env.VITE_API_URL}/seller/login`, {
                    email: email.current.value,
                    pass: pass.current.value
                });
                console.log(res.data)
                Cookie.set('auth', res.data.token)
                if(res.data.success === true) {
                    console.log(res.data)
                    navigate('/seller')
                }
            } catch (error) {
                console.log(error);
            }

        }
    }
    
  return (
    <div className='text-2xl tracking-wider space-y-6 m-10'>

        <p className='text-center text-3xl font-semibold'>Login As a Seller :</p>
        <form onSubmit={formHandler} className='flex flex-col items-center '>
            <div className='border-2 px-8 pb-9 space-y-6 border-primary border-dashed '>
                <div className='space-y-2'>
                </div>
                <div className='space-y-2'>
                    <p>Email : </p>
                    <input ref={email} className='outline-none border-2 border-slate-300' type='email'/>
                </div>
                <div className='space-y-2'>
                    <p>Password :</p>
                    <input ref={pass} className='outline-none border-2 border-slate-300' type='password' />
                </div>
                <div className='space-y-12 text-center'>
                    <button className='py-2 bg-primary px-14 rounded-lg text-white' type='submit'>Login</button>
                </div>
                <div className='text-center'>
                    <span>New Seller?</span>
                    <span className='border-b-2 border-gray-700 text-xl cursor-pointer' onClick={() => navigate('/seller/signup')}> SIGNUP</span>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SellerLogin

