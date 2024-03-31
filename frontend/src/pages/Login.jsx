import React, {useRef, useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookie from 'js-cookie'
import axios from 'axios'
import { globalContext } from '../Global_variable/context'

const Login = () => {
    
    const email = useRef()
    const pass = useRef()
    const [loginData, setLoginData] = useState([])
    const navigate = useNavigate()
    const { dispatch } = useContext(globalContext)

    const formHandler = async(e) => {
        e.preventDefault()
        // console.log(email.current.value, pass.current.value)
         
        if(email.current.value !== "" &&  pass.current.value.length > 4){
            await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, {
                email: email.current.value,
                pass: pass.current.value
            })
            .then(res => {
                console.log(res.data)
                dispatch({ type: "set_userId", payload: res.data.existingUser._id})
                dispatch({ type: "set_name", payload: res.data.existingUser.name})
                Cookie.set('auth', res.data.token)
                navigate('/')
            })
            .catch(err => {console.log(err)})
            }
        }

    

    return (
        <div className='text-2xl tracking-wider space-y-6 m-10'>

            <p className='text-center text-3xl font-semibold'>Login :</p>
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
                        <span>New User?</span>
                        <span className='border-b-2 border-gray-700 text-xl cursor-pointer' onClick={() => navigate('/auth/signup')}> SIGNUP</span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
