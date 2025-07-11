import { Badge } from "@/app/_components/ui/badge";
import { ReactNode } from "react";

const TitleBadge = ({children}: {children: ReactNode}) => {
    return ( 
        <div >
            <Badge variant="outline" className="flex uppercase border-primary border-2 items-center justify-center gap-2 w-fit py-2 px-2 rounded-xl">
                {children}
            </Badge>
        </div>
        
     );
}
 
export default TitleBadge;