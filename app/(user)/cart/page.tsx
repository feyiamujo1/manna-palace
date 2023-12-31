"use client"

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { CartContext } from "~/app/context/CartContext";
import CartItemCard from "~/components/CartItemCard";
import UserInfoCard from "~/components/UserInfoCard";
import NavBar from "~/components/UsersNavbar";

export default function Cart() {
    const { cart, IncreaseItemInCart, removeFromCart, reduceQuantity, getTotalCost, getTotalItems } = useContext(CartContext);
  return (
    <main className="w-full relative scroll-smooth">
      <NavBar cart={cart} getTotalItems={getTotalItems} />
      <section className="min-h-screen py-10" id="menu">
        <div className="w-11/12 mx-auto space-y-6">
            <div className=" space-y-2 mt-20">
                <h2 className=" font-extrabold text-2xl md:text-3xl text-center">
                    Cart
                </h2>
                <p className="text-center">
                    Review your order and proceed to checkout
                </p>
            </div>
            <div className="gap-6 w-fit mx-auto flex flex-col md:flex-row">
                <CartItemCard cart={cart} IncreaseItemInCart={IncreaseItemInCart} removeFromCart={removeFromCart} reduceQuantity={reduceQuantity} />
                <UserInfoCard cart={cart} getTotalCost={getTotalCost} getTotalItems={getTotalItems} />
            </div>
        </div>
      </section>
    </main>
  );
}
