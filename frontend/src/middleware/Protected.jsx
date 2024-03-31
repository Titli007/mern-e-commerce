import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { globalContext } from '../Global_variable/context'


const Protected = ({ Component }) => {
  console.log(
    "aadsad"
  )
  const token = Cookies.get('auth')
  const navigate = useNavigate()
  const { dispatch } = useContext(globalContext)

  useEffect(() => {
    if (!token) {
      navigate('/auth/login')
      console.log("token" , token)
    }
    else {
      const headers = {
        authorization: `Bearer ${token}`
      }
      axios.get(`${import.meta.env.VITE_API_URL}/user/me`, { headers })
        .then(res => {
          dispatch({ type: "set_userId", payload: res.data.user_id})
        })
        .catch(err => {
          console.log(err)
          navigate('/auth/login')
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
