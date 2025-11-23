"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="bg-black text-sm text-neutral-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-12 md:flex-row md:justify-between">
        {/* Left: logo + address + contact */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            {/* Thay logo của bạn vào đây */}
            <Image
              src="/image/tmgs.svg"
              alt="skipmatrix"
              width={140}
              height={32}
            />
          </div>

          <div className="space-y-1 text-[16px] leading-relaxed text-neutral-400">
            <p>Số 33, ngõ 99 Nguyễn Khang, Yên Hòa, Cầu Giấy, Hà Nội</p>
          </div>

          <div className="flex flex-wrap gap-12 text-[16px]">
            <div>
              <p className="text-xs font-medium text-neutral-500">
                Số điện thoại
              </p>
              <p className="mt-1 text-neutral-200">(+84) 936.370.690</p>
            </div>

            <div>
              <p className="text-xs font-medium text-neutral-500">Email</p>
              <p className="mt-1 text-neutral-200">support@tmgs.com</p>
            </div>
          </div>
        </div>

        {/* Right: columns với shadcn Button asChild */}
        <div className="grid gap-10 text-[16px] sm:grid-cols-3">
          {/* Quick links */}
          <div>
            <p className="mb-3 text-xs font-medium text-neutral-500">
              Quick links
            </p>
            <div className="flex flex-col space-y-1.5">
              {["Pricing", "Resources", "About us", "FAQ", "Contact us"].map(
                (item) => (
                  <Button
                    key={item}
                    asChild
                    variant="ghost"
                    className="h-auto justify-start px-0 py-0 text-[16px] font-normal text-neutral-400 hover:bg-transparent hover:text-white"
                  >
                    <Link href="#">{item}</Link>
                  </Button>
                )
              )}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="mb-3 text-xs font-medium text-neutral-500">Social</p>
            <div className="flex flex-col space-y-1.5">
              {["Facebook", "Instagram", "LinkedIn", "Twitter", "Youtube"].map(
                (item) => (
                  <Button
                    key={item}
                    asChild
                    variant="ghost"
                    className="h-auto justify-start px-0 py-0 text-[16px] font-normal text-neutral-400 hover:bg-transparent hover:text-white"
                  >
                    <Link href="#">{item}</Link>
                  </Button>
                )
              )}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-3 text-xs font-medium text-neutral-500">Legal</p>
            <div className="flex flex-col space-y-1.5">
              {["Terms of service", "Privacy policy", "Cookie policy"].map(
                (item) => (
                  <Button
                    key={item}
                    asChild
                    variant="ghost"
                    className="h-auto justify-start px-0 py-0 text-[16px] font-normal text-neutral-400 hover:bg-transparent hover:text-white"
                  >
                    <Link href="#">{item}</Link>
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
