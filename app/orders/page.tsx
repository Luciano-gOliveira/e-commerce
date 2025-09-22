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
    const orders = await prismaClient.order.findMany({})
    // if(!user){
    //     return <p>Access Denied</p>
    // }
    return ( 
        <div className="p-5">
            <TitleBadge>
                < PackageSearchIcon size={16}/>
                Meus Pedidos
            </TitleBadge>
            <div className="grid grid-cols-2 gap-4 mt-5">
                {
                    orders.map(order => {
                        return (
                            <OrderItem key={order.id} status={order.status} orderId={order.id} />
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default OrderPage;