import React from 'react'
import Accordion from '../components/Accordion/Accordion'

function AllComponents() {
  return (

    <div className="py-10
    xxs:bg-rose-100 xs:bg-zinc-100 sm:bg-orange-200 
    md:bg-sky-200 lg:bg-stone-200 xl:bg-green-200 2xl:bg-teal-200
    w-screen h-screen
    flex flex-col items-center justify-start select-none

">
    <div className="w-11/12"><a href="/" className="text-blue-600 hover:text-blue-900">Back</a></div>

    <div className="py-4 lg:w-1/2 w-11/12">
        Resize the page for different colors and responsive breakpoints tests. Click the component name to view code in Github.
        <br/><br/>All components can be found here: 
        <a className="ml-4 font-medium text-fuchsia-500 hover:text-violet-500 bg-yellow-300 hover:bg-red-100 border-2 border-fuchsia-500 p-1 px-2 rounded-full" href="https://github.com/eugeniosp3/componentFactory/tree/main/app/components"> Github Repo</a>

        <p className="font-medium pt-8 pb-2 select-none">
        <a className="text-black/30 hover:text-slate-800 ease-in-out duration-1000" href="https://github.com/eugeniosp3/componentFactory/tree/main/app/components/Accordion">
            Accordion
            </a>
        </p> 
        </div>

      <div className="w-screen flex flex-col items-center justify-center">
        
     <Accordion />
     <Accordion />
     </div>


     </div>
  )
}

export default AllComponents