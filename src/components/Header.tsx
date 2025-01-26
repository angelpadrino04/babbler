"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/caracteristicas", label: "Características" },
    { href: "/precios", label: "Precios" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/icon.png" width={75} height={75} alt="Logo" />
        </Link>
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Menu"
            >
              <Menu size={64} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
