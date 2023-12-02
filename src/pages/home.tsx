import Image from 'next/image'
import Navbar from '../components/navbar';
import QualtricsButton from '@/components/qualtricsButton';
import {
  Lato,
  Julius_Sans_One
} from '@next/font/google';

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: '400',
});

const julius = Julius_Sans_One({
  subsets: ['latin'],
  variable: '--font-julius',
  weight: '400',
});


export default function Home() {

  
  return (
    
    <div className="bg-white">
      <Navbar/>
      

      <div className='mt-6 bg-transparent w-full h-72 flex items-center px-5'>

        <div className='rounded bg-brown1 w-2/3 h-full items-center grid justify-center mr-3'>
          <h1 className="text-brown5 text-6xl w-100 bg-transparent font-julius">Families and Schools Research Project</h1>
        </div>
        <div className='rounded bg-brown2 w-1/3 h-full grid items-center justify-center'> 
          <h1 className="text-3xl text-gray-purple w-84 bg-transparent -mb-20 font-bold">Qualtrics Interest Form</h1>
          <div className="bg-transparent flex justify-center -translate-y-8">
            <QualtricsButton/>
          </div>
        </div>
        
      </div> 

      <div className='bg-light-gray mt-6 w-full h-72 flex items-center'>

        <div className='rounded bg-transparent w-1/3 h-full items-center grid justify-center mr-3'>
        <h1 className="text-3xl w-84 bg-transparent -mb-20 text-gray-purple font-bold">The Project</h1>
          <button className="outline outline-brown5 rounded text-white bg-transparent bg-slate-400 w-72 flex p-3 text-2xl -mt-20 justify-between">
            <h1 className="bg-transparent text-brown5">About Project</h1>
            <h1 className="bg-transparent text-brown5">→</h1>
          </button>
        </div>

        <div className='rounded bg-transparent w-2/3 h-full grid items-center justify-center'> 
        <h1 className="text-slate-800 text-xl w-100 bg-transparent">Welcome to the Families and Schools Project, where we delve into how parents and educators work to build relationships between and amongst each other. Our goal is to uncover how the bonds between parents and their childrens schools shape the landscape of educational success. </h1>
        </div>
        
      </div> 


      <div className='bg-light-gray w-full h-72 flex items-center justify-center'>
        <div className="rounded bg-transparent outline outline-brown5 w-full p-5 mx-16 mb-16">
        <p className="text-slate-800 text-xl w-100 bg-transparent">At the heart of our research are the voices of parents and educators. Through insightful interviews with parents, we gain a deeper understanding of their journey through the educational system. Similarly, conversations with school faculty and administrators shed light on how educators view and interact with parental involvement.</p>
        <p className="text-slate-800 text-xl w-100 bg-transparent">In exploring these dynamics, ultimately, our project aims to identify effective strategies that enhance students’ learning experiences, understand what practices effectively support students’ experiences and performance at school, and develop innovative approaches to strengthen parent-school relationships, ultimately enriching the educational journey for all.</p>
        </div>

      </div>

      <div className='my-10 inline-block bg-transparent w-full h-full justify-center'>

        <div className='m-auto bg-brown1 w-96 h-24 pt-7 flex justify-center rounded'>
          <h1 className="text-3xl text-gray-purple w-84 bg-transparent -mb-20 font-bold">Our Research Values</h1>
        </div>

        <div className='flex bg-transparent mt-10 h-96 w-full'>

        <div className='mx-5 bg-brown1 w-full h-full inline-block justify-center rounded p-8'> 

          <div className='m-auto rounded-full h-16 w-16 bg-brown4 flex justify-center'>
            <h1 className='bg-transparent mt-3 font-bold text-3xl text-brown5'>1.</h1>
          </div>

          <div className='my-5 m-auto bg-white bg-opacity-75 w-48 px-10 outline outline-brown5 h-12 pt-2 flex justify-center rounded'>
            <h1 className="text-xl text-gray-purple w-84 bg-transparent -mb-20 font-bold">Transparency</h1>
          </div>

          <h1 className="text-brown5 w-84 bg-transparent text-center">the voices of parents and educators. Through insightful interviews with parents, we gain a deeper understanding of their journey through the educational system. Similarly, conversations with school faculty and administrators shed light on how educators view and interact with parental involvement.</h1>

        </div>

        <div className='mx-5 bg-brown2 w-full h-full inline-block justify-center rounded p-8'> 

        <div className='m-auto rounded-full h-16 w-16 bg-brown4 flex justify-center'>
          <h1 className='bg-transparent mt-3 font-bold text-3xl text-brown5'>2.</h1>
        </div>

        <div className='bg-opacity-75 my-5 m-auto bg-white w-auto px-10 outline outline-brown5 h-12 pt-2 flex justify-center rounded'>
          <h1 className="text-xl text-gray-purple bg-transparent -mb-20 font-bold">Security & Privacy</h1>
        </div>

        <h1 className="text-brown5 w-84 bg-transparent text-center">the voices of parents and educators. Through insightful interviews with parents, we gain a deeper understanding of their journey through the educational system. Similarly, conversations with school faculty and administrators shed light on how educators view and interact with parental involvement.</h1>

        </div>

        <div className='mx-5 bg-brown3 w-full h-full inline-block justify-center rounded p-8'> 

        <div className='m-auto rounded-full h-16 w-16 bg-brown4 flex justify-center'>
          <h1 className='bg-transparent mt-3 font-bold text-3xl text-brown5'>3.</h1>
        </div>

        <div className='bg-opacity-75 my-5 m-auto bg-white w-auto px-10 outline outline-brown5 h-12 pt-2 flex justify-center rounded'>
          <h1 className="text-xl text-gray-purple w-84 bg-transparent -mb-20 font-bold">Catalyzing Positive Change</h1>
        </div>

        <h1 className="text-brown5 w-84 bg-transparent text-center">the voices of parents and educators. Through insightful interviews with parents, we gain a deeper understanding of their journey through the educational system. Similarly, conversations with school faculty and administrators shed light on how educators view and interact with parental involvement.</h1>

        </div>


        </div>

        
      </div> 
    </div>
  )
}
