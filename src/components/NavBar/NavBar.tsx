"use client";

import Link from "next/link";
import * as React from "react";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/gioi-thieu", label: "Giới thiệu về chúng tôi" },
  { href: "/lien-he", label: "Liên hệ" },
  { href: "/tin-tuc", label: "Tin tức" },
];

export function NavigationMenuDemo() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll(); // chạy 1 lần lúc mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconColor = isScrolled ? "text-[#CCCCCC]" : "text-white/50";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-20 py-3 md:py-0 h-21 md:h-auto  group backdrop-blur-sm transition-all duration-200 ease-in-out hover:bg-white",
        isScrolled ? "bg-white" : "bg-[#22222215]"
      )}
    >
      {/* thanh header */}
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4">
        {/* left: logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/image/tmgs.svg" alt="tmgs" width={148} height={63} />
          </Link>
        </div>

        {/* center: navigation (DESKTOP) */}
        <div className="hidden w-full justify-center md:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex-wrap">
              {/* Dropdown item */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "cursor-pointer",
                    isScrolled && "text-[#222222]"
                  )}
                >
                  Sản Phẩm và Dịch Vụ
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none transition-all duration-200 focus:shadow-md md:p-6">
                          <div className="mb-2 text-lg font-medium sm:mt-4">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Tailwind
                            CSS.
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </li>

                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Simple links */}
              {NAV_LINKS.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isScrolled && "text-[#222222]"
                    )}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* right: login button (DESKTOP) */}
        <div className="hidden w-[200px] justify-end md:flex">
          <Button>Đăng nhập</Button>
        </div>

        {/* MOBILE: nút hamburger */}
        <div className="ml-auto flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            {isMobileOpen ? (
              <X className={cn("h-5 w-5", iconColor)} />
            ) : (
              <Menu className={cn("h-5 w-5", iconColor)} />
            )}
          </Button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={cn(
          "md:hidden mt-2 border-t border-border bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-200 ease-out",
          isMobileOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 pb-4 pt-2 space-y-3">
          {/* Sản phẩm & dịch vụ (mobile) */}
          <div className="rounded-lg bg-muted/50 p-3">
            <div className="text-sm font-semibold text-[#222222]">
              Sản Phẩm và Dịch Vụ
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Beautifully designed components built with Tailwind CSS.
            </p>

            <div className="mt-3 space-y-1">
              <Link
                href="/docs"
                className="block rounded-md px-2 py-1 text-sm text-[#222222] hover:bg-muted"
              >
                Introduction
              </Link>
              <Link
                href="/docs/installation"
                className="block rounded-md px-2 py-1 text-sm text-[#222222] hover:bg-muted"
              >
                Installation
              </Link>
              <Link
                href="/docs/primitives/typography"
                className="block rounded-md px-2 py-1 text-sm text-[#222222] hover:bg-muted"
              >
                Typography
              </Link>
            </div>
          </div>

          {/* Các link còn lại */}
          <nav className="space-y-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-md px-2 py-2 text-sm font-medium text-[#222222] hover:bg-muted"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* nút đăng nhập mobile */}
          <div className="pt-2">
            <Button className="w-full" onClick={() => setIsMobileOpen(false)}>
              Đăng nhập
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

type ListItemProps = {
  title: string;
  href: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"li">;

function ListItem({ title, children, href, ...props }: ListItemProps) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-md p-3 transition-colors hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <div className="text-sm font-medium leading-none text-foreground">
            {title}
          </div>
          <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default NavigationMenuDemo;
