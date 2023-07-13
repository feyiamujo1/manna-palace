"use client";
import Image from "next/image";
import { cn } from "~/lib/utils";
import { TbEdit } from "react-icons/tb";
import FoodImage from "~/public/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai.jpg";
import { useState } from "react";

export default function CategoriesPage() {
  const FoodList = [
    {
      name: "Jollof Rice",
      image: FoodImage,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1000,
      category: "Meal",
    },
    {
      name: "Rice and Beans",
      image: FoodImage,
      description: "Mixed with beef, plantain and coleslaw.",
      price: 1100,
      category: "Meal",
    },
    {
      name: "Fried Rice",
      image: FoodImage,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1200,
      category: "Meal",
    },
    {
      name: "Pounded Yam",
      image: FoodImage,
      description: "With Efo riro, snail and chicken",
      price: 1200,
      category: "Swallow",
    },
    {
      name: "Indomie Noodles",
      image: FoodImage,
      description: "Mixed with fried egg, chicken and susage.",
      price: 700,
      category: "Meal",
    },
    {
      name: "Fried Yam",
      image: FoodImage,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1000,
      category: "Meal",
    },
    {
      name: "Jollof Rice",
      image: FoodImage,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1000,
      category: "Meal",
    },
    {
      name: "Doughnut",
      image: FoodImage,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1000,
      category: "Snacks",
    },
    {
      name: "Meat Pie",
      image: FoodImage,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1000,
      category: "Snacks",
    },
    {
      name: "Ice Cream",
      image: FoodImage,
      description: "Chocolate Flavour",
      price: 1000,
      category: "Snacks",
    },
    {
      name: "Bigi Coke",
      image: FoodImage,
      description: "Chilled Coke",
      price: 250,
      category: "Drinks",
    },
  ];
  const categories = [
    {
      name: "Meal",
    },
    {
      name: "Swallow",
    },
    {
      name: "Snacks",
    },
    {
      name: "Drinks",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState("Meal");

  return (
    <div className="space-y-5 min-h-screen">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Food Items</h2>
        <p className=" py-1.5 px-3 rounded-md bg-custom-yellow text-white font-bold ">
          Total: 30
        </p>
      </div>
      <hr />
      <div className="flex gap-2 mx-auto w-fit py-2 px-3 text-sm bg-[#000] text-slate-300 rounded-xl border border-custom-yellow">
        {categories.map((category, id) => (
          <p
            key={id}
            onClick={()=>{setSelectedCategory(category.name)}}
            className={cn(
              "py-2 px-3 rounded-lg cursor-pointer transition duration-300",
              selectedCategory === category.name &&
                "bg-custom-yellow text-white",
              selectedCategory !== category.name &&
                "bg-[#000] hover:bg-custom-yellow hover:text-white "
            )}
          >
            {category.name}
          </p>
        ))}
      </div>
      <div className=" grid grid-cols-4 gap-4">
        {FoodList.map((foodItem, id) =>
          foodItem.category === selectedCategory ? (
            <div
              key={id}
              className="group pb-2.5 cursor-pointer relative shadow rounded-md overflow-y-hidden duration-300 hover:-translate-y-3 transition"
            >
              <TbEdit className="absolute z-20 text-2xl top-4 right-4 w-10 h-10 p-2 rounded-full bg-white group-hover:bg-custom-yellow group-hover:text-white transition duration-200" />
              <Image
                src={foodItem.image}
                alt="Food Image"
                sizes="45"
                className="w-full h-44 object-cover"
              />
              <div className="p-3 space-y-3">
                <div>
                  <p className="font-bold">{foodItem.name}</p>
                  <p className="text-[#999999] text-sm">
                    {foodItem.description}
                  </p>
                </div>
                <p className="font-bold text-lg">&#8358; {foodItem.price}</p>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
