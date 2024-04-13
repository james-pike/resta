import type { NavbarProps } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Divider,
} from "@nextui-org/react";
import { cn } from "../../../cn";

import { usePathname } from "next/navigation";

const menuItems = [

  { name: "Home", route: "/" },
  { name: "Menu", route: "/menu" },
  { name: "Locations", route: "/locations" },
  { name: "About", route: "/about" },
];

export default function BasicNavbar(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`sticky top-0 z-50 ${isScrolled ? 'bg-black' : ''} transition-colors duration-500`}>
      <Navbar
        {...props}
        classNames={{
          base: cn("border-default-100", {
            "bg-default-200/50 dark:bg-default-100/50": isMenuOpen || isScrolled,
          }),
          wrapper: "justify-between",
          item: [
            "hidden md:flex",
            "flex",
            "relative",
            "h-full",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-white",
            "text-white",
            "text-xl",
            "font-bold",
          ],
        }}
        className="lg:px-28"
        height="60px"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        isBordered
      >
        {/* Left Content */}
        <NavbarBrand>
          <div className="rounded-full py-3 text-background">
            <img
              className="h-20 w-auto"
              src="./images/logo.png"
              alt="Logo"
            />
          </div>
        </NavbarBrand>

        {/* Center Content */}
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={index} isActive={path === item.route}>
              <Link
                color={path == item.route ? "primary" : "foreground"}
                className="text-default-500"
                href={item.route}
                size="md"
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Right Content */}
        <NavbarContent className="hidden md:flex" justify="end">
          <NavbarItem className="ml-2 !flex gap-2">
            <Button 
            className=" bg-black px-4 text-white font-medium" radius="none" variant="light">
              Almonte
            </Button>
            <Button
              className="bg-white px-4 py-2 font-medium text-black hover:bg-transparent hover:border-white duration-200"
              color="secondary"
              radius="none"
              variant="flat"
          
            
            >
              Orders & Reservations
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="flex md:hidden" justify="end">
          {/* Render additional content for mobile */}
        </NavbarContent>

        {/* Navbar Menu Toggle */}
        <NavbarMenuToggle className="text-default-400 md:hidden" />

        {/* Navbar Menu */}
        <NavbarMenu
          className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
          motionProps={{
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            transition: {
              ease: "easeInOut",
              duration: 0.2,
            },
          }}
        >
          <NavbarMenuItem>
            <Button fullWidth as={Link} href="/#" variant="faded">
              Sign In
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem className="mb-4">
            <Button fullWidth as={Link} className="bg-white text-background" href="/#">
              Get Started
            </Button>
          </NavbarMenuItem>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="mb-2 w-full text-default-500" href={item.route} size="md">
                {item.name}
              </Link>
              {index < menuItems.length - 1 && <Divider className="opacity-50" />}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
