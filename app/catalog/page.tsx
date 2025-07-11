import { LayoutGridIcon } from "lucide-react";
import { prismaClient } from "../_lib/prisma";
import CategoryItem from "./_components/catalog-item";
import TitleBadge from "../_components/title-badge";

const Categories = async () => {
    const categories = await prismaClient.category.findMany({})
    return ( 
        <div className="space-y-4 mb-8">
            <div className="px-5 mt-5">
                <TitleBadge>
                                <LayoutGridIcon size={16}/>
                                    CATÁLOGO
                </TitleBadge>
            </div>
                     
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