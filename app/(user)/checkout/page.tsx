"use client"

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { CartContext } from "~/api/CartContext";

export default function CheckOut() {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <main className="w-full relative scroll-smooth">
      <nav className="absolute top-0 left-0 right-0 w-full py-2 shadow-sm">
        <div className="w-11/12 mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="logo" height={40} width={90} />
          </Link>
          <div className="flex gap-3 items-center relative group cursor-pointer">
            <Link href="/checkout">
              <GiShoppingBag className="fill-black text-3xl group-hover:fill-custom-yellow" />
              {cart.length > 0 && (
                <p className="absolute text-sm -top-1 -right-2 rounded-full bg-custom-yellow text-white font-semibold flex justify-center items-center h-5 w-5 pb-0.5 border-box ">
                  {cart.length}
                </p>
              )}
            </Link>
          </div>
        </div>
      </nav>
      <section className="min-h-screen py-10 bg-slate-100" id="menu">
        <div className="w-11/12 mx-auto space-y-6">
            <div className=" space-y-2 mt-20">
                <h2 className=" font-extrabold text-2xl md:text-3xl text-center">
                    My Bag
                </h2>
                <p className="text-center">
                    Ensure to avoid mistakes, please validate your order before placing them.
                </p>
            </div>
            <div className="space-x-6">
                <div>

                </div>
                <div className="p-4 rounded-md ">

                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
