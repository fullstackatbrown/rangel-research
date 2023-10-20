import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Lato } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({ subsets: ['latin'], weight: ["400"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${lato.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between 
      font-mono text-sm lg:flex">
        <p className={
          `fixed left-0 top-0 flex w-full justify-center 
          border-b pb-6 pt-8 
          dark:border-neutral-800  
          dark:from-inherit lg:static lg:w-auto ${lato.className}`
        }>
        Rangel's Research Lab&nbsp;     
        </p>

      </div>
    </main>
  )
}
