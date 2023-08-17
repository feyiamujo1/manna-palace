"use client"


import MenuToggler from "~/components/MenuToggler";

import FoodImage from "~/public/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai.jpg";
import Amala from "~/public/Amala-and-Gbegiri.jpeg";
import ChickennChips from "~/public/Chicken-and-Chips.jpeg";
import FriedRice from "~/public/Fried-rice.jpeg";
import JollofFriedRice from "~/public/Jollof-and-Fried-Rice.jpeg";
import Indomie from "~/public/korean-instant-noodles-spicy-instant-noodles.jpg";
import EwaGee from "~/public/ewaagoyinmashedbeans.jpg";
import RicenBeans from "~/public/Rice-and-Beans.jpeg";
import YamP from "~/public/Yam-Porridge.jpeg";
import YamnEgg from "~/public/Yam-and-Egg.jpeg";
import Spag from "~/public/Spaghetti.jpeg";
import MeatPie from "~/public/meat-pie.jpg";
import Popcorn from "~/public/popcorn.jpg";
import DoughNut from "~/public/omar-al-ghosson-_ZaKDm5iJfU-unsplash.jpg";
import IceCream from "~/public/pexels-calebe-miranda-108370.jpg";
import PoundedYam from "~/public/pounded-yam.jpg";
import Eba from "~/public/eba.webp";
import Coke from "~/public/stock-photo-irvine-california-june-two-plastic-bottles-of-coca-cola-in-a-bed-of-ice-1997584712.jpg";
import Jollof from "~/public/Jollof_Rice_with_Stew.jpg";
import Fanta from "~/public/stock-photo-zaporizhzhia-ukraine-june-row-of-fanta-bottles-on-a-shelf-in-a-store-2316657969.jpg";
import Sprite from "~/public/stock-photo-stuttgart-germany-august-sprite-lemonade-soft-drink-in-a-plastic-bottle-on-ice-cubes-2041135454.jpg";
import { useContext, useState } from "react";
import CustomerFoodCard from "~/components/CustomerFoodCard";
import NavBar from "~/components/UsersNavbar";
import { CartContext } from "~/app/context/CartContext";

export default function Menu() {
  const FoodList = [
    {
      id: 0,
      name: "Jollof Rice",
      image: Jollof,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1000,
      category: "Meal",
    },
    {
      id: 1,
      name: "Rice and Beans",
      image: RicenBeans,
      description: "Mixed with beef, plantain and coleslaw.",
      price: 1100,
      category: "Meal",
    },
    {
      id: 2,
      name: "Yam and Egg",
      image: YamnEgg,
      description: "Boiled yam with fried egg.",
      price: 1100,
      category: "Meal",
    },
    {
      id: 3,
      name: "Fried Rice",
      image: FriedRice,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1200,
      category: "Meal",
    },
    {
      id: 4,
      name: "Basmatic Rice",
      image: FoodImage,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1200,
      category: "Meal",
    },
    {
      id: 5,
      name: "Yam Porridge",
      image: YamP,
      description: "Mixed with Beef, plantain and coleslaw.",
      price: 1200,
      category: "Meal",
    },
    {
      id: 6,
      name: "Amala",
      image: Amala,
      description: "With ewedu and gbegiri with bush meat.",
      price: 1000,
      category: "Swallow",
    },
    {
      id: 7,
      name: "Eba",
      image: Eba,
      description: "With okro soup and bush meat.",
      price: 900,
      category: "Swallow",
    },
    {
      id: 8,
      name: "Pounded Yam",
      image: PoundedYam,
      description: "With egusi, snail and bush meat.",
      price: 1500,
      category: "Swallow",
    },
    {
      id: 9,
      name: "Ewa Agoyin",
      image: EwaGee,
      description: "Mixed with special sauce, plantain and ponmo.",
      price: 1000,
      category: "Meal",
    },
    {
      id: 10,
      name: "Indomie Noodles",
      image: Indomie,
      description: "Mixed with fried egg, chicken and susage.",
      price: 700,
      category: "Meal",
    },
    {
      id: 11,
      name: "Jollof and Fried Rice",
      image: JollofFriedRice,
      description: "With chicken, plantain and coleslaw.",
      price: 1300,
      category: "Meal",
    },
    {
      id: 12,
      name: "Chicken and Chips",
      image: ChickennChips,
      description: "Mix of chicken, chips and sauce.",
      price: 1000,
      category: "Snacks",
    },
    {
      id: 13,
      name: "Spaghetti",
      image: Spag,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1000,
      category: "Meal",
    },
    {
      id: 14,
      name: "Doughnut",
      image: DoughNut,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1000,
      category: "Snacks",
    },
    {
      id: 15,
      name: "Pop Corn",
      image: Popcorn,
      description: "A corn of buttered popcorn.",
      price: 250,
      category: "Snacks",
    },
    {
      id: 16,
      name: "Meat Pie",
      image: MeatPie,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1000,
      category: "Snacks",
    },
    {
      id: 17,
      name: "Ice Cream",
      image: IceCream,
      description: "Chocolate Flavour",
      price: 500,
      category: "Snacks",
    },
    {
      id: 18,
      name: "Coke",
      image: Coke,
      description: "Chilled coke",
      price: 250,
      category: "Drinks",
    },
    {
      id: 19,
      name: "Fanta",
      image: Fanta,
      description: "Chilled fanta",
      price: 250,
      category: "Drinks",
    },
    {
      id: 20,
      name: "Sprite",
      image: Sprite,
      description: "Chilled sprite",
      price: 250,
      category: "Drinks",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState("Meal");

  const { cart, addToCart, getTotalItems } = useContext(CartContext);

  return (
    <main className="w-full relative scroll-smooth">
      <NavBar cart={cart} getTotalItems={getTotalItems} />
      <section className="min-h-screen py-10 bg-slate-100" id="menu">
        <div className="w-11/12 mx-auto space-y-6">
          <div className=" space-y-2 mt-20">
            <h2 className=" font-extrabold text-2xl md:text-3xl text-center">
              Our Menu
            </h2>
            <p className="text-center">
              Browse through the menu, select your desired items, customize your
              order, and securely place it with just a few clicks.
            </p>
          </div>
          <div>
            <MenuToggler
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {FoodList.filter(foodItem => foodItem.category === selectedCategory).map(filteredItem => 
              <CustomerFoodCard
                key={filteredItem.id}
                id={filteredItem.id}
                name={filteredItem.name}
                description={filteredItem.description}
                price={filteredItem.price}
                category={filteredItem.category}
                image={filteredItem.image}
                addToCart = {addToCart}
              />
                )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
