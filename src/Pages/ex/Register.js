import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import background from '../Assets/Background.png'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { RegisterUser } from '../Redux/User/action'

function Register() {
  const [showPassword, setPassword] = useState(false)
  let navigate = useNavigate()

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const { register, handleSubmit, setValue } = useForm()

  const onSubmit = async ({ email, password, nama_lengkap }) => {
    try {
      await dispatch(RegisterUser(email, password, nama_lengkap))
      alert('berhasil mendaftar, silahkan login')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="relative flex">
        <img src={background} alt="" className=" w-full h-[10px] min-h-screen " />
      </div>
      <div className="bg-white absolute top-0 w-[25%] px-[20px] min-h-screen pt-[15%]">
        <p className="text-center font-[700] text-[28px]">PENDAFTARAN</p>
        <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-5">
          <input type="text" placeholder="Nama Lengkap" name="nama_lengkap" id="nama_lengkap" {...register('nama_lengkap')} onChange={(e) => setValue('nama_lengkap', e.target.value)} className="w-full rounded-lg my-2 px-2 py-2 border border-[#2C3639]" />
          <input type="email" placeholder="Email" id="email" name="email" {...register('email')} onChange={(e) => setValue('email', e.target.value)} className="w-full rounded-lg my-2 px-2 py-2 border border-[#2C3639]" />
          <div className="relative py-2">
            <input type={!showPassword ? 'password' : 'text'} placeholder="Password" name="password" id="password" {...register('password')} onChange={(e) => setValue('password', e.target.value)} className="w-full rounded-lg my-2 px-2 py-2 border border-[#2C3639]" />
            <button onClick={() => setPassword(!showPassword)} className="absolute top-[35%] right-[5%] font-[700]">
              LIHAT
            </button>
          </div>
          <button type="submit" className="bg-[#FF9F29] w-full p-2 mt-3 rounded-md text-white font-[700]">
            PENDAFTARAN
          </button>
          <button onClick={() => navigate('/')} className="border hover:bg-[#FF9F29] text-[#FF9F29] hover:text-white border-[#FF9F29] w-full p-2 mt-3 rounded-md font-[700]">
            LOGIN
          </button>
        </form>
      </div>
    </>
  )
}

export default Register
