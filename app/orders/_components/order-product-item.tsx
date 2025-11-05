import { Badge } from "@/app/_components/ui/badge";
import Image from "next/image";

interface OrderProductItemProps {
    imageUrl: string;
    productName: string;
    basePrice: number;
    discountPercentage: number;
}

const OrderProductItem = ({imageUrl, productName, basePrice, discountPercentage}: OrderProductItemProps) => {
  return (
    <div className="flex items-center gap-4" >
      <div className="flex bg-[#1A1A1A] h-[80px] rounded-t-lg items-center w-[80px] aspect-square justify-center">
        <Image
          src={imageUrl}
          alt={productName}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-auto max-w-[90%] object-contain"
        />
      </div>

      <div className="flex flex-col justify-between space-y-2">
        <Badge>
            Vendido e entregue por: Valente Store
        </Badge>
        <p>{productName}</p>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
                <p>R${(basePrice).toFixed(2)}</p>
                <p className="p-1 bg-primary rounded-md font-semibold opacity-80" >{discountPercentage}% OFF</p>
            </div>
            <p>qtd: 1</p>
        </div>
      </div>
    </div>
  );
};

export default OrderProductItem;
