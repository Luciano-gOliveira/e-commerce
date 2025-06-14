import Image from "next/image";
import { ProductWithTotalPrice } from "../helpers/product";
import { Badge } from "./ui/badge";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (

    <Link href={`/product/${product.slug}`} legacyBehavior passHref className="hover:cursor-pointer">
      <a className="flex min-w-[140px] flex-col gap-4">
        {/* IMAGEM  */}
        <div className="relative flex rounded-lg aspect-square w-full items-center justify-center bg-[#1A1A1A]">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          />
          {
            product.discountPercentage > 0 && (
              <Badge className="absolute top-2 left-2 py-[2px] px-2 gap-1 rounded-lg" >
                <ArrowDownIcon size={14}/>
                {product.discountPercentage}%
              </Badge>
            )
          }
        </div>
        {/* TEXTO */}
        <div className="flex flex-col gap-1">
          <p className="truncate text-sm">{product.name}</p>
          <div className="flex items-center gap-2">
            {
              product.discountPercentage > 0 ? (
                <>
                  <p className="font-semibold">
                    R$ {product.totalPrice.toFixed(2)}
                  </p>
                  <p className="ml-2 line-through text-xs text-muted-foreground">
                    R$ {Number(product.basePrice.toFixed(2))}
                  </p>
                </>
              ) : (
                <p className="font-semibold text-sm">
                  R$ {product.basePrice.toFixed(2)}
                </p>
              )
            }
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProductItem;
