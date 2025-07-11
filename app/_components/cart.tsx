"use client";

import { ShoppingBagIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "./ui/sheet";
import TitleBadge from "./title-badge";
import { CartContext } from "../providers/cart";
import { useContext } from "react";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "../helpers/product";
import { Separator } from "./ui/separator";

const Cart = () => {
  const { products, total, totalDiscount, subTotal } = useContext(CartContext);

  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button size="icon" variant={`outline`}>
          <ShoppingCartIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between w-[80%]">
        <TitleBadge>
          <ShoppingCartIcon size={16} />
          Carrinho
        </TitleBadge>
        {products.length > 0 ? (
          <>
            <div>
              {products.map(
                (product) =>
                  (
                    <CartItem
                      key={product.id}
                      product={computeProductTotalPrice(product) as any}
                    />
                  ) as any,
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <Separator />

              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>R${subTotal.toFixed(2)}</p>
              </div>
              <Separator />

              <div className="flex justify-between">
                <p>Entrega</p>
                <p>GRÁTIS</p>
              </div>
              <Separator />

              <div className="flex justify-between">
                <p>Descontos</p>
                <p>-R${totalDiscount.toFixed(2)}</p>
              </div>
              <Separator />

              <div className="flex justify-between">
                <p className="font-bold">Total</p>
                <p className="font-bold">R${total.toFixed(2)}</p>
              </div>

              <Button className="w-full font-semibold">Finalizar compra</Button>
            </div>
          </>
        ) : (
          <p className="text-center font-medium items-center flex flex-col opacity-75 gap-2">
            Seu carrinho está vazio, vamos às compras?
            <ShoppingBagIcon size={16} />
          </p>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
