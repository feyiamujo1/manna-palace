import { cn } from "~/lib/utils";

type Props = { selectedCategory: string, setSelectedCategory: Function }

export default function MenuToggler({ selectedCategory, setSelectedCategory }: Props) {
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
  return (
    <div className="flex gap-1 md:gap-2 mx-auto w-fit py-2 px-3 text-sm bg-[#152a3b] text-slate-300 rounded-xl border border-custom-yellow">
      {categories.map((category, id) => (
        <p
          key={id}
          onClick={() => {
            setSelectedCategory(category.name);
          }}
          className={cn(
            "py-2 px-3 rounded-lg cursor-pointer transition duration-300",
            selectedCategory === category.name && "bg-custom-yellow hover:bg-light-custom-yellow text-white",
            selectedCategory !== category.name &&
              "bg-[#152a3b] hover:bg-light-custom-yellow hover:text-white"
          )}
        >
          {category.name}
        </p>
      ))}
    </div>
  );
}
