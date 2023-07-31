import Image, { StaticImageData } from "next/image";
import { TbEdit } from "react-icons/tb";
import { cn } from "~/lib/utils";
import { FoodItem } from "~/types/FoodItem";

type Props = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: StaticImageData;
  addToCart: Function;
};

export default function CustomerFoodCard({
  id,
  name,
  description,
  price,
  category,
  image,
  addToCart,
}: Props) {
  const handleItemSelection = () => {
    // setSelectedItem({
    //   id: id,
    //   name: name,
    //   description: description,
    //   price: price,
    //   category: category,
    //   image: image,
    // });
    addToCart({
      id: id,
      name: name,
      description: description,
      price: price,
      category: category,
      image: image,
    });
  };
  return (
    <div className="group pb-2.5 cursor-pointer relative shadow rounded-md overflow-y-hidden duration-300 ">
      <Image
        src={image}
        alt="Food Image"
        sizes="45"
        className={cn(
          "w-full h-44 object-cover z-10",
          category === "Drinks" && "md:object-fill"
        )}
      />
      <div className="p-3 space-y-3">
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-[#999999] text-sm">{description}</p>
        </div>
        <p className="font-bold text-lg">&#8358; {price}</p>
        <button
          onClick={handleItemSelection}
          className="py-2 w-full border-box text-center bg-custom-yellow hover:bg-light-custom-yellow text-white font-bold rounded-md"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
