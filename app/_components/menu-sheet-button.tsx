"use client"

import {
  HomeIcon,
  ListIcon,
  LogInIcon,
  MenuIcon,
  PercentIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

const navigationMenuItems = [
  {
    id: 1,
    title: "Fazer Login",
    icon: <LogInIcon />,
  },
  {
    id: 2,
    title: "Início",
    icon: <HomeIcon />,
  },
  {
    id: 3,
    title: "Ofertas",
    icon: <PercentIcon />,
  },
  {
    id: 4,
    title: "Catálogo",
    icon: <ListIcon />,
  },
];

const MenuSheetButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col space-y-4">
        <SheetHeader className="text-left text-lg font-semibold">
            <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        {navigationMenuItems.map((menuItem) => {
          return (
            <Button
              className="text-md flex items-center justify-start font-semibold"
              variant="secondary"
              key={menuItem.id}
            >
              {menuItem.icon} {menuItem.title}
            </Button>
          );
        })}
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheetButton;
