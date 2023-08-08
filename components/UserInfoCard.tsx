import { OrderedItem } from "~/types/OrderedItem";

export default function UserCartCard({cart, getTotalCost, getTotalItems}:{cart: Array<OrderedItem>, getTotalCost: Function, getTotalItems: Function}){
    const totalCost = getTotalCost();
    const totalItems = getTotalItems()
    return(
        <div className="shadow py-4 rounded-md w-full md:w-[410px] h-fit space-y-3">
            <div className="flex px-3 justify-between items-center">
                <p className="text-lg font-bold">User Details</p>
            </div>
            <div className="p-3 border-t border-[#e5e7eb] space-y-2">
                <div className="w-full flex justify-between">
                    <p className="font-semibold text-[#999999]">
                     Full Name
                    </p>
                    <p className="font-semibold capitalize">
                        Ajayi Pius Olukayode
                    </p>
                </div>
                <div className="w-full flex justify-between">
                    <p className="font-semibold text-[#999999]">
                     Email
                    </p>
                    <p className="font-semibold">
                        ajayipius@gmail.com
                    </p>
                </div>
                <div className="w-full flex justify-between">
                    <p className="font-semibold text-[#999999]">
                     Phone Number
                    </p>
                    <p className="font-semibold capitalize">
                        08170777436
                    </p>
                </div>
                <div className="w-full justify-between space-y-2">
                    <div className="w-full flex justify-between items-center">
                        <p className="font-semibold text-[#999999]">
                            Delivery Address
                        </p>
                        <p className="cursor-pointer text-sm text-custom-yellow ">Change Address</p>
                    </div>
                    <p className="font-semibold capitalize border rounded py-3 px-3 text-[#999999]">
                        Prophet Moses Hall
                    </p>
            </div>
                
            </div>
            {/* <hr /> */}
            {/* <div className="flex px-3 justify-between items-center">
                    <p className="text-lg font-bold">Cart Information</p>
            </div> */}
            <div className="px-3 pt-3 border-t border-[#e5e7eb] space-y-2">
                <div className="w-full flex justify-between">
                    <p className="font-semibold">
                     Number of Items
                    </p>
                    <p className="font-semibold capitalize">
                        {totalItems}
                    </p>
                </div>
            </div>
            <hr />
            
            <div className="flex px-3 py-4 justify-between items-center">
                <p className="font-semibold ">
                    Amount to be paid
                </p>
                <p className="font-semibold">
                    &#8358;&nbsp;{totalCost}
                </p>
            </div>
            <div className="flex gap-4 px-3 justify-between items-center text-custom-yellow">
                <a href="/menu" className="py-2 px-4 w-full font-medium text-white text-center hover:bg-light-custom-yellow transition-all bg-custom-blue rounded-md">
                    <p>
                        Go To Menu
                    </p>
                </a>
                <p className="py-2 px-4 w-full font-medium text-white text-center cursor-pointer hover:bg-light-custom-yellow transition-all bg-custom-yellow rounded-md">
                    Confirm Order
                </p>
            </div>
        </div>
    )
}