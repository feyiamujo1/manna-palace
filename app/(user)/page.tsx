import Image from 'next/image'
import { GiShoppingBag } from "react-icons/gi"
import { IoPersonSharp } from "react-icons/io5"

export default function Home() {
  return (
    <main className='w-full relative'>
      <nav className='absolute top-0 left-0 right-0 w-full bg-transparent-black py-2 shadow-lg'>
        <div className='w-11/12 mx-auto flex justify-between items-center'>
          <Image src="/logo.png" alt="logo" height={40} width={90} />
          <div className='flex gap-3 items-center'>
            {/* <IoPersonSharp className=' cursor-pointer fill-white text-2xl hover:fill-custom-yellow' /> */}
            <GiShoppingBag className=' cursor-pointer fill-white text-2xl hover:fill-custom-yellow' />
          </div>
        </div>
      </nav>
      <section className=' h-screen w-full bg-hero-image bg-top md:bg-center bg-cover bg-no-repeat flex justify-center items-center'>
        <div className='text-center space-y-3 mt-20 md:mt-32'>
          <Image src="/title-shape.png" width={150} height={30} alt='' className='mx-auto object-cover' />
          <div>
            <h1 className='font-black text-4xl sm:text-5xl md:text-7xl text-custom-yellow'>Manna Palace</h1>
            <p className='font-semibold text-custom-yellow -mb-1'>No more long queues or waiting times!</p>
          </div>
          <p className='text-white font-semibold'>Redeemer's University's premier food ordering website</p>
          <p className='border-custom-yellow border py-2 px-4 w-fit font-semibold text-white mx-auto cursor-pointer hover:bg-custom-yellow transition-all'>View Menu</p>
        </div>
      </section>
      <section className=' min-h-screen py-10 bg-slate-100'>
        <div className='w-11/12 mx-auto space-y-6'>
          <div className=' space-y-2'>
            <Image src="/title-shape.png" width={150} height={30} alt='' className='mx-auto object-cover' />
            <h2 className=' font-extrabold text-2xl md:text-3xl text-custom-yellow text-center'>Our Menu</h2>
            <p className='text-center'>
              Browse through the menu, select your desired items, customize your order, and securely place it with just a few clicks.
            </p>
          </div>
          <div>
            <div className='flex gap-2 mx-auto w-fit py-2 px-3 text-sm bg-[#000] text-slate-300 rounded-xl border border-custom-yellow'>
              <p className='bg-[#1A2F33] py-2 px-3 rounded-lg cursor-pointer'>Meals</p>
              <p className='bg-[#000] py-2 px-3 rounded-lg cursor-pointer'>Swallow</p>
              <p className='bg-[#000] py-2 px-3 rounded-lg cursor-pointer'>Snacks</p>
              <p className='bg-[#000] py-2 px-3 rounded-lg cursor-pointer'>Drinks</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
