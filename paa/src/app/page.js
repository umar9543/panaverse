
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'




const page = () => {
  return (

    <div className='flex-wrap  bg-center bg-cover bg-fixed    img-1  ' >  <Navbar/>


      <div className='flex items-center justify-center  text-5xl h-screen  name' >
        <div className='name'>
          <h1 >CERTIFIED <span>WEB 3.0  &</span>
          </h1>

          <div >METAVERSE <span>PROGRAM</span></div>
          <div className='text-center text-2xl justify-center row '>
            <Link className='umer' href={'./start'}>LEARN MORE</Link> 
            <Link  className='umer' href={'./contact'}>SOCIAL</Link>
            <Link className='umer' href={'./about'}>ABOUT</Link>
          </div>


        </div>
      </div>

    </div>

  )
}

export default page