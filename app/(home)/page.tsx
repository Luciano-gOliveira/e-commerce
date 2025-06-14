import Categories from "./_components/categories";
import { prismaClient } from "../_lib/prisma";
import ProductList from "../_components/product-list";
import SectionTitle from "./_components/section-title";
import PromoBanner from "./_components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards"
      }
    }
  })
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses"
      }
    }
  })
  return (
    <div className="p-5">
      <PromoBanner
        src="/banner-discount01.png"
        alt="até 55% de desconto só esse mês"
      />
      <div className="mt-8">
        <Categories />      
      </div>

      <div className="mt-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <div className="mt-8">
        <PromoBanner
          src="/banner-mouses.png"
          alt="até 55% de desconto só esse mês"
        />
      </div>

      <div className="mt-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <div className="mt-8">
        <PromoBanner
          src="/banner-fones.png"
          alt="até 55% de desconto só esse mês"
        />
      </div>

      <div className="mt-8">
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
