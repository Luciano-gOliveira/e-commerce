import {ShoppingCartIcon } from "lucide-react";
import { Card } from "./ui/card";
import MenuSheetButton from "./menu-sheet-button";

const Header = () => {
    return ( 
        <Card className="flex justify-between items-center p-4 rounded-t-none">
            <MenuSheetButton/>
            <h1 className="text-lg font-semibold"><span className="text-primary">FSW</span> Store</h1>
            <ShoppingCartIcon/>
        </Card>
     );
}
 
export default Header;