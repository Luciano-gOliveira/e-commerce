import { prismaClient } from "@/app/_lib/prisma";
import CategoryItem from "./categorie-item";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
