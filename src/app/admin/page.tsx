// app/admin/page.tsx
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AdminPage from "./_components/AdminPage";

export default async function AdminHomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/dang-nhap");
  }

  return <AdminPage />;
}
