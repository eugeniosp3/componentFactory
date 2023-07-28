import Image from 'next/image'
import Accordion from './components/Accordion/Accordion'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-around p-24">
     <Accordion />
     <Accordion />
     <Accordion />

    </main>
  )
}
