import Image from "next/image";
import { cn } from "~/lib/utils";
import FoodImage from "~/public/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai.jpg";

export default function OrderList() {
  const LatestOrders = [
    {
      name: "Jollof Rice",
      image: FoodImage,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1000,
      qty: 2,
    },
    {
      name: "Rice and Beans",
      image: FoodImage,
      description: "Mixed with beef, plantain and coleslaw.",
      price: 1100,
      qty: 2,
    },
    {
      name: "Fried Rice",
      image: FoodImage,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1200,
      qty: 2,
    },
    {
      name: "Pounded Yam",
      image: FoodImage,
      description: "With Efo riro, snail and chicken",
      price: 1200,
      qty: 2,
    },
    {
      name: "Indomie Noodles",
      image: FoodImage,
      description: "Mixed with fried egg, chicken and susage.",
      price: 700,
      qty: 2,
    },
    {
      name: "Jollof Rice",
      image: FoodImage,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1000,
      qty: 2,
    },
    // {name: "Jollof Rice", image: FoodImage, description: "Mixed with chicken, plantain and coleslaw.", price: 1000, qty: 2}
  ];
  return (
    <div className="shadow px-3 py-4 rounded-md w-[420px] space-y-3">
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold">Latest Orders</p>
        <p className="rounded-md text-white bg-custom-yellow text-base py-2 px-3 cursor-pointer font-semibold">
          View All
        </p>
      </div>
      <div className="">
        {LatestOrders.map((foodItem, id, arr) => (
          <div
            key={id}
            className={cn(
              "flex justify-between items-start gap-3 py-3 border-t border-[#e5e7eb] hover:bg-[#e5e7eb] cursor-pointer transition-all)",
              id === arr.length && "pb-0"
            )}
          >
            <div className="flex gap-3 w-[310px]">
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
            <div>
              <p className="font-bold">&#8358; {foodItem.price}</p>
              <p className="text-[#999999] text-sm">Qty: {foodItem.qty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
