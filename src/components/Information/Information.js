import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './information.css'

function Information() {
  return (
    <div className='Information'>
      <Sidebar/>
      <div className="informationRight">
      <h1 className='heading'>
          Information
        </h1>
        <div className="container">
        <p className='about'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem quis omnis impedit temporibus tenetur ipsa blanditiis illum delectus? Fuga, iste ad ipsam ex ipsa neque quisquam voluptates nemo. Vitae.
        </p>
        </div>
      </div>
    </div>
  )
}

export default Information
