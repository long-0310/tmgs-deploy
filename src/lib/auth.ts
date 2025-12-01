/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axiosClient from "./axiosClient";

type LoginResponse = {
  code: number;
  data: {
    token: string;
  };
  message: string;
};

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: { signIn: "/dang-nhap" },
  providers: [
    CredentialsProvider({
      name: "Username & Password",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Mật khẩu", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) {
          throw new Error("Thiếu username hoặc mật khẩu");
        }

        try {
          const res = await axiosClient.post<LoginResponse>("/auth/login", {
            username: credentials.username,
            password: credentials.password,
          });

          // res.data là LoginResponse
          if (res.data.code !== 200 || !res.data.data?.token) {
            return null;
          }

          const accessToken = res.data.data.token;

          const user = {
            id: credentials.username,
            name: credentials.username,
            email: "",
            accessToken,
          };

          return user as any;
        } catch (err: any) {
          if (err?.response?.status === 401) {
            throw new Error("Email hoặc mật khẩu không đúng");
          }
          console.error("LOGIN_ERROR", err?.response?.data || err);
          throw new Error("Đăng nhập thất bại, vui lòng thử lại");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = (user as any).accessToken;
        token.id = (user as any).id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        (session as any).accessToken = (token as any).accessToken;
        (session.user as any).id = token.id;
      }
      return session;
    },
  },
};
