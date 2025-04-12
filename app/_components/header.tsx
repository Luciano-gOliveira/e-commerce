import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Header = () => {
    return ( 
        <Card className="flex justify-between items-center p-4 rounded-t-none">
            <Button size="icon" variant="outline">
                <MenuIcon/>
            </Button>
            <h1 className="text-lg font-semibold"><span className="text-primary">FSW</span> Store</h1>
            <ShoppingCartIcon/>
        </Card>
     );
}
 
export default Header;