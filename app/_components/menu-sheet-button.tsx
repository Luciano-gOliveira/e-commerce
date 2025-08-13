"use client";

import {
  HomeIcon,
  ListIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
import Link from "next/link";

const navigationMenuItems = [
  {
    id: 1,
    title: "Início",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    id: 2,
    title: "Ofertas",
    icon: <PercentIcon />,
    href: "/deals",
  },
  {
    id: 3,
    title: "Catálogo",
    icon: <ListIcon />,
    href: "/catalog",
  },
];

const MenuSheetButton = () => {
  const { data, status } = useSession();
  const handleLoginWithGoogleClick = () => signIn("google");
  const handleLogOut = () => signOut();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col space-y-2">
        <SheetHeader className="text-left text-lg font-semibold">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        {status === "authenticated" && data?.user && (
          <div className="flex flex-col">
            <div className="flex gap-4 py-4">
              <Avatar>
                <AvatarFallback>
                  {data.user.name?.[0].toUpperCase()}
                </AvatarFallback>
                {data.user.image && <AvatarImage src={data.user.image} />}
              </Avatar>
              <div className="flex flex-col">
                <p className="font-medium">{data?.user?.name}</p>
                <p className="text-sm opacity-75">Boas Compras!</p>
              </div>
            </div>
            <Separator />
          </div>
        )}
        {status === "unauthenticated" && <Separator />}
        {!data?.user ? (
          <Button
            className="text-md flex items-center justify-start font-semibold"
            variant="secondary"
            onClick={handleLoginWithGoogleClick}
          >
            <LogInIcon className="text-green-500" /> Fazer Login
          </Button>
        ) : (
          <Button
            className="text-md flex items-center justify-start font-semibold"
            variant="secondary"
            onClick={handleLogOut}
          >
            <LogOutIcon className="text-red-500" /> Logout
          </Button>
        )}
        {navigationMenuItems.map((menuItem) => {
          return (
            <SheetClose asChild key={menuItem.id}>
              <Link href={menuItem.href}>
                <Button
                  className="text-md w-full items-center justify-start font-semibold"
                  variant="secondary"
                >
                  {menuItem.icon} {menuItem.title}
                </Button>
              </Link>
            </SheetClose>
          );
        })}
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheetButton;
