// src/lib/axiosClient.ts
import axios, { AxiosError } from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// ------- INTERCEPTOR REQUEST: GẮN TOKEN -------
axiosClient.interceptors.request.use(
  (config) => {
    // chỉ chạy trên client, tránh lỗi Next.js (vì server không có localStorage)
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ------- INTERCEPTOR RESPONSE: XỬ LÝ LỖI & DATA -------
axiosClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
export default axiosClient;
