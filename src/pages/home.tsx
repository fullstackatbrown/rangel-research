import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Lato } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({ subsets: ['latin'], weight: ["400"] })

export default function Home() {
  return (
    <main className={`w-screen min-h-screen flex-col items-center justify-between p-24 ${lato.className}`}>
      <div className="bg-black max-w-5xl w-full font-mono text-sm">
        <p className={
          `fixed left-0 top-0 flex w-full justify-center 
           pb-6 pt-8 dark:from-inherit lg:static lg:w-auto ${lato.className}`}>
        Rangels Research Lab&nbsp;     
        </p>
      </div>

      <div className='bg-slate-400 w-full h-72 items-center'>

        <h1 className="pt-28 bg-transparent flex justify-center text-6xl">Home</h1>
        
      </div> 

      <div className='grid w-full h-72 flex justify-center items-center p-24'>

        <h1 className="text-2xl w-64">Qualtrics Interest Form</h1>
        <h1 className="mt-2 bg-slate-400 w-64 flex justify-center text-2xl">Qualtrics Survey</h1>
        
      </div> 

      <div className='bg-slate-400 w-full h-72 flex p-10 flex items-center'>

        <h1 className="bg-transparent flex text-4xl">Information</h1>
        <p className="ml-10 bg-transparent"> Lorem ipsum dolor sit amet. Et velit facilis sed debitis deserunt et expedita nihil ut voluptate dicta qui eligendi omnis. Rem nostrum necessitatibus et cupiditate similique non pariatur eius hic nobis aspernatur ut aspernatur atque id consectetur assumenda ex numquam ratione. </p>
        
      </div> 
    </main>
  )
}
