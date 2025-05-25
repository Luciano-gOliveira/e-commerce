import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}
const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex min-w-[140px] flex-col">
      {/* IMAGEM  */}
      <div className="flex bg-custom-purple rounded-t-lg items-center w-full aspect-square justify-center">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-auto max-w-[90%] object-contain"
        />
      </div>
      {/* TEXTO  */}
      <div className="flex items-center rounded-b-lg py-4 justify-center bg-[#1A1A1A]">
        <p className="text-sm font-bold">{category.name}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
