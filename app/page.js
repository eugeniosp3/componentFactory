import Image from 'next/image'
import Accordion from './components/Accordion/Accordion'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-around p-24 
    xxs:bg-rose-100 xs:bg-rose-300 sm:bg-rose-500 md:bg-yellow-300 lg:bg-sky-300 xl:bg-purple-400 2xl:bg-green-500
    w-screen
    
    ">
      <div className="flex flex-col items-center justify-around w-screen">
     <Accordion />
     </div>

     <div className="flex flex-col items-center justify-around w-screen">
     <Accordion />
     </div>


     <div className="flex flex-col items-center justify-around w-screen">
     <Accordion />
     </div>


    </main>
  )
}
