"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "~/lib/utils";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function CustomersOrderPage() {
  const [orderBy, setOrderBy] = useState("today");

  const CustomersOrders = [
    {
      id: 0,
      date: "22/07/2023, 6:46pm",
      customer: {
        name: "Ajayi Pius Olukayode",
        phone: "+2348170777436",
        email: "ajayipius@gmail.com",
        location: "Prophet Moses Hall",
      },
      orders: [
        { name: "Rice and Beans", qty: 1 },
        { name: "Jollof Rice", qty: 1 },
      ],
      price: 2400,
      status: "Pending",
    },
    {
      id: 1,
      date: "22/07/2023, 6:46pm",
      customer: {
        name: "Ajayi Pius Olukayode",
        phone: "+2348170777436",
        email: "ajayipius@gmail.com",
        location: "Prophet Moses Hall",
      },
      orders: [
        { name: "Rice and Beans", qty: 1 },
        { name: "Jollof Rice", qty: 1 },
      ],
      price: 2400,
      status: "Pending",
    },
    {
      id: 2,
      date: "22/07/2023, 6:46pm",
      customer: {
        name: "Ajayi Pius Olukayode",
        phone: "+2348170777436",
        email: "ajayipius@gmail.com",
        location: "Prophet Moses Hall",
      },
      orders: [
        { name: "Rice and Beans", qty: 1 },
        { name: "Jollof Rice", qty: 1 },
      ],
      price: 2400,
      status: "Fulfilled",
    },
    {
      id: 3,
      date: "22/07/2023, 6:46pm",
      customer: {
        name: "Ajayi Pius Olukayode",
        phone: "+2348170777436",
        email: "ajayipius@gmail.com",
        location: "Prophet Moses Hall",
      },
      orders: [
        { name: "Rice and Beans", qty: 1 },
        { name: "Jollof Rice", qty: 1 },
      ],
      price: 2400,
      status: "Fulfilled",
    },
    {
      id: 4,
      date: "22/07/2023, 6:46pm",
      customer: {
        name: "Ajayi Pius Olukayode",
        phone: "+2348170777436",
        email: "ajayipius@gmail.com",
        location: "Prophet Moses Hall",
      },
      orders: [
        { name: "Rice and Beans", qty: 1 },
        { name: "Jollof Rice", qty: 1 },
      ],
      price: 2400,
      status: "Fulfilled",
    },
    {
        id: 5,
        date: "22/07/2023, 6:46pm",
        customer: {
          name: "Ajayi Pius Olukayode",
          phone: "+2348170777436",
          email: "ajayipius@gmail.com",
          location: "Prophet Moses Hall",
        },
        orders: [
          { name: "Rice and Beans", qty: 1 },
          { name: "Jollof Rice", qty: 1 },
        ],
        price: 2400,
        status: "Fulfilled",
      },
  ];

  return (
    <div className="space-y-5 min-h-screen">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Orders</h2>
        <div className="flex">
          <p
            onClick={() => setOrderBy("today")}
            className={cn(
              "w-[70px] cursor-pointer text-center py-1.5 px-3 rounded-l-md text-white font-bold transition duration-300",
              orderBy === "today" && "bg-custom-yellow",
              orderBy === "all" && "bg-[#152a3b]"
            )}
          >
            Today
          </p>
          <p
            onClick={() => setOrderBy("all")}
            className={cn(
              "w-[70px] cursor-pointer text-center py-1.5 px-3 rounded-r-md text-white font-bold transition duration-300",
              orderBy === "all" && "bg-custom-yellow",
              orderBy === "today" && "bg-[#152a3b]"
            )}
          >
            All
          </p>
        </div>
      </div>
      <hr />
      <div></div>
      <div className="flex flex-col min-h-screen overflow-x-scroll md:overflow-x-hidden">
        <div className="">
          <div className="pb-4 inline-block min-w-full">
            <div className="overflow-hidden">
              <table className="w-full box-border md:min-w-full text-left">
                <thead className="border-b bg-[#152a3b] text-black">
                  <tr className="text-base">
                    <th className="text-sm text-center font-medium text-white px-4 md:px-0 py-4">
                      S/N
                    </th>
                    <th className="text-sm font-medium text-white px-4 md:px-2 py-4 w-[180px]">
                      Date
                    </th>
                    <th className="text-sm font-medium text-white px-4 md:px-2 py-4">
                      Customer
                    </th>
                    <th className="text-sm font-medium text-white px-4 md:px-2 py-4">
                      Order
                    </th>
                    <th className="text-sm font-medium text-white px-4 md:px-2 py-4">
                      Price
                    </th>
                    <th className="text-sm font-medium text-white px-4 md:px-4 py-4 text-center">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CustomersOrders.map((CustomersOrder, count) => (
                    <tr key={CustomersOrder.id} className="bg-white border-b text-base">
                      <td className=" py-4 whitespace-nowrap text-sm font-medium text-black text-center px-4 md:px-1">
                        {count+1}
                      </td>
                      <td className="text-sm text-black px-4 md:px-2 py-4 whitespace-nowrap">
                        {CustomersOrder.date}
                      </td>
                      <td className="text-sm text-black px-4 md:px-2 py-4 whitespace-nowrap">
                        <span className="block">{CustomersOrder.customer.name}</span>
                        <span className="block">{CustomersOrder.customer.phone}</span>
                        <span className="block">{CustomersOrder.customer.email}</span>
                        <span className="block">{CustomersOrder.customer.location}</span>
                      </td>
                      <td className="text-sm text-black px-4 md:px-2 py-4 whitespace-nowrap">
                        {
                            CustomersOrder.orders.map((order, id)=>(
                                <span key={id} className="block">{order.name}, qty: {order.qty}</span>
                            ))
                        }
                      </td>
                      <td className="text-sm text-black px-4 md:px-2 py-4 whitespace-nowrap">
                        &#8358; {CustomersOrder.price}
                      </td>
                      <td className="text-sm px-4 md:px-2 py-4 whitespace-nowrap text-center">
                        <span className={cn("px-2 py-3 rounded-md text-white cursor-pointer", CustomersOrder.status === "Fulfilled" && "bg-[#999999]", CustomersOrder.status !== "Fulfilled" && "bg-custom-yellow")}>
                          {CustomersOrder.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className='text-[#999999] text-sm text-center font-medium'><span className='text-black'>{CustomersOrders.length}</span> of <span className='text-black'>{CustomersOrders.length}</span></p>
        <div className='py-3 px-5 flex flex-row justify-between text-sm'>
          <p className={cn('flex flex-row font-semibold gap-1 items-center py-2 px-3 rounded-md md:hover:bg-custom-brown active:bg-custom-brown text-white cursor-pointer', CustomersOrders.length >= 10 && "", CustomersOrders?.length < 10 && " bg-[#999999]")}><IoIosArrowBack /> Previous</p>
          <p className={cn('flex flex-row font-semibold gap-1 items-center py-2 px-5 rounded-md md:hover:bg-custom-brown active:bg-custom-brown text-white cursor-pointer', CustomersOrders?.length >= 10 && "bg-custom-yellow", CustomersOrders?.length < 10 && " bg-[#999999]")}>Next <IoIosArrowForward /></p>
        </div>
      </div>
    </div>
  );
}
