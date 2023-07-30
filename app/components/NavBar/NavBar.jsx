"use client"
import { useState } from "react"

function NavBar() {
    const [activeLink, setActiveLink] = useState('')
    const [hoveredLink, setHoveredLink] = useState('')
const links = [

    "Power Rangers",
    "Futurama",
    "Schitt's Creek",
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
      className="h-28 rounded-xl
      xxs:w-11/12 xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-5/6 xl:w-3/5 2xl:w-1/2
      xxs:bg-pink-300 xs:bg-slate-300 sm:bg-orange-300 md:bg-sky-300 lg:bg-stone-300 xl:bg-green-300 2xl:bg-teal-300
      flex flex-col items-center justify-center ease-in-out duration-700 
      ">
        {/* holds menu items */}
        <div className="gap-5 text-sm border-b-2 border-b-blue-100/50 bg-slate-800 border backdrop-blur-2xl shadow-md shadow-black/30 rounded-lg
        flex items-center justify-center w-11/12 xxs:max-md:text-xs/[1em] xxs:max-md:flex-2 xxs:max-md:w-11/12 xxs:max-md: xxs:max-md:gap-4 xxs:max-md:px-2 md:whitespace-nowrap
      
        ">
                {links.map((link, index) => (
        <div key={index} className="flex flex-col items-center justify-center"
        onMouseOver={() => handleMouseOver(index)}
        onMouseLeave={() => setHoveredLink("")}
        onClick={() => handleClickLink(index)}>
            <div
                className={` ease-in-out duration-1000 h-2 w-2 rounded-full mt-3 -mb-1 ${hoveredLink === index ? "bg-purple-600" : ""}  ${activeLink === index ? "bg-orange-400" : ""} `}
            >
            </div>
          <div className="h-8 py-3 mb-3 text-slate-400 hover:font-medium">{link}</div>
           
        </div>
      ))}

        </div>


        </div>
  )
}

export default NavBar