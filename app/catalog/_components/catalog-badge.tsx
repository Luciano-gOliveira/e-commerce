import { Badge } from "@/app/_components/ui/badge";
import { ReactNode } from "react";

const CategoriesBadge = ({children}: {children: ReactNode}) => {
    return ( 
        <div className="p-5">
            <Badge variant="outline" className="flex border-primary border-2 items-center justify-center gap-2 w-fit py-2 px-2 rounded-lg">
                {children}
            </Badge>
        </div>
        
     );
}
 
export default CategoriesBadge;