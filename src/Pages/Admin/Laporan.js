import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllLaporan } from '../../Redux/Laporan/action'
import Table from '../../Components/Table'
import { useNavigate } from 'react-router-dom'

function Laporan() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
        Header: 'No Handphone',
        accessor: (data) => {
          return (
            <div>
              <p>{data.no_hp}</p>
            </div>
          )
        }, // accessor is the "key" in the data
      },
      {
        Header: 'Tanggal Lahir',
        accessor: (data) => {
          return (
            <div>
              <p>{data.tanggal_lahir}</p>
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
              <button onClick={(e) => navigate(`/admin/revisi/${data.id}`)} className="font-[700] text-[#FF9F29] cursor-pointer w-fit">
                View
              </button>
            </div>
          )
        }, // accessor is the "key" in the data
      },
    ],
    []
  )

  return <div className="p-4">{loading ? <p>Tunggu Sebentar...</p> : <Table columns={columns} data={alllaporan} />}</div>
}

export default Laporan
