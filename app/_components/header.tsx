import { ShoppingCartIcon } from "lucide-react";
import { Card } from "./ui/card";
import MenuSheetButton from "./menu-sheet-button";
import Link from "next/link";

const Header = () => {
  return (
    <Card className="flex items-center justify-between rounded-t-none p-4">
      <MenuSheetButton />
      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">Valente</span> Store
        </h1>
      </Link>
      <ShoppingCartIcon />
    </Card>
  );
};

export default Header;
