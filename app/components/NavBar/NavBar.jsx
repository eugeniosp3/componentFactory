"use client"
import { useState } from "react"

function NavBar() {
    const [activeLink, setActiveLink] = useState('')
    const [hoveredLink, setHoveredLink] = useState('')
const links = [

    "Power Rangers",
    "Futurama",
    "Schitt&apos;s Creek",
    "The Office",
    "The Simpsons",
    "The Ultimate Fighter",

]

// Define the handleMouseOver function
const handleMouseOver = (index) => {
    setHoveredLink(index)
    // You can add any additional logic or state changes here
  };

const handleClickLink = (index) => {
    setActiveLink(index)
  }
  
  return (
    // holds outer div for menu
    <div
      className="h-28 xxs:max-md:h-96 rounded-xl
      xxs:w-3/4 xs:w-2/4 sm:w-11/12 md:w-11/12 lg:w-5/6 xl:w-3/5 2xl:w-1/2
      xxs:bg-pink-300 xs:bg-slate-300 sm:bg-orange-300 md:bg-sky-300 lg:bg-stone-300 xl:bg-green-300 2xl:bg-teal-300
      flex flex-col items-center justify-center ease-in-out duration-700 cursor-pointer
      ">
        {/* holds menu items */}
        <div className="gap-5 xxs:max-md:h-84 text-sm border-b-2 border-b-blue-100/50 bg-slate-800 border backdrop-blur-2xl shadow-md shadow-black/30 rounded-lg shadow-inner/30
        flex xxs:max-sm:flex-col items-center justify-center w-11/12 xxs:max-lg:text-xs/[1em] xxs:max-sm:flex-2 xxs:max-sm:w-3/5  xxs:max-md:gap-1 xxs:max-md:px-2 xxs:max-lg:whitespace-nowrap
      
        ">
                {links.map((link, index) => (
        <div key={index} className="flex flex-col xxs:max-smflex-row items-center xxs:max-smitems-center xxs:max-smw-full justify-center"
        onMouseOver={() => handleMouseOver(index)}
        onMouseLeave={() => setHoveredLink("")}
        onClick={() => handleClickLink(index)}>
            <div
                className={` ease-in-out duration-1000 h-2 w-2 rounded-full mt-3 xxs:max-sm:mt-1 xxs:max-sm:mb-1 xxs:max-sm:mt-0 -mb-1 ${hoveredLink === index ? "bg-purple-600" : ""}  ${activeLink === index ? "bg-orange-400" : ""} `}
            >
            </div>
          <div className="h-8 py-3 mb-3 xxs:max-sm:mb-1 text-slate-400 hover:text-fuchsia-300 active:text-sky-200 ease-in-out duration-700 hover:ease-out ">{link}</div>
           
        </div>
      ))}

        </div>


        </div>
  )
}

export default NavBar