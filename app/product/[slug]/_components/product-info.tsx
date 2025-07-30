"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { ProductWithTotalPrice } from "@/app/helpers/product";
import { CartContext } from "@/app/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductInfoProps {
  product: ProductWithTotalPrice
}

const ProductInfo = ({
  product
}: ProductInfoProps) => {
  const [currencyQuantity, setCurrencyQuantity] = useState(1);
  const {addToCart} = useContext(CartContext)

  const handleAddCurrencyQuantity = () => {
    setCurrencyQuantity(currencyQuantity + 1);
  };

  const handleRemoveCurrencyQuantity = () => {
    if (currencyQuantity === 1) return;
    setCurrencyQuantity(currencyQuantity - 1);
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: currencyQuantity
    })
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-lg">{product.name}</h1>

        {product.discountPercentage ? (
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold">R${product.unitPriceWithDiscount.toFixed(2)}</p>
              <Badge>{product.discountPercentage}%</Badge>
            </div>

            <p className="opacity-70">
              De:
              <span className="line-through">
                R${Number(product.basePrice).toFixed(2)}
              </span>
            </p>
          </div>
        ) : (
          <p className="text-xl font-bold">R${Number(product.basePrice).toFixed(2)}</p>
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
        <p className="text-sm opacity-70">{product.description}</p>
      </div>

      <Button className="w-full font-bold" onClick={handleAddToCart}>Adicionar ao Carrinho</Button>
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
