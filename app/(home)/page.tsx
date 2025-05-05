import Image from "next/image";
import Categories from "./_components/categories";
import { prismaClient } from "../_lib/prisma";
import ProductList from "../_components/product-list";

export default async function Home() {
  const products = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  })
  return (
    <div className="p-5">
      <Image
        src="/banner-discount01.png"
        className="h-auto w-full"
        sizes="100vw"
        alt="até 55% de desconto só esse mês"
        width={0}
        height={0}
      />
      <div className="mt-8">
        <Categories />      
      </div>

      <div className="mt-8">
        <ProductList products={products} />
      </div>
    </div>
  );
}
