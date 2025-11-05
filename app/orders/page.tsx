// import authOptions  from "@/app/_lib/auth"
import getServerSession from "next-auth"
import TitleBadge from "../_components/title-badge"
import { PackageSearchIcon } from "lucide-react"
import { prismaClient } from "../_lib/prisma"
import ProductItem from "../_components/product-item"
import { computeProductTotalPrice } from "../helpers/product"
import OrderItem from "./_components/order-item"

const OrderPage = async() => {
    // const user =  getServerSession(authOptions)
    const orders = await prismaClient.order.findMany({
        include: {
            orderProducts: {
                include: {
                    product: true
                }
            }
        }
    })
    // if(!user){
    //     return <p>Access Denied</p>
    // }
        const getStatusPayment = (status: "WAITING_FOR_PAYMENT" | "PAYMENT_CONFIRMED") => {
            if( status === "WAITING_FOR_PAYMENT"){
                return "Aguardando Pagamento"
            } else{
                return "Pago"
            }
};

    return ( 
        <div className="p-5 space-y-6">
            <TitleBadge>
                < PackageSearchIcon size={16}/>
                Meus Pedidos
            </TitleBadge>

            {
                orders.map(order => {
                    return(
                        <OrderItem 
                            key={order.id}
                            orderProducts={order.orderProducts}
                            status={getStatusPayment(order.status)}
                        />
                    )
                })
            }
        </div>
     );
}
 
export default OrderPage;