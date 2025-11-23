"use client";

import { SiteFooter } from "@/components/FooterSection/FooterSection";
import NavigationMenuDemo from "@/components/NavBar/NavBar";
import { type PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <NavigationMenuDemo />
      {children}
      <SiteFooter />
    </>
  );
}
