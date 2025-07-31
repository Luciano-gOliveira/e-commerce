"use server"

import { CartProduct } from "../providers/cart"
import Stripe from "stripe"

export const createCheckout = async(product: CartProduct[]) => {
    //criar checkout
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
        apiVersion: "2025-06-30.basil"
    })

    const checkout = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.HOST_URL as string,
        cancel_url: process.env.HOST_URL as string,
        line_items: product.map(p => {
            return {
                price_data: {
                    currency: "brl",
                    product_data: {
                        name: p.name,
                        description: p.description,
                        images: p.imageUrls,

                    },
                    unit_amount: p.unitPriceWithDiscount * 100,    
                },
                quantity: p.quantity
            }
        })
    })

    //retornar checkout
    return checkout
}