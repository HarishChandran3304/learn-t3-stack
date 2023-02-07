import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center align-center items-center'>
      <div className='text-2xl text-center'>Which JDM car is better?</div>
      <div className='p-2'></div>
      <div className='border rounded p-8 flex justify-between items-center max-w-2xl'>
        <div className='w-16 h-16 bg-violet-400'></div>
        <div className='p-8'>Vs</div>
        <div className='w-16 h-16 bg-violet-400'> </div>
      </div>
    </div>
  )
}
