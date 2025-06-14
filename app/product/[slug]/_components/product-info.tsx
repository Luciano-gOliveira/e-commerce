"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { ProductWithTotalPrice } from "@/app/helpers/product";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "totalPrice" | "discountPercentage" | "description" | "name"
  >;
}

const ProductInfo = ({
  product: { basePrice, totalPrice, discountPercentage, description, name },
}: ProductInfoProps) => {
  const [currencyQuantity, setCurrencyQuantity] = useState(1);

  const handleAddCurrencyQuantity = () => {
    setCurrencyQuantity(currencyQuantity + 1);
  };

  const handleRemoveCurrencyQuantity = () => {
    if (currencyQuantity === 1) return;
    setCurrencyQuantity(currencyQuantity - 1);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-lg">{name}</h1>

        {discountPercentage ? (
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold">R${totalPrice.toFixed(2)}</p>
              <Badge>{discountPercentage}%</Badge>
            </div>

            <p className="opacity-70">
              De:
              <span className="line-through">
                R${Number(basePrice).toFixed(2)}
              </span>
            </p>
          </div>
        ) : (
          <p className="text-xl font-bold">R${Number(basePrice).toFixed(2)}</p>
        )}
        <div className="flex items-center gap-2">
          <Button
            onClick={() => handleRemoveCurrencyQuantity()}
            className={`${currencyQuantity === 1 ? "cursor-not-allowed bg-secondary opacity-40 hover:bg-secondary" : "bg-secondary hover:bg-secondary"}`}
            size="icon"
          >
            <ArrowLeftIcon />
          </Button>
          <span className="text-md font-medium">{currencyQuantity}</span>
          <Button
            onClick={() => handleAddCurrencyQuantity()}
            className="bg-secondary"
            size="icon"
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </div>

      {/* DESCRIPTION  */}
      <div className="space-y-2">
        <h2 className="text-lg font-bold">Descrição</h2>
        <p className="text-sm opacity-70">{description}</p>
      </div>

      <Button className="w-full font-bold">Adicionar ao Carrinho</Button>
      <div className="flex items-center justify-between gap-2 rounded-md bg-accent px-5 py-2">
        <div className="flex items-center gap-2">
          <TruckIcon />
          <div>
            <h2>
              Entrega via <span className="font-bold">VPacket</span>
            </h2>
            <p className="text-sm text-[#8162FF]">
              Envio para <span className="font-bold">todo o Brasil</span>
            </p>
          </div>
        </div>
        <p className="text-sm font-bold">Frete grátis</p>
      </div>
      
    </div>
  );
};

export default ProductInfo;
