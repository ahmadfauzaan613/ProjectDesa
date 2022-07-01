import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import background from '../../Assets/BackgroundAdmin.png'

function Login() {
  const [showPassword, setPassword] = useState(false)
  let navigate = useNavigate()
  return (
    <>
      <div className="relative flex">
        <img src={background} alt="" className=" w-full h-[10px] min-h-screen " />
      </div>
      <div className="bg-white absolute top-0 w-[25%] px-[20px] min-h-screen pt-[17%]">
        <p className="text-center font-[700] text-[28px]">LOGIN ADMIN</p>
        <form action="" className="mt-5">
          <input type="text" placeholder="username" className="w-full rounded-lg my-2 px-2 py-2 border border-[#2C3639]" />
          <div className="relative py-2">
            <input type={!showPassword ? 'password' : 'text'} placeholder="password" className="w-full rounded-lg my-2 px-2 py-2 border border-[#2C3639]" />
            <button onClick={() => setPassword(!showPassword)} className="absolute top-[35%] right-[5%] font-[700]">
              LIHAT
            </button>
          </div>
          <button onClick={() => navigate('/admin/dashboard')} className="bg-[#243A73] w-full p-2 mt-3 rounded-md text-white font-[700]">
            LOGIN
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
