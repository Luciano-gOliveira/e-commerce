"use server";

import { CartProduct } from "@/app/providers/cart";
import Stripe from "stripe";

export const createCheckout = async (
  products: CartProduct[],
  orderId: string,
) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-08-27.basil",
  });

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: "https://e-commerce-eight-psi-98.vercel.app/orders",
    cancel_url: "http://localhost:3000/orders",
    metadata: {
      orderId,
    },
    line_items: products.map((product) => {
      return {
        price_data: {
          currency: "brl",
          product_data: {
            name: product.name,
            description: product.description,
            images: product.imageUrls,
          },
          unit_amount: product.unitPriceWithDiscount * 100,
        },
        quantity: product.quantity,
      };
    }),
  });

  // RETORNAR O CHECKOUT
  return checkout;
};