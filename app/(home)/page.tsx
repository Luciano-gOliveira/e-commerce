import Image from "next/image";
import Categories from "./_components/categories";

export default function Home() {
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
    </div>
  );
}
