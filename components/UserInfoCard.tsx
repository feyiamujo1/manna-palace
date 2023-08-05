import { OrderedItem } from "~/types/OrderedItem";

export default function UserCartCard({cart}:{cart: Array<OrderedItem>}){
    return(
        <div className="shadow py-4 rounded-md w-full md:w-[410px] h-[400px] space-y-3">
            <div className="flex px-3 justify-between items-center">
                <p className="text-lg font-bold">User Information</p>
            </div>
            <div className="p-3 p-3 border-t border-[#e5e7eb]">
            
            </div>
        </div>
    )
}