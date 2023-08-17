"use client"
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import anime from "~/assets/food-choose.json";

export default function Home() {
  return (
    <main className="w-full relative scroll-smooth">
      <nav className="absolute top-0 left-0 right-0 w-full py-2 shadow-sm">
        <div className="w-11/12 mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="logo" height={40} width={90} />
          </Link>
          <div className="flex gap-3 items-center">
            <p className=" py-2 px-4 w-fit font-medium text-white hover:bg-light-custom-yellow transition-all bg-custom-yellow rounded-md ">
              <Link href="/login">Login</Link>
            </p>
            {/* <p className=" py-2 px-4 w-fit font-medium text-white hover:bg-light-custom-yellow transition-all bg-custom-yellow rounded-md ">
              <Link href="/menu">Register</Link>
            </p> */}
          </div>
        </div>
      </nav>
      <section className=" h-screen w-full bg-top md:bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="h-full w-11/12 flex justify-between items-center ">
          <div className="w-full space-y-2">
            <div >
              <h1 className="font-black text-4xl sm:text-5xl md:text-7xl ">
                Manna Palace
              </h1>
              <p className=" font-medium">
                No more long queues! Welcome to the Redeemer's University's
                premier food ordering website for Manna Palace
              </p>
            </div>
            <div>
              <a className="mt-4" href="/menu">
                <p className=" py-2 px-4 w-fit font-medium text-white hover:bg-light-custom-yellow transition-all bg-custom-yellow rounded-md ">
                  View Menu
                </p>
              </a>
            </div>
          </div>
          <div className="w-full ">
            <div className="w-[500px] mx-auto mt-10">
              <Lottie animationData={anime} loop={true} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
