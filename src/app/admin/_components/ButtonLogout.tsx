// app/admin/LogoutButton.tsx
"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  return (
    <Button
      variant="outline"
      className="border-white/20 text-white hover:bg-white/10"
      onClick={() => signOut({ callbackUrl: "/dang-nhap" })}
    >
      Đăng xuất
    </Button>
  );
}
