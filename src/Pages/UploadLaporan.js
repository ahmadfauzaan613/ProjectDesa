import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postDokumen } from '../Redux/Laporan/action'

function UploadLaporan() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { laporan } = useSelector((state) => state.laporan)
  const { register, handleSubmit, setValue } = useForm()

  const onSubmit = async ({ id, nama_lengkap, tanggal_lahir, email, no_hp, file, status }) => {
    try {
      await dispatch(postDokumen(id, nama_lengkap, tanggal_lahir, email, no_hp, file, status))
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <div className="mt-[40px]">
          <button className="pl-[20%] text-[#FF9F29] font-[700] cursor-pointer hover:underline" onClick={() => navigate('/')}>
            {`<`} Kembali ke home
          </button>
          <form action="" onSubmit={handleSubmit(onSubmit)} className="px-[20%] mt-[2%]">
            <div>
              <label>Nama Lenkap</label>
              <input type="text" placeholder="Nama Lengkap" id="nama_lengkap" name="nama_lengkap" {...register('nama_lengkap')} onChange={(e) => setValue('nama_lengkap', e.target.value)} className="w-full border mt-3 py-2 px-2 rounded-lg  border-[#2C3639]" />
            </div>
            <div className="mt-6">
              <label>Tanggal Lahir</label>
              <input type="date" placeholder="Tanggal Lahir" id="tanggal_lahir" name="tanggal_lahir" {...register('tanggal_lahir')} onChange={(e) => setValue('tanggal_lahir', e.target.value)} className="w-full border mt-3 py-2 px-2 rounded-lg  border-[#2C3639]" />
            </div>
            <div className="mt-6">
              <label>Email</label>
              <input type="email" placeholder="Email" {...register('email')} onChange={(e) => setValue('email', e.target.value)} className="w-full border mt-3 py-2 px-2 rounded-lg  border-[#2C3639]" />
            </div>
            <div className="mt-6">
              <label>No. Handphone</label>
              <input type="text" placeholder="No. Handphone" id="no_hp" name="no_hp" {...register('no_hp')} onChange={(e) => setValue('no_hp', e.target.value)} className="w-full border mt-3 py-2 px-2 rounded-lg  border-[#2C3639]" />
            </div>
            <div className="mt-6">
              <label>Input Text Hukum Desa</label>
              <textarea type="text" id="text" name="text" className="w-full   border mt-3 py-2 px-2 rounded-lg  border-[#2C3639]" {...register('file')} />
            </div>
            <button type="submit" className="bg-[#FF9F29] w-full text-white font-[700] rounded-full h-[50px] mt-9">
              Upload
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default UploadLaporan
