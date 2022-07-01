import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { putDokumen } from '../Redux/Laporan/action'

function Revisi() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { laporan, loading } = useSelector((state) => state.laporan)
  const navigate = useNavigate()
  const { register, handleSubmit, setValue } = useForm()

  const onUpdate = async ({ newfile, newnama, newtanggal, newemail, newnohp }) => {
    try {
      await dispatch(putDokumen(id, newfile, newnama, newtanggal, newemail, newnohp))
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {loading ? (
        ''
      ) : (
        <>
          <div className="mx-auto  px-3 py-5 w-[40%] rounded-lg h-full mt-[20px] space-y-4">
            <p className="font-[700] text-[32px] mb-4">REVISI</p>
            <p className="font-[700] text-[16px] italic mb-4">*Tolong klik setiap column agar file yang diinput benar terisi</p>
            <form action="" onSubmit={handleSubmit(onUpdate)} className="space-y-6">
              <div className="space-y-2">
                <p className="font-[700]">Nama Lengkap</p>
                <input type="text" placeholder="Nama Lengkap" id="nama_lengkap" value={laporan.nama_lengkap} name="nama_lengkap" {...register('newnama')} onChange={(e) => setValue('newnama', e.target.value)} className="w-full border mt-3 py-2 px-2 rounded-lg  border-[#2C3639]" />
                {/* <div className="border border-[#FF9F29] p-2 rounded-lg">
                  <p>{laporan.nama_lengkap}</p>
                </div> */}
              </div>
              <div className="space-y-2">
                <p className="font-[700]">Tanggal Lahir</p>
                {/* <div className="border border-[#FF9F29] p-2 rounded-lg">
                  <p>{laporan.tanggal_lahir}</p>
                </div> */}
                <input type="date" placeholder="Tanggal Lahir" id="tanggal_lahir" value={laporan.tanggal_lahir} name="tanggal_lahir" {...register('newtanggal')} onChange={(e) => setValue('newtanggal', e.target.value)} className="w-full border mt-3 py-2 px-2 rounded-lg  border-[#2C3639]" />
              </div>
              <div className="space-y-2">
                <p className="font-[700]">Email</p>
                <input type="email" placeholder="Email" {...register('newemail')} value={laporan.email} onChange={(e) => setValue('newemail', e.target.value)} className="w-full border mt-3 py-2 px-2 rounded-lg  border-[#2C3639]" />
                {/* <div className="border border-[#FF9F29] p-2 rounded-lg">
                  <p>{laporan.email}</p>
                </div> */}
              </div>
              <div className="space-y-2">
                <p className="font-[700]">Nomor Handphone</p>
                <input type="text" placeholder="No. Handphone" id="no_hp" name="no_hp" value={laporan.no_hp} {...register('newnohp')} onChange={(e) => setValue('newnohp', e.target.value)} className="w-full border mt-3 py-2 px-2 rounded-lg  border-[#2C3639]" />
                {/* <div className="border border-[#FF9F29] p-2 rounded-lg">
                  <p>{laporan.no_hp}</p>
                </div> */}
              </div>
              <div className="space-y-2">
                <p className="font-[700]">Catatan</p>
                <input type="text" placeholder="Catatan" value={laporan.catatan} disabled id="catatan" name="catatan" {...register('catatan')} onChange={(e) => setValue('catatan', e.target.value)} className="w-full border mt-3 py-2 px-2 rounded-lg  border-[#2C3639]" />
                {/* <div className="border border-[#FF9F29] p-2 rounded-lg">
                  <p>{laporan.catatan}</p>
                </div> */}
              </div>
              <div className="space-y-2">
                <p className="font-[700]">File</p>
                <textarea type="text" id="text" defaultValue={laporan.file} name="text" className="w-full   border mt-3 py-2 px-2 rounded-lg  border-[#2C3639]" {...register('newfile')} onChange={(e) => setValue('newfile', e.target.value)} />
              </div>
              {/* <div className="space-y-2">
                <p className="font-[700]">Status</p>
                <div className="border border-[#FF9F29] p-2 rounded-lg">
                  <p>{laporan.status}</p>
                </div>
              </div> */}

              <button type="submit" className="border border-[#FF9F29] w-full py-2 hover:bg-[#FF9F29] font-[700] hover:text-white  rounded-full">
                Upload
              </button>
              <button onClick={(e) => navigate('/')} className="border border-[#FF9F29] w-full py-2 hover:bg-[#FF9F29] font-[700] hover:text-white  rounded-full">
                Home
              </button>
            </form>
          </div>
        </>
      )}
    </>
  )
}

export default Revisi
