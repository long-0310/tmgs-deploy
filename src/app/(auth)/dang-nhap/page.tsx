// app/dang-nhap/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function DangNhapPage() {
  const router = useRouter();
  const callbackUrl = "/admin";
  const [username, setUsername] = useState("admin@admin");
  const [password, setPassword] = useState("admin@123");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
      callbackUrl,
    });

    setLoading(false);

    if (res?.error) {
      setError("Email hoặc mật khẩu không đúng");
      return;
    }

    if (res?.url) {
      router.push(res.url);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f172a]">
      <div className="w-full max-w-md rounded-2xl bg-[#111113] p-8 shadow-lg border border-white/10">
        <h1 className="mb-6 text-2xl font-semibold text-white">
          Đăng nhập Admin
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-neutral-200">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              value={username}
              className="mt-1 bg-[#1e1e22] border-white/10 text-white"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-neutral-200">
              Mật khẩu
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              className="mt-1 bg-[#1e1e22] border-white/10 text-white"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-[#FF2849] hover:bg-[#ff435f]"
            disabled={loading}
          >
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </Button>
        </form>
      </div>
    </div>
  );
}
