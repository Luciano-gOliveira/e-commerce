"use server"

import { prismaClient } from "@/app/_lib/prisma";
import { CartProduct } from "@/app/providers/cart";

export const createOrder = async (cartProducts: CartProduct[], userId: string) => { 

    //criar pedido com seus produtos
    await prismaClient.order.create({
        data: {
            userId,
            status: "WAITING_FOR_PAYMENT",
            orderProducts: {
                createMany: {
                    data: cartProducts.map(product => ({
                        basePrice: product.basePrice,
                        discountPercentage: product.unitPriceWithDiscount,
                        productId: product.id,
                        quantity: product.quantity
                    }))
                    
                }
         }
        }
    }) 


}