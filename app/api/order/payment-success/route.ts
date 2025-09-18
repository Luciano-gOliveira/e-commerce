import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-06-30.basil",
});

export const POST = async (request: Request) => {
  const signature = request.headers.get("stripe-signature"); //verifica se o evento que está chegando é nosso

  if (!signature) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const text = await request.text();
  
  const  event = stripe.webhooks.constructEvent(
      text,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET_KEY as string
    )

  //posso escutar qualquer evento do stripe (fail etc) 
  if (event.type === "checkout.session.completed") {
    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      {
        expand: ["line_items"],
      }
    );
    const lineItems = sessionWithLineItems.line_items;
    console.log("Line Items:", lineItems);
  }

  return NextResponse.json({ received: true})
};