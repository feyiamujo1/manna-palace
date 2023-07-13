import Image from "next/image"
import FoodImage from '~/public/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai.jpg'
import { MdFastfood, MdFoodBank } from "react-icons/md"
import { FaMoneyBillWave } from "react-icons/fa"
import { HiUsers } from "react-icons/hi"
// import LineChart from "./Linechart"
export default function Homepage(){

    const LatestOrders = [
        {name: "Jollof Rice", image: FoodImage, description: "Mixed with chicken, plantain and coleslaw.", price: 1000, qty: 2},
        {name: "Rice and Beans", image: FoodImage, description: "Mixed with beef, plantain and coleslaw.", price: 1100, qty: 2},
        {name: "Fried Rice", image: FoodImage, description: "Mixed with chicken, plantain and coleslaw.", price: 1200, qty: 2},
        {name: "Pounded Yam", image: FoodImage, description: "With Efo riro, snail and chicken", price: 1200, qty: 2},
        {name: "Indomie Noodles", image: FoodImage, description: "Mixed with fried egg, chicken and susage.", price: 700, qty: 2},
        // {name: "Jollof Rice", image: FoodImage, description: "Mixed with chicken, plantain and coleslaw.", price: 1000, qty: 2},
        // {name: "Jollof Rice", image: FoodImage, description: "Mixed with chicken, plantain and coleslaw.", price: 1000, qty: 2}
    ]

    return(
        <div className="space-y-5">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-xl">Dashboard</h2>
                <p className=" py-1 px-2 rounded-md bg-[#999999] font-medium">Jul 4, 2023</p>
            </div>
            <div className="w-full flex gap-5 justify-between">
                <div className="w-full h-fit grid grid-cols-2 gap-4">
                    <div className="flex h-fit justify-between items-center gap-4 py-5 px-4 rounded shadow ">
                        <div className="space-y-1">
                            <p className="font-bold text-5xl color-custom-yellow">13</p>
                            <p className="text-sm font-medium text-[#999999]">
                                Total Unfulfiled Orders
                            </p>
                        </div>
                        <MdFastfood className="text-4xl text-custom-yellow" />
                    </div>
                    <div className="flex h-fit justify-between items-center gap-4 py-5 px-4 rounded shadow ">
                        <div className="space-y-1">
                            <p className="font-bold text-5xl color-custom-yellow">120</p>
                            <p className="text-sm font-medium text-[#999999]">
                                Total Orders 
                            </p>
                        </div>
                        <MdFoodBank className="text-[42px] text-custom-yellow" />
                    </div>
                    <div className="flex h-fit justify-between items-center gap-4 py-5 px-4 rounded shadow ">
                        <div className="space-y-1">
                            <p className="font-bold text-5xl color-custom-yellow">500,000</p>
                            <p className="text-sm font-medium text-[#999999]">
                                Amount Made Today
                            </p>
                        </div>
                        <FaMoneyBillWave className="text-4xl text-custom-yellow" />
                    </div>
                    <div className="flex h-fit justify-between items-center gap-4 py-5 px-4 rounded shadow ">
                        <div className="space-y-1">
                            <p className="font-bold text-5xl color-custom-yellow">100</p>
                            <p className="text-sm font-medium text-[#999999]">
                                Total Daily Customers
                            </p>
                        </div>
                        <HiUsers className="text-4xl text-custom-yellow" />
                    </div>
                    {/* <div className=" col-span-2">
                        <LineChart />
                    </div> */}
                </div>
                <div className="shadow-xl px-3 py-4 rounded-md w-[420px] space-y-3">
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-bold">Latest Orders</p>
                        <p className="rounded-md text-white bg-custom-yellow text-base py-2 px-3 cursor-pointer font-semibold">View All</p>
                    </div>
                    <div className="">
                        {
                            LatestOrders.map((foodItem, id) => (
                                <div key={id} className="flex justify-between items-start gap-3 py-3 border-t border-[#e5e7eb] hover:bg-[#e5e7eb] cursor-pointer transition-all">
                                    <div className="flex gap-3 w-[310px]">
                                        <Image sizes="30" src={foodItem.image} className="rounded-md object-cover w-20 h-20"  alt="" />
                                        <div>
                                            <p className="font-bold">
                                            {foodItem.name}  
                                            </p>
                                            <p className="text-[#999999] text-sm">
                                                {foodItem.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold">&#8358; {foodItem.price}</p>
                                        <p className="text-[#999999] text-sm">Qty: {foodItem.qty}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
    
}