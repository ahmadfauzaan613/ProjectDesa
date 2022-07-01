import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { FetchLaporan, putAdminDokumen, putDokumen } from '../../Redux/Laporan/action'
import { useForm } from 'react-hook-form'

function AdminRevisi() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { laporan, loading } = useSelector((state) => state.laporan)
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(FetchLaporan(id))
  }, [])

  const { register, handleSubmit, setValue } = useForm()

  const onUpdate = async ({ newnama, newtanggal, newemail, newnohp, newfile, newcatatan, newstatus }) => {
    try {
      await dispatch(putAdminDokumen(id, newnama, newtanggal, newemail, newnohp, newfile, newcatatan, newstatus))
      navigate('/admin/dashboard')
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
            <p className="font-[700] text-[32px] mb-4">CEK LAPORAN</p>
            <p className="font-[700] text-[16px] italic mb-4">*Tolong klik setiap column agar file yang diinput benar terisi</p>
            <form action="" onSubmit={handleSubmit(onUpdate)} className="space-y-6">
              <div className="space-y-2">
                <p className="font-[700]">Nama Lengkap</p>
                {/* <div className="border border-[#FF9F29] p-2 rounded-lg">
                  <p>{laporan.nama_lengkap}</p>
                </div> */}
                <input type="text" placeholder="Nama Lengkap" id="nama_lengkap" value={laporan.nama_lengkap} name="nama_lengkap" {...register('newnama')} onChange={(e) => setValue('newnama', e.target.value)} className="w-full border mt-3 py-2 px-2 rounded-lg  border-[#2C3639]" />
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
                {/* <div className="border border-[#FF9F29] p-2 rounded-lg">
                  <p>{laporan.email}</p>
                </div> */}
                <input type="email" placeholder="Email" id="email" {...register('newemail')} value={laporan.email} onChange={(e) => setValue('newemail', e.target.value)} className="w-full border mt-3 py-2 px-2 rounded-lg  border-[#2C3639]" />
              </div>
              <div className="space-y-2">
                <p className="font-[700]">Nomor Handphone</p>
                {/* <div className="border border-[#FF9F29] p-2 rounded-lg">
                  <p>{laporan.no_hp}</p>
                </div> */}
                <input type="text" placeholder="No. Handphone" id="no_hp" name="no_hp" value={laporan.no_hp} {...register('newnohp')} onChange={(e) => setValue('newnohp', e.target.value)} className="w-full border mt-3 py-2 px-2 rounded-lg  border-[#2C3639]" />
              </div>
              <div className="space-y-2">
                <p className="font-[700]">Isi Laporan</p>
                {/* <div className="border border-[#FF9F29] p-2 rounded-lg">
                  <p>{laporan.file}</p>
                </div> */}
                <textarea type="text" id="text" value={laporan.file} name="text" className="w-full   border mt-3 py-2 px-2 rounded-lg  border-[#2C3639]" {...register('newfile')} onChange={(e) => setValue('newfile', e.target.value)} />
              </div>
              <div className="space-y-2">
                <p className="font-[700]">Status</p>
                <select name="status" id="status" onChange={(e) => setValue('newstatus', e.target.value)} {...register('newstatus')} defaultValue={laporan.status} className="w-full p-2 border border-[#FF9F29] rounded-lg">
                  <option>Waiting</option>
                  <option value="Accept">Accept</option>
                  <option value="Reject">Reject</option>
                </select>
              </div>
              <div className="mt-6">
                <label>Catatan</label>
                <textarea type="text" placeholder="Catatan" defaultValue={laporan.catatan} id="catatan" name="catatan" {...register('newcatatan')} onChange={(e) => setValue('newcatatan', e.target.value)} className="w-full border mt-3 py-2 px-2 rounded-lg  border-[#2C3639]" />
              </div>
              <button type="submit" className="border bg-[#FF9F29] w-full py-2 hover:bg-[#FF9F29] font-[700] text-white  rounded-full">
                Revisi
              </button>
              <button onClick={(e) => navigate('/admin/dashboard')} className="border border-[#FF9F29] w-full py-2 hover:bg-[#FF9F29] font-[700] hover:text-white  rounded-full">
                Home
              </button>
            </form>
          </div>
        </>
      )}
    </>
  )
}

export default AdminRevisi
