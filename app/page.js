import Image from 'next/image'
import Accordion from './components/Accordion/Accordion'
import { LuCodesandbox } from "react-icons/lu";

export default function Home() {
  return (
    <div className="mx-auto flex flex-rowl h-screen w-screen overflow-auto">
      <div className="bg-sky-400 w-44 h-screen flex flex-col items-center justify-start py-6 text-gray-100">
      <LuCodesandbox size={80} className="text-9xl mb-4 "/>

        <div className="hover:bg-sky-500 ease-in-out duration-500 w-11/12 flex items-center justify-center p-3 rounded-lg cursor-pointer">
        <a className=" ease-in duration-500  " href="/AllComponents">Components</a>
        </div>
        
      </div>
      <div className="p-20">
      There is not much here yet. Check out the components page.
      </div>
    </div>
  )
}
