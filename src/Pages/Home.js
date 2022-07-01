import React, { useEffect } from 'react'
import Table from '../Components/Table'
import Background from '../Assets/Maskgroup.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllLaporan } from '../Redux/Laporan/action'

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { alllaporan, loading } = useSelector((state) => state.laporan)
  useEffect(() => {
    dispatch(fetchAllLaporan())
  }, [])

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nama Lengkap',
        accessor: (data) => {
          return (
            <div>
              <p>{data.nama_lengkap}</p>
            </div>
          )
        }, // accessor is the "key" in the data
      },
      {
        Header: 'Email',
        accessor: (data) => {
          return (
            <div>
              <p>{data.email}</p>
            </div>
          )
        }, // accessor is the "key" in the data
      },
      {
        Header: 'Status',
        accessor: (data) => {
          return (
            <>
              {data.status === 'Reject' && (
                <div className="bg-[#ff0000] rounded-xl p-1 w-fit text-white font-[700]">
                  <p>{data.status}</p>
                </div>
              )}
              {data.status === 'Waiting' && (
                <div className="bg-[#FF9F29] rounded-xl p-1 w-fit text-white font-[700]">
                  <p>{data.status}</p>
                </div>
              )}
              {data.status === 'Accept' && (
                <div className="bg-[#08ff56] rounded-xl p-1 w-fit text-white font-[700]">
                  <p>{data.status}</p>
                </div>
              )}
            </>
          )
        }, // accessor is the "key" in the data
      },
      {
        Header: 'View Detail',
        accessor: (data) => {
          return (
            <div>
              <button onClick={(e) => navigate(`/detail/${data.id}`)} className="font-[700] text-[#FF9F29] cursor-pointer w-fit">
                View
              </button>
            </div>
          )
        }, // accessor is the "key" in the data
      },
    ],
    []
  )

  return (
    <>
      <div className="relative">
        <img src={Background} alt="" />
        <div className="absolute top-[30%] left-[43%]">
          <p className="font-[700] text-white text-[48px] text-center">
            FORUM <br /> PENGADUAN
          </p>
        </div>
      </div>
      <div className="py-10">
        <p className="font-[700] text-[28px] text-center uppercase">Upload Hukum Desa</p>
        <button onClick={() => navigate('/upload')} className="bg-[#] ml-[44%] mt-10 mb-2 bg-[#FF9F29] py-4 px-10 font-[700] text-white rounded-lg">
          Upload Hukum Desa
        </button>
      </div>
      <div className="px-4 py-10">
        <p className="font-[700] text-center text-[30px]">TABEL HASIL LAPORAN</p>
        {loading ? <p>Tunggu Sebentar...</p> : <Table columns={columns} data={alllaporan} />}
      </div>
    </>
  )
}

export default Home
