import Image from "next/image";
import { cn } from "~/lib/utils";
import { TbEdit } from "react-icons/tb";
import FoodImage from "~/public/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai.jpg";

export default function CategoriesPage() {
  const FoodList = [
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
      name: "Fried Yam",
      image: FoodImage,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1000,
      qty: 2,
    },
    {
      name: "Jollof Rice",
      image: FoodImage,
      description: "Mixed with chicken, plantain and coleslaw.",
      price: 1000,
      qty: 2,
    },
  ];
  return (
    <div className=" grid grid-cols-4 gap-4">
      {FoodList.map((foodItem, id) => (
        <div
          key={id}
          className="group pb-2.5 cursor-pointer relative shadow rounded-md overflow-y-hidden duration-300 hover:-translate-y-3 transition"
        >
          <TbEdit className="absolute z-50 text-2xl top-4 right-4 w-10 h-10 p-2 rounded-full bg-white group-hover:bg-custom-yellow group-hover:text-white transition duration-200" />
          <Image
            src={foodItem.image}
            alt="Food Image"
            sizes="45"
            className="w-full h-44 object-cover"
          />
          <div className="p-3 space-y-3">
            <div>
              <p className="font-bold">{foodItem.name}</p>
              <p className="text-[#999999] text-sm">{foodItem.description}</p>
            </div>
            <p className="font-bold text-lg">&#8358; {foodItem.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
