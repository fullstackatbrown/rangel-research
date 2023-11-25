import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Lato } from 'next/font/google'
import Navbar from '../components/navbar';
import QualtricsButton from '@/components/qualtricsButton';

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({ subsets: ['latin'], weight: ["400"] })

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar/>

      <div className='mt-6 bg-transparent w-full h-72 flex items-center px-5'>

        <div className='rounded bg-light-brown w-2/3 h-full items-center grid justify-center mr-3'>
          <h1 className="text-medium-brown text-6xl w-100 bg-transparent">Families and Schools Research Project</h1>
        </div>
        <div className='rounded bg-light-brown w-1/3 h-full grid items-center justify-center'> 
          <h1 className="text-3xl w-84 bg-transparent -mb-20">Qualtrics Interest Form</h1>
          <div className="bg-transparent flex justify-center -translate-y-10">
            <QualtricsButton color1='medium-brown' color2='light-brown'/>
          </div>
        </div>
        
      </div> 

      <div className='bg-slate-100 my-6 w-full h-72 flex items-center'>

        <div className='rounded bg-transparent w-1/3 h-full items-center grid justify-center mr-3'>
        <h1 className="text-3xl w-84 bg-transparent -mb-20 text-slate-800">The Project</h1>
          <button className="outline outline-2 outline-medium-brown rounded text-white bg-transparent bg-slate-400 w-72 flex p-3 text-2xl -mt-20 justify-between">
            <h1 className="bg-transparent text-medium-brown">About Project</h1>
            <h1 className="bg-transparent text-medium-brown">→</h1>
          </button>
        </div>

        <div className='rounded bg-transparent w-2/3 h-full grid items-center justify-center'> 
        <h1 className="text-slate-800 text-xl w-100 bg-transparent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus orci ac. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Egestas dui id ornare arcu odio ut sem. Posuere ac ut consequat semper viverra nam. Rhoncus dolor purus non enim. Ultricies mi eget mauris pharetra et ultrices neque. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Tristique senectus et netus et malesuada fames ac turpis egestas. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Lectus sit amet est placerat in egestas erat imperdiet.</h1>
        </div>
        
      </div> 

      <div className='bg-transparent w-full h-100 flex p-10 flex items-center'>

        <h1 className="bg-light-brown rounded p-8 flex text-4xl w-1/3 flex justify-center text-medium-brown ">Our Research Values</h1>
        <div className="ml-20 bg-transparent w-2/3 grid">
        <h1 className="bg-light-brown text-medium-brown rounded p-8 flex text-3xl flex ">1.</h1>
        <h1 className="mt-5 text-medium-brown bg-light-brown rounded p-8 flex text-3xl flex">2.</h1>
        <h1 className="mt-5 text-medium-brown bg-light-brown rounded p-8 flex text-3xl flex">3.</h1>
        </div>
        
      </div> 
    </div>
  )
}
