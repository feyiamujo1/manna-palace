"use client"

import Image from "next/image";
import Link from "next/link";
import { GiShoppingBag } from "react-icons/gi";

export default function NavBar({cart}: {cart: any}) {
  return (
    <nav className="absolute top-0 left-0 right-0 w-full py-2 shadow-sm">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" height={40} width={90} />
        </Link>
        <div className="flex gap-3 items-center relative group cursor-pointer">
          <Link href="/cart">
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
  );
}
