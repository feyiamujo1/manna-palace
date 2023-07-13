import { MdFastfood, MdFoodBank } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import LineChartComponent from "../../../components/Linechart";
import { cn } from "~/lib/utils";
import OrderList from "../../../components/OrderList";

export default function Homepage() {
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Dashboard</h2>
        <p className=" py-1.5 px-3 rounded-md bg-custom-yellow text-white font-bold ">
          Jul 4, 2023
        </p>
      </div>
      <hr />
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
              <p className="text-sm font-medium text-[#999999]">Total Orders</p>
            </div>
            <MdFoodBank className="text-[42px] text-custom-yellow" />
          </div>
          <div className="flex h-fit justify-between items-center gap-4 py-5 px-4 rounded shadow ">
            <div className="space-y-1">
              <p className="font-bold text-5xl color-custom-yellow">56,500</p>
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
          <div className="col-span-2 row-span-2 w-full h-full py-5 pr-4 -pl-4 rounded shadow">
            <LineChartComponent />
          </div>
        </div>
        <OrderList />
      </div>
    </div>
  );
}
