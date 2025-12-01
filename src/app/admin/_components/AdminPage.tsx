"use client";

import * as React from "react";
import { LayoutList, Tags, Users2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { BlogTable } from "./BlogsManament";

type Section = "blogs" | "category" | "users";

const sidebarItems: { id: Section; label: string; icon: React.ElementType }[] =
  [
    { id: "blogs", label: "Blogs", icon: LayoutList },
    { id: "category", label: "Category", icon: Tags },
    { id: "users", label: "Users", icon: Users2 },
  ];

export default function AdminPage() {
  const [current, setCurrent] = React.useState<Section>("blogs");

  const currentLabel =
    sidebarItems.find((item) => item.id === current)?.label ?? "";

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      {/* SIDEBAR - desktop / tablet */}
      <aside className="hidden h-screen w-56 flex-col border-r bg-white px-3 py-4 md:flex">
        {/* Logo */}
        <div className="mb-6 flex items-center gap-2 px-1">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-xs font-semibold">
            <span>M</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className=" font-semibold">MynaUI</span>
            <span className="text-[11px] text-slate-500">Admin</span>
          </div>
        </div>

        {/* Nav */}
        <ScrollArea className="flex-1">
          <nav className="space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const active = current === item.id;

              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "w-full justify-start gap-2 rounded-lg px-2  font-medium",
                    active
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-600 hover:bg-slate-100"
                  )}
                  onClick={() => setCurrent(item.id)}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </ScrollArea>

        {/* Footer user */}
        <div className="mt-4 border-t pt-3">
          <div className="flex items-center gap-2 px-1">
            <Avatar className="h-7 w-7">
              <AvatarImage src="https://avatar.vercel.sh/admin" alt="@admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col leading-tight">
              <span className="text-xs font-medium">Praveen Juge</span>
              <span className="text-[11px] text-slate-500">Admin</span>
            </div>
            <span className="text-xs text-slate-400">•••</span>
          </div>
        </div>
      </aside>

      {/* MAIN AREA */}
      <main className="flex-1">
        {/* Top bar / header */}
        <header className="flex h-12 items-center justify-between border-b bg-slate-50 px-4 md:px-8">
          {/* Logo nhỏ trên mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-xs font-semibold">
              <span>M</span>
            </div>
            <span className=" font-semibold">MynaUI</span>
          </div>

          <h1 className="text-lg font-semibold tracking-tight md:text-2xl">
            {currentLabel}
          </h1>

          {/* placeholder cân layout mobile */}
          <div className="w-7 md:hidden" />
        </header>

        {/* Mobile nav (tabs ngang) */}
        <div className="border-b bg-white px-4 py-2 md:hidden">
          <ScrollArea className="w-full">
            <div className="flex gap-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const active = current === item.id;

                return (
                  <Button
                    key={item.id}
                    size="sm"
                    variant={active ? "secondary" : "ghost"}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-3 text-xs",
                      active
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-100"
                    )}
                    onClick={() => setCurrent(item.id)}
                  >
                    <Icon className="h-3 w-3" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </ScrollArea>
        </div>

        {/* Content */}
        <section className="bg-slate-50 p-4 md:h-[calc(100vh-3rem)] md:p-8">
          <div className="min-h-[300px] rounded-lg border border-dashed border-slate-200 bg-white/40 p-4 md:h-full md:p-6">
            <ContentPlaceholder section={current} />
          </div>
        </section>
      </main>
    </div>
  );
}

function ContentPlaceholder({ section }: { section: Section }) {
  if (section === "blogs") {
    return (
      <div className="space-y-2">
        <h2 className="text-base font-semibold md:text-lg">Blogs list</h2>
        <Separator />
        <BlogTable />
      </div>
    );
  }

  if (section === "category") {
    return (
      <div className="space-y-2">
        <h2 className="text-base font-semibold md:text-lg">Categories</h2>
        <Separator />
        {/* <BlogTable /> */}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <h2 className="text-base font-semibold md:text-lg">Users</h2>
      <Separator />
      <p className=" text-slate-500">
        Đây là nơi quản lý user (thêm / sửa / khoá tài khoản)…
      </p>
    </div>
  );
}
