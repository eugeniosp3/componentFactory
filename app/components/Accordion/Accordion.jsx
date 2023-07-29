"use client"
import React from 'react'
import {FaAngleDown} from 'react-icons/fa'

function Accordion({header, badge}) {
    const [open, setOpen] = React.useState(false)
  return (
    <div className={`backdrop-blur-md flex flex-col items-center hover:ease-in-out hover:duration-600 ease-in-out duration-700 
                    xxs:w-11/12 xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-1/2 xl:w-1/2 2xl:w-1/2
                    xxs:bg-cyan-100 xs:bg-teal-200 sm:bg-purple-200 md:bg-blue-200 lg:bg-purple-200 xl:bg-yellow-100 2xl:bg-green-200
                    rounded-xl 
                    ${open ? "h-96" : "h-16"} 
                    relative
                    mb-4
   
                    `}
                    
                    >
                        <div className="h-16 bg-white hover:bg-gray-100 rounded-xl px-10 py-4
                         flex justify-start items-center duration-700 ease-out hover:drop-shadow-lg active:drop-shadow-none drop-shadow-sm
                         cursor-pointer relative
                         mx-auto
                         xxs:w-full xs:w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full
                         "
                         onClick={() => setOpen(!open)}
                         >
                        <div className="flex items-center justify-center">
                            <p className="text-lg select-none text-gray-800">Accounts</p>
                            <div className="flex items-center justify-center
                             border-solid border border-red-600 rounded-lg
                              bg-red-100/50 px-3 ml-4 h-6">
                                <p className="text-red-600 font-regular text-sm select-none">Risk</p>
                                </div>
                        </div>
                        <p className="
                                    text-white text-3xl text-center
                                    absolute lg:right-12 right-8
                                    select-none
                                    ease-in-out duration-1000
                                    ">
                        <FaAngleDown 
                        className={open ? "transform rotate-180 duration-500 text-slate-800" : "transform rotate-0 duration-500 text-slate-800"}
                        
                        />
        </p>
        </div>

        {open ? <div className="backdrop-blur-xl w-5/6 h-4/6 p-6
         relative left-max-content top-1/4 -translate-y-1/4
          rounded-lg overflow-y-scroll select-none cursor-text
           ease-in-out duration-1000 bg-red-100">
            <p className="ease-in-out duration-300 transition delay-1000 ">
                <p className="text-black/30 text-md mb-4">Balance Summary</p>
                <ul>
                    <li className=" text-gray-800 cursor-default
                     text-md mb-4 
                     flex items-center justify-start">Bank of America $12,000.00
                    <div className="flex items-center justify-center border-solid border
                     border-red-600 rounded-lg bg-red-100/50
                      px-3 ml-4 h-6"><p className="text-red-600 font-regular text-sm">Risk</p></div></li>
                    <li className=" text-gray-800 cursor-default
                     text-md mb-4"
                     >Capital One $12.97</li>
                    <li className=" text-gray-800 cursor-default
                     text-md mb-4"
                     >American Express $13.14</li>
                    <li className=" text-gray-800 cursor-default
                     text-md mb-4 
                     flex items-center justify-start">Chase Bank $0.00
                    <div className="flex items-center justify-center border-solid border
                     border-blue-600 rounded-lg bg-blue-100/50
                      px-3 ml-4 h-6"><p className="text-blue-600 font-regular text-sm">Frozen</p></div>
                    </li>


                </ul>
            </p>
            </div> 
            : null}
    </div>
  )
}

export default Accordion