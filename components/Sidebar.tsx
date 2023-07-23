"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoFastFood } from "react-icons/io5"
import { GiOpenBook } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa"

import { cn } from "~/lib/utils";

const routes = [
  {
    name: "Home",
    icon: <MdDashboard className="text-2xl md:text-lg" />,
    path: "/admin",
  },
  {
    name: "Customer's Orders",
    icon: <GiOpenBook className="text-2xl md:text-lg" />,
    path: "/admin/customers-order",
  },
  {
    name: "Food Items",
    icon: <IoFastFood className="text-2xl md:text-lg" />,
    path: "/admin/food-items",
  },
  // {
  //   name: "Payment Record",
  //   icon: <FaMoneyCheckAlt className="text-2xl md:text-lg" />,
  //   path: "/admin/payment-record",
  // },
];

export default function SideBar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Function;
}) {
  const currentRoute = usePathname();
  console.log(currentRoute)

  return (
    <div
      className={cn(
        "fixed z-30 h-screen space-y-4 bg-white px-2 py-10 pt-[100px] shadow-lg transition-all md:w-[270px] xl:w-[300px] md:px-6 md:opacity-100",
        isOpen && "w-[300px] opacity-100",
        !isOpen && "w-0 overflow-hidden opacity-0"
      )}
    >
      {routes.map((route) => (
        <div
          key={route.name}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={cn(
            "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-base font-semibold ",
            currentRoute.includes(route.path) &&
              "bg-custom-yellow text-white hover:bg-custom-yellow",
            currentRoute !== route.path &&
              "bg-[#f9fafb] text-black hover:bg-custom-yellow hover:text-white"
          )}
        >
          <Link href={route.path} className="flex w-full items-center gap-2">
            {route.icon}
            <span>{route.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
