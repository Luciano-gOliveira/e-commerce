import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/_components/ui/accordion";
import OrderProductItem from "./order-product-item";
import { Prisma } from "@prisma/client";


type OrderProductWithProduct = Prisma.OrderProductGetPayload<{
  include: { product: true };
}>;

interface OrderItemProps {
  orderProducts: OrderProductWithProduct[];
  status: string
}


const OrderItem = ({orderProducts, status}: OrderItemProps) => {

  return (
    //item de pedido (orders)
    <div>
      <Accordion type="single" collapsible >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h2 className="font-bold text-lg">Pedido <span className={status === "Aguardando Pagamento" ? "text-amber-400" : `text-primary`}>{status}</span></h2>
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            {orderProducts.map((orderProduct) => {
                const { product } = orderProduct;
                const { name, basePrice, discountPercentage, imageUrls } = product;
                return (
                    <OrderProductItem
                      imageUrl={imageUrls[0]}
                      productName={name}
                      basePrice={Number(basePrice)}
                      discountPercentage={discountPercentage}
                    />
                )
              })
            }
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
};

export default OrderItem;
