import { prismaClient } from "../_lib/prisma";
import CategoriesBadge from "./_components/catalog-badge";
import CategoryItem from "./_components/catalog-item";

const Categories = async () => {
    const categories = await prismaClient.category.findMany({})
    return ( 
        <div className="space-y-4 mb-8">
            <CategoriesBadge/>
                     
            <div className="grid grid-cols-2 gap-4 px-5 mb-4">
                {
                    categories.map((category) => {
                        return (
                            <CategoryItem key={category.id} category={category}/>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default Categories;