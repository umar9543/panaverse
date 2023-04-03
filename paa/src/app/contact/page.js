'use client'
import React from 'react'

import Link from "next/link"

import { motion as m } from "framer-motion"
import Navbar from '../Navbar'
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

const page = () => {
  return (
   <div className='flex-wrap bg-cover bg-fixed img-1 h-screen '><Navbar/>
   <div className='flex'/>
  
   <div className='flex items-center p-11 space-x-11 rounded-lg text-9xl justify-center h-screen'>

<h1 className='text-4xl text-white text-center'>Connect with US</h1>
<m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, ease: "easeInOut" }} className='flex-wrap'>
  <div>
    <Link href="https://twitter.com/panaverse_edu?lang=en"><AiFillTwitterCircle color='blue' /></Link>
  </div>
  <div>
    <Link href="https://www.youtube.com/@panaverse">< AiFillYoutube color='red' /></Link>
  </div>
  <div>
    <Link href="https://www.facebook.com/panaverse.dao?mibextid=ZbWKwL">< AiFillFacebook color='blue' /></Link>
  </div>
</m.div>
</div>
   </div>
  )
}

export default page