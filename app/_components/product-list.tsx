import { Product } from "@prisma/client";
import ProductItem from "./product-item";
import { computeProductTotalPrice } from "../helpers/product";

interface ProductListProps {
    products: Product[]
}

const ProductList = ({products}: ProductListProps) => {
    return ( 
        <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden gap-4">
            {
                products.map((product) => {
                    return (
                      <ProductItem
                        key={product.id}
                        product={computeProductTotalPrice(product)}
                      />
                    )
                })
            }
        </div>
     );
}
 
export default ProductList;