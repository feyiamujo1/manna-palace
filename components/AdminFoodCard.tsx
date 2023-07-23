import Image, { StaticImageData } from "next/image";
import { TbEdit } from "react-icons/tb";
import { cn } from "~/lib/utils";


type Props = { id: number, name: string, description: string, price: number, category: string, image: StaticImageData, setShowDialog: Function };

export default function AdminFoodCard({ id, name, description, price, category, image, setShowDialog } : Props){
    return(
        <div onClick={()=>setShowDialog(true)} className="group pb-2.5 cursor-pointer relative shadow rounded-md overflow-y-hidden duration-300 hover:-translate-y-3 transition">
            <TbEdit className="absolute z-20 text-2xl top-4 right-4 w-10 h-10 p-2 rounded-full bg-white group-hover:bg-custom-yellow group-hover:text-white transition duration-200" />
            <Image
                src={image}
                alt="Food Image"
                sizes="45"
                className={cn("w-full h-44 object-cover z-10", category==="Drinks" && "md:object-fill")}
              />
              <div className="p-3 space-y-3">
                <div>
                  <p className="font-bold">{name}</p>
                  <p className="text-[#999999] text-sm">
                    {description}
                  </p>
                </div>
                <p className="font-bold text-lg">&#8358; {price}</p>
              </div>
        </div>
    )
}