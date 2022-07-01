import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { FetchLaporan } from '../Redux/Laporan/action'

function DetailLaporan() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { laporan, loading } = useSelector((state) => state.laporan)
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(FetchLaporan(id))
  }, [])

  return (
    <>
      {loading ? (
        ''
      ) : (
        <>
          <div className="mx-auto  px-3 py-5 w-[40%] rounded-lg h-full mt-[20px] space-y-4">
            <p className="font-[700] text-[32px] mb-4">DETAIL</p>
            <div className="space-y-2">
              <p className="font-[700]">Nama Lengkap</p>
              <div className="border border-[#FF9F29] p-2 rounded-lg">
                <p>{laporan.nama_lengkap}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-[700]">Tanggal Lahir</p>
              <div className="border border-[#FF9F29] p-2 rounded-lg">
                <p>{laporan.tanggal_lahir}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-[700]">Email</p>
              <div className="border border-[#FF9F29] p-2 rounded-lg">
                <p>{laporan.email}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-[700]">Nomor Handphone</p>
              <div className="border border-[#FF9F29] p-2 rounded-lg">
                <p>{laporan.no_hp}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-[700]">Isi Laporan</p>
              <div className="border border-[#FF9F29] p-2 rounded-lg">
                <p>{laporan.file}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-[700]">Status</p>
              <div className="border border-[#FF9F29] p-2 rounded-lg">
                <p>{laporan.status}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-[700]">Catatan</p>
              <div className="border border-[#FF9F29] p-2 rounded-lg">
                <p>{laporan.catatan}</p>
              </div>
            </div>
            <button onClick={(e) => navigate('/')} className="border border-[#FF9F29] w-full py-2 hover:bg-[#FF9F29] font-[700] hover:text-white  rounded-full">
              Home
            </button>
            {laporan.status === 'Reject' && (
              <button onClick={(e) => navigate(`/revisi/${id}`)} className="border bg-[#FF9F29] w-full py-2 hover:bg-[#FF9F29] font-[700] text-white  rounded-full">
                Revisi
              </button>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default DetailLaporan
