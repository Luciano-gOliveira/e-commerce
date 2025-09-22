

const OrderItem = ({orderId, status}: {orderId: string, status: string}) => {
    return (
        //item de pedido (orders) 
        <div className="space-y-6 gap-4" >
            <p>{orderId}</p>
            <p>{status}</p>           
        </div>
     );
}
 
export default OrderItem;