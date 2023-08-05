"use client"

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { CartContext } from "~/api/CartContext";
import CartItemCard from "~/components/CartItemCard";
import UserInfoCard from "~/components/UserInfoCard";
import NavBar from "~/components/UsersNavbar";

export default function Cart() {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <main className="w-full relative scroll-smooth">
      <NavBar cart={cart} />
      <section className="min-h-screen py-10 bg-slate-100" id="menu">
        <div className="w-11/12 mx-auto space-y-6">
            <div className=" space-y-2 mt-20">
                <h2 className=" font-extrabold text-2xl md:text-3xl text-center">
                    Cart
                </h2>
                <p className="text-center">
                    Review your order and proceed to checkout
                </p>
            </div>
            <div className="gap-6 w-fit mx-auto flex flex-col-reverse md:flex-row">
                <CartItemCard cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
                <UserInfoCard cart={cart} />
            </div>
        </div>
      </section>
    </main>
  );
}
