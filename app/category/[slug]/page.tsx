import ProductItem from "@/app/_components/product-item";
import { prismaClient } from "@/app/_lib/prisma";
import CategoriesBadge from "@/app/_components/title-badge";
import { categoryIcon } from "@/app/constants/category-icons";
import { computeProductTotalPrice } from "@/app/helpers/product";

interface CategoryProductProps {
  params: {
    slug: string;
  };
}

const CategoryProduct = async ({ params }: CategoryProductProps) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <div className="mb-8 flex flex-col gap-8">
      <div className="mt-5 px-5">
        <CategoriesBadge>
          {categoryIcon[params.slug as keyof typeof categoryIcon]}
          <span className="capitalize">{category.name}</span>
        </CategoriesBadge>
      </div>
      <div className="grid grid-cols-2 gap-4 px-5">
        {category.products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              product={computeProductTotalPrice(product)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryProduct;
