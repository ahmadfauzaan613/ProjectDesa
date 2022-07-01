import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllLaporan } from '../../Redux/Laporan/action'
import Table from '../../Components/Table'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
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
    ],
    []
  )
  return <div className="p-4">{loading ? <p>Tunggu Sebentar...</p> : <Table columns={columns} data={alllaporan} />}</div>
}

export default Dashboard
