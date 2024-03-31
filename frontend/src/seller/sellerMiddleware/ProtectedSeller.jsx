import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { globalContext } from '../../Global_variable/context'


const Protected = ({ Component }) => {
  const token = Cookies.get('auth')
  const navigate = useNavigate()
  const { dispatch } = useContext(globalContext)

  useEffect(() => {
    if (!token) {
      navigate('/seller/login')
      
    }
    else {
        const headers = {
            authorization: `Bearer ${token}`
      }
      axios.get(`${import.meta.env.VITE_API_URL}/seller/me`, { headers })
        .then(res => {
            console.log(res.data)
            dispatch({ type: "set_sellerId", payload: res.data.seller._id})
            navigate('/seller')
        })
        .catch(err => {
          console.log(err)
          navigate('/seller/login')
        })
    }
  }, [token])


  return (
    <div>
      <Component />
    </div>
  )
}

export default Protected
