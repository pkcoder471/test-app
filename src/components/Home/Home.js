import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import './home.css';

function Home() {
  return (
    <div className='Home'>
      <Sidebar/>
      <div className="homeRight">
        <h1 className='heading'>
          Home
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

export default Home
