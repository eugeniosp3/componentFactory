import React from 'react'
import Accordion from '../components/Accordion/Accordion'
import SearchBar from '../components/SearchBar/SearchBar'
import NavBar from '../components/NavBar/NavBar'
import Card from '../components/Card/Card'

function AllComponents() {
  return (

    <div className="py-10
    xxs:bg-rose-100 xs:bg-zinc-100 sm:bg-orange-200 
    md:bg-sky-200 lg:bg-stone-200 xl:bg-green-200 2xl:bg-teal-200
    w-screen h-screen overflow-auto
    flex flex-col items-center justify-start select-none

">
    <div className="w-11/12"><a href="/" className="text-blue-600 hover:text-blue-900">Back</a></div>

    <div className="py-4 lg:w-1/2 w-11/12">
        Resize the page for different colors and responsive breakpoints tests. Click the component name to view code in Github.
        <br/><br/>All components can be found here: 
        <a className="ml-4 font-medium text-fuchsia-500 hover:text-violet-500 bg-yellow-300 hover:bg-red-100 border-2 border-fuchsia-500 p-1 px-2 rounded-full" href="https://github.com/eugeniosp3/componentFactory/tree/main/app/components"> Github Repo</a>

        
        </div>
      <div className="py-4 lg:w-1/2 w-11/12">
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

{/* insert another here */}
     <div className="py-4 lg:w-1/2 w-11/12 mt-10">
        <p className="font-medium pt-8 pb-2 select-none">
        <a className="text-black/30 hover:text-slate-800 " href="https://github.com/eugeniosp3/componentFactory/tree/main/app/components/SearchBar">
            Search Bar
            </a>
        </p> 
      </div>

      <div className="w-screen flex flex-col items-center justify-center">
        
     <SearchBar />
     </div>


     {/* insert another here */}
     <div className="py-4 lg:w-1/2 w-11/12 mt-20">
        <p className="font-medium pt-6 pb-2 select-none">
        <a className="text-black/30 hover:text-slate-800 " href="https://github.com/eugeniosp3/componentFactory/tree/main/app/components/NavBar">
            Horizontal Nav Bar
            </a>
        </p> 
      </div>

      <div className="w-screen flex flex-col items-center justify-center">
        <NavBar />
     </div>

        {/* insert another here */}
        <div className="py-4 lg:w-1/2 w-11/12 mt-20">
        <p className="font-medium pb-2 select-none">
        <a className="text-black/30 hover:text-slate-800 " href="https://github.com/eugeniosp3/componentFactory/tree/main/app/components/Card">
            Animated Cards
            </a>
        </p> 
      </div>

      <div className="w-11/12 md:w-11/12 lg:w-4/5 xl:w-3/5 2xl:w-1/2 flex flex-row items-center justify-center xxs:max-md:flex-col">
        <Card title={"Desert Rentals"}
              header={"Luxurious Sand Castles"}
              bodyText={"The most diversity is not found in the city, but in the desert."}
              titleColor={`text-orange-800`}
              headerColor={`text-amber-600`}
              bodyTextColor={`text-slate-500`}
              imgSource={`/cooldesertcity.jpeg`}
              />
        <Card title={"Cloud City"}
              header={"Magnificent Heights"}
              bodyText={"You buy a helicopter tour but instead you get a flying car."}
              titleColor={`text-sky-500`}
              headerColor={`text-orange-500`}
              bodyTextColor={`text-sky-700`}
              imgSource={`/futurecar.jpeg`}

              />
        <Card title={"Fantasy Trips"}
              header={"Roaming Candy Fields"}
              bodyText={"Go to a land undiscovered. Unbound by reality's rules."}
              titleColor={`text-pink-400`}
              headerColor={`text-lime-600`}
              bodyTextColor={`text-gray-400`}
              imgSource={`/pinkyClouds.jpeg`}

              />

     </div>

     </div>
  )
}

export default AllComponents