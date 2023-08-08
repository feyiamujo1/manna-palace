"use client";

import Image from "next/image";
import { cn } from "~/lib/utils";
import Jollof from "~/public/Jollof_Rice_with_Stew.jpg";
import RicenBeans from "~/public/Rice-and-Beans.jpeg";
import FriedRice from "~/public/Fried-rice.jpeg";
import PoundedYam from "~/public/pounded-yam.jpg";
import Indomie from "~/public/korean-instant-noodles-spicy-instant-noodles.jpg";
import ChickennChips from "~/public/Chicken-and-Chips.jpeg";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"
import Link from "next/link";
import { OrderedItem } from "~/types/OrderedItem";

export default function CartItemCard({cart, reduceQuantity, removeFromCart, IncreaseItemInCart}: {cart: Array<OrderedItem>, IncreaseItemInCart: Function, reduceQuantity: Function, removeFromCart: Function}) {
    console.log(cart[0])
  const LatestOrders = [
    {
      name: "Jollof Rice",
      image: Jollof,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1000,
      quantity: 2,
    },
    {
      name: "Rice and Beans",
      image: RicenBeans,
      description: "Mixed with beef, plantain and coleslaw.",
      price: 1100,
      quantity: 2,
    },
    {
      name: "Fried Rice",
      image: FriedRice,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1200,
      quantity: 2,
    },
    {
      name: "Pounded Yam",
      image: PoundedYam,
      description: "With Efo riro, snail and chicken",
      price: 1200,
      quantity: 2,
    },
    {
      name: "Indomie Noodles",
      image: Indomie,
      description: "Mixed with fried egg, chicken and susage.",
      price: 700,
      quantity: 2,
    },
    {
      name: "Chicken and Chips",
      image: ChickennChips,
      description: "Mix of chicken, chips and sauce.",
      price: 1000,
      quantity: 2,
    },
  ];

  // const reduceItems = () => {

  // }
  return (
    <div className="shadow py-4 rounded-md w-fit space-y-3">
      <div className="flex px-3 justify-between items-center">
        <p className="text-lg font-bold">Food Items</p>
      </div>
      <div className="md:w-[420px]">
        {
          cart && cart.length !== 0 ? 
          cart.map((foodItem, id, arr) => (
          <div
            key={id}
            className={cn(
              "flex justify-between items-start p-3 border-t border-[#e5e7eb] transition-all duration-150",
              id === arr.length && "pb-0"
            )}
          >
            <div className="flex gap-3 w-full md:w-full">
              <Image
                sizes="35"
                src={foodItem.image!}
                className="rounded-md object-cover w-28"
                alt=""
              />
              <div>
                <div className="space-y-1">
                    <p className="font-bold">{foodItem.name}</p>
                    <p className="font-bold">&#8358;&nbsp;{foodItem.price}</p>
                    <p className="text-[#999999] text-sm">{foodItem.description}</p>
                </div>
                <div className="flex gap-4 mt-4">
                    <button onClick={()=>{IncreaseItemInCart(foodItem.id)}} className="w-fit h-fit text-2xl text-custom-yellow hover:text-light-custom-yellow">
                        <AiFillPlusCircle className=" " />
                    </button>
                    <p className=" font-semibold">{foodItem.quantity}</p>
                    <button onClick={()=>{reduceQuantity(foodItem.id)}} className="w-fit h-fit text-2xl text-custom-yellow hover:text-light-custom-yellow" >
                        <AiFillMinusCircle />
                    </button>
                </div>
              </div>
            </div>
            <div className="w-fit space-y-1.5 ">
              <div className="w-full text-right flex justify-end">
                <RiDeleteBin6Fill onClick={()=>{removeFromCart(foodItem.id)}} className="text-xl w-fit text-right cursor-pointer text-custom-yellow hover:text-red-600" />
              </div>
            </div>
          </div>
        ))
        : <p className="text-[#999999] p-3 border-t border-[#e5e7eb]">Your cart is empty</p>
        }
      </div>
    </div>
  );
}
