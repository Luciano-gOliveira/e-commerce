import { Badge } from "@/app/_components/ui/badge";
import { LayoutGridIcon } from "lucide-react";

const CategoriesBadge = () => {
    return ( 
        <div className="p-5">
            <Badge variant="outline" className="flex border-primary border-2 items-center justify-center gap-2 max-w-32 py-2 px-2 rounded-lg">
                <LayoutGridIcon size={16}/>
                Categorias
            </Badge>
        </div>
        
     );
}
 
export default CategoriesBadge;