"use client"

import Image from "next/image";
import { CartContext, CartProduct } from "../providers/cart";
import { Button } from "./ui/button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

const CartItem = ({ product }: { product: CartProduct }) => {
    const {addQuantity, removeQuantity, removeFromCart} = useContext(CartContext)



    //adicionar quantidade ao carrinho que pode ser somada com novas adições ao mesmo produto
    const handleAddQuantity = () => {
       addQuantity(product)
    };

    const handleRemoveQuantity = () => {
      removeQuantity(product)
    }

    const handelRemoveFromCart = () => {
      removeFromCart(product)
    }
  return (
    <div className="justify-between mt-5 flex gap-3 items-center">
      {/* Imagem  */}
      <div className="flex h-[70px] w-[79px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-full max-h-[70%] w-full max-w-[70%] object-contain"
        />
      </div>
      <div>
        <h1 className="text-xs">{product.name}</h1>
        {product.discountPercentage > 0 ? (
          <div className="flex items-center gap-2">
            <p>R${product.totalPrice.toFixed(2)}</p>
            <p className="text-xs line-through opacity-70">
              R${Number(product.basePrice).toFixed(2)}
            </p>
          </div>
        ) : (
          <p className="text-sm font-bold">
            R${Number(product.basePrice).toFixed(2)}
          </p>
        )}
        <Button
          onClick={handleRemoveQuantity}
          className={`${product.quantity === 1 ? "cursor-not-allowed bg-secondary opacity-40 hover:bg-secondary" : "bg-secondary hover:bg-secondary"}`}
          size="icon"
        >
          <ArrowLeftIcon size={8} />
        </Button>
        <span className="text-md font-medium">{product.quantity}</span>
        <Button
          onClick={handleAddQuantity}
          className="bg-secondary"
          size="icon"
        >
          <ArrowRightIcon size={8} />
        </Button>
      </div>
      <Button size="icon" variant="outline" onClick={handelRemoveFromCart}>
        <TrashIcon size={12}/>
      </Button>
    </div>
  );
};

export default CartItem;
