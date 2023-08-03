import Image from "next/image";
import { cn } from "~/lib/utils";
import Jollof from "~/public/Jollof_Rice_with_Stew.jpg";
import RicenBeans from "~/public/Rice-and-Beans.jpeg";
import FriedRice from "~/public/Fried-rice.jpeg";
import PoundedYam from "~/public/pounded-yam.jpg";
import Indomie from "~/public/korean-instant-noodles-spicy-instant-noodles.jpg";
import ChickennChips from "~/public/Chicken-and-Chips.jpeg";
import Link from "next/link";

export default function CartItemCard(){
    const LatestOrders = [
        {
          name: "Jollof Rice",
          image: Jollof,
          description: "Mixed with chicken, plantain and coleslaw.",
          price: 1000,
          qty: 2,
        },
        {
          name: "Rice and Beans",
          image: RicenBeans,
          description: "Mixed with beef, plantain and coleslaw.",
          price: 1100,
          qty: 2,
        },
        {
          name: "Fried Rice",
          image: FriedRice,
          description: "Mixed with chicken, plantain and coleslaw.",
          price: 1200,
          qty: 2,
        },
        {
          name: "Pounded Yam",
          image: PoundedYam,
          description: "With Efo riro, snail and chicken",
          price: 1200,
          qty: 2,
        },
        {
          name: "Indomie Noodles",
          image: Indomie,
          description: "Mixed with fried egg, chicken and susage.",
          price: 700,
          qty: 2,
        },
        {
          name: "Chicken and Chips",
          image: ChickennChips,
          description: "Mix of chicken, chips and sauce.",
          price: 1000,
          qty: 2,
        },
      ];
    return(
        <div className="shadow py-4 rounded-md w-[420px] space-y-3">
      <div className="flex px-3 justify-between items-center">
        <p className="text-lg font-bold">Latest Orders</p>
        <p className="rounded-md text-white bg-custom-yellow text-base py-2 px-3 cursor-pointer font-semibold">
          <Link href="admin/customers-order">
            View All
          </Link>
        </p>
      </div>
      <div className="">
        {LatestOrders.map((foodItem, id, arr) => (
          <div
            key={id}
            className={cn(
              "flex justify-between items-start px-3 gap-3 py-3 border-t border-[#e5e7eb] hover:bg-[#e5e7eb] cursor-pointer transition-all duration-150",
              id === arr.length && "pb-0"
            )}
          >
            <div className="flex gap-3 w-[300px]">
              <Image
                sizes="30"
                src={foodItem.image}
                className="rounded-md object-cover w-20 h-20"
                alt=""
              />
              <div>
                <p className="font-bold">{foodItem.name}</p>
                <p className="text-[#999999] text-sm">{foodItem.description}</p>
              </div>
            </div>
            <div className="w-16 ">
              <p className="font-bold">&#8358;&nbsp;{foodItem.price}</p>
              <p className="text-[#999999] text-sm">Qty: {foodItem.qty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}