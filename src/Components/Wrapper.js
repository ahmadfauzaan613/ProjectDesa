import React from 'react'
import Navbar from './Navbar'

function Wrapper(props) {
  return (
    <>
      <div className="app h-full min-h-screen ">
        {props.isProtect && <Navbar />}
        {props.children}
      </div>
    </>
  )
}

export default Wrapper
