import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import background from '../Assets/Background.png'
import { LoginUser } from '../Redux/User/action'

function Register() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const { register, handleSubmit, setValue } = useForm()
  const [showErrorAuth, setShowErrorAuth] = useState(false)

  const onSubmit = async ({ email, password }) => {
    try {
      await dispatch(LoginUser(email, password))
      setShowErrorAuth(false)
      navigate('/')
    } catch (error) {
      console.log(error)
      setShowErrorAuth(true)
    }
  }

  const [showPassword, setPassword] = useState(false)
  let navigate = useNavigate()
  return (
    <>
      <div className="relative flex">
        <img src={background} alt="" className=" w-full h-[10px] min-h-screen " />
      </div>
      <div className="bg-white absolute top-0 w-[25%] px-[20px] min-h-screen pt-[18%]">
        <p className="text-center font-[700] text-[28px]">LOGIN</p>

        <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-5">
          {showErrorAuth ? (
            <>
              <p className="font-semibold text-[#E7403A]">Incorrect Username or Password</p>
            </>
          ) : (
            ''
          )}
          <input type="email" {...register('email')} onChange={(e) => setValue('email', e.target.value)} placeholder="Email" name="email" id="email" className="w-full rounded-lg my-2 px-2 py-2 border border-[#2C3639]" />
          <div className="relative py-2">
            <input type={!showPassword ? 'password' : 'text'} {...register('password')} onChange={(e) => setValue('password', e.target.value)} name="password" id="password" placeholder="Password" className="w-full rounded-lg my-2 px-2 py-2 border border-[#2C3639]" />
            <button onClick={() => setPassword(!showPassword)} className="absolute top-[35%] right-[5%] font-[700]">
              LIHAT
            </button>
          </div>
          <p onClick={() => navigate('/register')} className="text-center uppercase cursor-pointer font-[400] my-4 text-[#FF9F29] hover:font-[700] hover:underline">
            Buat Akun Baru
          </p>
          <button type="submit" className="bg-[#FF9F29] w-full p-2 mt-3 rounded-md text-white font-[700]">
            LOGIN
          </button>
        </form>
      </div>
    </>
  )
}

export default Register
