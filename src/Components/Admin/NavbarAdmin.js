import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo1 from '../../Assets/favicon.png'

function NavbarAdmin() {
  const [isDropdown, setDropdown] = useState(false)
  const location = window.location.pathname
  let navigate = useNavigate()

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-[#243A73]">
        <img src={Logo1} alt="" className="w-[64px] h-full" />
        <div className="flex items-center space-x-10">
          {location === '/admin/dashboard' ? (
            <p onClick={() => navigate('/admin/dashboard')} className="font-[700] text-white">
              User
            </p>
          ) : (
            <p onClick={() => navigate('/admin/dashboard')} className="font-[400] text-white">
              User
            </p>
          )}
          {location === '/admin/laporan' ? (
            <p onClick={() => navigate('/admin/laporan')} className="font-[700] cursor-pointer text-white">
              Laporan
            </p>
          ) : (
            <p onClick={() => navigate('/admin/laporan')} className="font-[400] cursor-pointer text-white">
              Laporan
            </p>
          )}
        </div>
        <span onClick={() => setDropdown(!isDropdown)} class="material-symbols-outlined text-[40px] text-white cursor-pointer">
          account_circle
        </span>
      </div>
      {isDropdown && (
        <div className="relative flex justify-end ">
          <div className="bg-red-700 w-[10%] p-3 space-y-4 flex-col rounded-b-md absolute">
            <p className="cursor-pointer font-[700] text-white" onClick={() => navigate('/admin')}>
              Keluar
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default NavbarAdmin
