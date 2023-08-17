"use client";
import { useSession } from "next-auth/react";
import { OrderedItem } from "~/types/OrderedItem";

export default function UserCartCard({
  cart,
  getTotalCost,
  getTotalItems,
}: {
  cart: Array<OrderedItem>;
  getTotalCost: Function;
  getTotalItems: Function;
}) {
  const totalCost = getTotalCost();
  const totalItems = getTotalItems();
  const { data: session } = useSession();
  const CheckOut = () => {};
  const handleChange = () => {};
  return (
    <div className="shadow-md py-4 rounded-md w-full md:w-[410px] h-fit space-y-3">
      <div className="flex px-3 justify-between items-center">
        <p className="text-lg font-bold">User Details</p>
      </div>
      <div className="p-3 border-t border-[#e5e7eb] space-y-2">
        <div className="w-full flex justify-between">
          <p className="font-semibold text-[#999999]">Full Name</p>
          <p className="font-semibold capitalize">{session?.user?.fullName}</p>
        </div>
        <div className="w-full flex justify-between">
          <p className="font-semibold text-[#999999]">Email</p>
          <p className="font-semibold">{session?.user?.email}</p>
        </div>
        <div className="w-full flex justify-between">
          <p className="font-semibold text-[#999999]">Phone Number</p>
          <p className="font-semibold capitalize">
            {session?.user?.phoneNumber}
          </p>
        </div>
        <div className="w-full justify-between space-y-2">
          <div className="w-full flex justify-between items-center">
            <p className="font-semibold text-[#999999]">Delivery Address</p>
            <p className="cursor-pointer text-sm text-custom-yellow ">
              Enter address below
            </p>
          </div>
          <form action="" onSubmit={CheckOut} className="w-full">
            <input
              type="text"
              placeholder="Prophet Moses Hall"
              className="font-semibold capitalize border-0 outline-1 outline-[#999999] rounded focus:outline-custom-yellow bg-slate-100 py-3 px-3 text-[#999999] w-full place-holder:text-[#f1f1f1]"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
      <div className="px-3 pt-3 border-t border-[#e5e7eb] space-y-2">
        <div className="w-full flex justify-between">
          <p className="font-semibold">Number of Items</p>
          <p className="font-semibold capitalize">{totalItems}</p>
        </div>
      </div>
      <hr />
      <div className="flex px-3 py-4 justify-between items-center">
        <p className="font-semibold ">Amount to be paid</p>
        <p className="font-semibold">&#8358;&nbsp;{totalCost}</p>
      </div>
      <div className="flex gap-4 px-3 justify-between items-center text-custom-yellow">
        <a
          href="/menu"
          className="py-2 px-4 w-full font-medium text-white text-center hover:bg-[#919191] transition-all bg-custom-blue rounded-md"
        >
          <p>View Menu</p>
        </a>
        <button
          disabled={cart?.length < 1}
          className="py-2 px-4 w-full font-medium text-white text-center cursor-pointer hover:bg-light-custom-yellow transition-all bg-custom-yellow rounded-md disabled:opacity-75 disabled:hover:bg-custom-yellow"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}
