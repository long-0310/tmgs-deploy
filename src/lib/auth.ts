// import { NextAuthOptions, getServerSession } from "next-auth";
// import { useSession } from "next-auth/react";
// import { redirect, useRouter } from "next/navigation";

// import bcrypt from "bcryptjs";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";

// const users = [
//   {
//     id: "1",
//     name: "Người Dùng",
//     email: "test@example.com",
//     passwordHash: bcrypt.hashSync("password123", 10),
//   },
// ];

// export const authConfig: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Sign in",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "example@example.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials) return null;
//         const user = users.find((u) => u.email === credentials.email);
//         if (!user) return null;
//         const isValid = await bcrypt.compare(
//           credentials.password,
//           user.passwordHash
//         );
//         if (!isValid) return null;
//         return { id: user.id, name: user.name, email: user.email };
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],
// };

// export async function loginIsRequiredServer() {
//   const session = await getServerSession(authConfig);
//   if (!session) return redirect("/");
// }

// export function loginIsRequiredClient() {
//   if (typeof window !== "undefined") {
//     const session = useSession();
//     const router = useRouter();
//     if (!session) router.push("/");
//   }
// }

// // test
