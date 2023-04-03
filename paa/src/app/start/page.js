"use client";
import React from 'react'
import Navbar from '../Navbar'

import { motion as m} from "framer-motion"
const page = () => {
    return (
        <m.main initial={{opacity:0}} animate={{opacity:1}}  transition={{duration:0.9,ease:"easeInOut"}}>
        <div className='  flex-wrap  bg-fixed bg-cover  img-1'><Navbar/>
       <div className='flex' />
            <div  className='text-center m-10 '>
                <m.h1 initial={{opacity:0}} animate={{opacity:1}}  transition={{duration:0.9,ease:"linear"}}
                className='text-7xl font-bold  text-green-500'>Certified
                <span className='text-red-600'> Web 3.0 </span>
                 and Metaverse Developer</m.h1>
                <h2 className='text-5xl text-white'> A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar </h2>
                <div className='m-10'>
                    <h2 className='text-start text-4xl font-serif text-green-500'>program studies</h2>
                    <p className='text-start text-white text-2xl'>This curriculum is intended for beginners
                        who want to learn software development from the ground up. The
                        first two quarters are shared by all specialities and are dedicated to studying
                        Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is
                        going to be a year-long hybrid programme that includes both onsite and online classes and i
                        s divided into four quarters of 13 weeks each. The emphasis will be on hands-on learning by
                        educating students to produce projects. To accommodate everyone, courses will be held primarily
                        on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format,
                        with core onsite classes complemented by online Zoom laboratories and recorded videos.</p>
                </div>  </div>
            <div className=' text-center bg-blue-950  m-10 '>
                <h1 className=' text-5xl text-green-500'>coure courses</h1>
                <p className='text-center text-2xl text-cyan-300'>Every participant of the program will start by completing the following two core courses:</p>
                <h1 className='text-2xl'> QUARTER 1:course-101=OOp with Typescript</h1>
                <h1 className='text-2xl '>QUARTER 2: W2-201=Developing Planet-Scale Web 2.0 Serverless
                    Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform

                </h1>
                <div className='m-12 text-3xl text-white'>
                    <h1> Specialized Tracks</h1>
                    <p>After completing the first two quarters
                        the participants will select one or more specializations
                        consisting of two courses each:</p></div></div>
                        <div className="lg:flex gap-10">
            <div className="text-center  bg-white shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <div className="text-center bg-black shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <h2 className="text-lg font-bold text-orange-500 pt-8 pb-2  ">web 3.0 and metaverse</h2>
                            <p className="py-2 text-white">
                                This Web 3.0 and Metaverse specialization focuses on developing
                                full-stack Web 3.0 and Metaverse experiences for the next generation
                                of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences
                                <h3 className='text-black-200'>Quarter III W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</h3>

                                <h3 className='text-black-200'>Quarter IV MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</h3>
                            </p>
            </div></div>
            <div className="text-center  bg-white shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <div className="text-center  bg-black shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <h2 className="text-lg font-bold text-orange-500 pt-8 pb-2  ">AI and Deep learning</h2>
                            <p className="py-2 text-white">
                                The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.

                                <h3 className='text-black-200'> Quarter III AI-351: Developing Planet-Scale Intelligent APIs and Python Programming</h3>

                                <h3 className='text-black-200'> Quarter IV AI-361: Deep Learning and MLOps</h3>
                            </p>
            </div></div>
            <div className="text-center  bg-white shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              
            <div className="text-center bg-black shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                            <h2 className="text-lg font-bold text-orange-500 pt-8 pb-2  ">Cloud native computing specialiation</h2>
                            <p className="py-2 text-white">
                            The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
                                <h3 className='text-black-200'> Quarter III CN-351: Certified Kubernetes Application Developer (CKAD)</h3>

                                <h3 className='text-black-200'> Quarter IV CN-361: Developing Multi-Cloud APIs using CDK for Terraform</h3>
                            </p></div>
            </div>
            <div className="text-center bg-white shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              
            <div className="text-center bg-black shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <h2 className="text-lg font-bold text-orange-500 pt-8 pb-2  ">Ambient Computing and IoT Specialization</h2>
                            <p className="py-2 text-white">
                            The Ambient Computing and IoT Specialization focuses on building Smart Homes,
                             Offices, Factories, and Cities using Voice computing, Matter and Embedded Devices.
                                <h3 className='text-black-200'> Quarter III AC-351: Ambient Computing with Voice Assistants and Matter Devices</h3>

                                <h3> Quarter IV AC-361: Embedded Programming using C and Rust</h3>
                            </p></div> </div>
          </div>






        </div>
        </m.main>
    )
}

export default page