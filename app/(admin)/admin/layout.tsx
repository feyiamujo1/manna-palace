"use client";

import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import { useState } from "react";
import SideBar from "~/components/Sidebar";


export const metadata = {
  title: 'Manna Palace Amin DashBoard | Manna Palace Food Ordering Web App',
  description: "Welcome to the admin dashboard for the manna palace web app aims to provide a convenient and seamless food ordering experience, allowing the school community and outsiders enjoy their favorite meals from Manna Palace with ease, flexibility, and reliability.",
}

export default function MainWebsiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" m-0 flex min-h-screen w-full bg-[#f9fafb] p-0">
      <nav className='absolute top-0 left-0 right-0 w-full bg-transparent-black py-2 shadow-lg'>
        <div className='w-11/12 mx-auto flex justify-between items-center'>
          <Image src="/logo.png" alt="logo" height={40} width={90} />
          <div className='flex gap-3 items-center'>
            Other stuffs here
          </div>
        </div>
      </nav>
      <nav className="fixed inset-x-0 top-0 z-50 w-full bg-white py-2 shadow-md">
        <div className="mx-auto flex w-[96%] justify-between md:w-11/12">
          <div className="flex items-center md:hidden">
            <Hamburger
              size={28}
              toggled={isOpen}
              toggle={setIsOpen}
              color="#2c963f"
              distance="md"
              duration={0.3}
              rounded
            />
          </div>
          <div className="hidden items-center gap-0.5 md:flex">
            <Image src="/logo.png" alt="logo" height={40} width={90} />
          </div>
          <div className="flex w-fit items-center gap-3">
            {/* <div className="group relative flex w-fit cursor-pointer items-center">
              <BsFillBellFill className="fill-custom-yellow text-2xl group-hover:fill-custom-hover-green" />
              <span className="absolute -right-2 -top-3 rounded-full bg-red-600 px-1.5 py-0.5 text-xs text-white">
                4
              </span>
            </div> */}
            <div className="group relative flex h-12 w-12 cursor-pointer items-center overflow-hidden rounded-full">
              <Image
                src="/default_profile.png"
                className="relative w-20 rounded-full object-cover object-center group-hover:scale-110 md:w-[55px]"
                alt="profile"
                width={55}
                height={55}
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="relative flex w-full gap-2 md:gap-4">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="w-full bg-white px-2 pb-10 pt-[90px] shadow-lg md:ml-[338px] md:px-6 ">
          <div className="py-4">{children}</div>
        </main>
      </div>
    </div>
  )
}
