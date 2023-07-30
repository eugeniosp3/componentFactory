import Image from 'next/image'
import React from 'react'


function Card({title, header, bodyText, titleColor, headerColor, bodyTextColor, imgSource}) {
  return (
    <div
      className="h-80 first:rounded-l-xl last:rounded-r-xl xxs:max-md:first:rounded-t-xl xxs:max-md:last:rounded-b-xl first:rounded-l-none last:rounded-r-none
      xxs:w-11/12 xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-5/6 xl:w-3/5 2xl:w-1/2
      xxs:bg-pink-300 xs:bg-slate-300 sm:bg-orange-300 md:bg-sky-300 lg:bg-stone-300 xl:bg-green-300 2xl:bg-teal-300
      flex flex-row gap-6 items-center justify-center ease-in-out duration-700 

      ">

        <div className="flex flex-col justify-between w-56 h-64 rounded-xl ease-in-out duration-500 shadow-lg shadow-black/40 bg-gray-100">
          
          <div className="h-2/5 rounded-xl p-3 flex flex-col gap-1 ">
            <p className={`text-xs font-semibold ${titleColor}`}>{title}</p>
            <p className={`text-md font-medium ${headerColor}`}>{header}</p>
            <p className={`text-xs ${bodyTextColor}`}>{bodyText}</p>
            <div className="relative rounded-full flex flex-row items-center justify-around -top-20 left-44 w-16 bg-red-500 backdrop-blur-xs rotate-45 hover:rotate-0 hover:-top-24 ease-in-out duration-700 hover:shadow-black/20 hover:shadow-md shadow-black/20 shadow-sm">
              <div className="h-2 w-2 rounded-full   bg-black backdrop-blur-md"></div>
              <p className="font-medium text-white">$199</p>
              </div>

          </div>
          <Image src={`${imgSource}`}
          className="rounded-b-xl border-b border-b-slate-700 h-3/5 object-cover"
          alt="Picture of the author" width={500} height={500} />
        </div>
        
 
      
      
      </div>
  )
}

export default Card