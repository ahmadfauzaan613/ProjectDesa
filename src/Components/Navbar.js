import React from 'react'

import Logo1 from '../Assets/favicon.png'

function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-[#243A73]">
        <img src={Logo1} alt="" className="w-[64px] h-full" />
      </div>
      {/* {isDropdown && (
        <div className="relative flex justify-end ">
          <div className="bg-red-700 w-[10%] p-3 space-y-4 flex-col rounded-b-md absolute">
            <p className="cursor-pointer font-[700] text-white" onClick={() => navigate('/')}>
              Keluar
            </p>
          </div>
        </div>
      )} */}
    </>
  )
}

export default Navbar
