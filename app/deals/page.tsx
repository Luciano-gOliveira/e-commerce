import { PercentIcon } from "lucide-react";
import TitleBadge from "../_components/title-badge";
import { prismaClient } from "../_lib/prisma";
import ProductItem from "../_components/product-item";
import { computeProductTotalPrice } from "../helpers/product";


const DealsPage = async() => {

    const deals = await prismaClient.product.findMany({
        where: {
          discountPercentage: {
            gt: 0
          }
        }
      })

    return ( 
        <div className="p-5">
            <TitleBadge>
                <PercentIcon size={16}/>
                ofertas
            </TitleBadge>
            <div className="grid grid-cols-2 gap-4 mt-5">
                {
                    deals.map(deal => {
                        return (
                            <ProductItem key={deal.id} product={computeProductTotalPrice(deal)}/>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default DealsPage;