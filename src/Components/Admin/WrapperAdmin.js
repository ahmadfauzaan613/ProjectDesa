import React from 'react'
import NavbarAdmin from './NavbarAdmin'

function WrapperAdmin(props) {
  return (
    <>
      <div className="app h-full min-h-screen ">
        {props.isProtect && <NavbarAdmin />}
        {props.children}
      </div>
    </>
  )
}

export default WrapperAdmin
