import { prismaClient } from "@/app/_lib/prisma";
import ProductDetailsItem from "./_components/product-details-item";
import ProductInfo from "./_components/product-info";
import { computeProductTotalPrice } from "@/app/helpers/product";
import ProductList from "@/app/_components/product-list";

interface ProductDetailsPageProps {
    params: {
        slug: string
    }
}

const ProductDetailsPage = async ({params: {slug}} : ProductDetailsPageProps) => {
    const product = await prismaClient.product.findFirst({
        where: {
            slug
        },
        include: {
            category: {
                include: {
                    products: {
                        where: {
                            NOT: {
                                slug
                            }
                        }
                    }
                }
            }
        }
    })

    if(!product) return null
    return ( 
        <div className="gap-8">
            <ProductDetailsItem imageUrls={product.imageUrls} name={product.name}/>
            <div className="px-5">
                <ProductInfo product={computeProductTotalPrice(product)}/>
            </div>


            <div className="px-5 py-8 space-y-4">
                <p className="text-md font-bold">Produtos Recomendados</p>
                <ProductList products={product.category.products} />
            </div>
        </div>
     );
}
 
export default ProductDetailsPage;