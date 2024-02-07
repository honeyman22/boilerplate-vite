import axios, { AxiosError, AxiosInstance } from "axios";
import Cookies from "js-cookie";
import config from "../config";
import { redirect } from "react-router-dom";

export const api: AxiosInstance = axios.create({
  baseURL: config.BASE_URL,
});

// api.defaults.headers.post["Content-Type"] = "application/json";

api.interceptors.request.use((config: any) => {
  if (config.headers === undefined) {
    config.headers = {};
  }

  const accessToken = Cookies.get("accesstoken");

  if (accessToken) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest: any = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookies.get("refreshtoken");

        const refreshResponse = await axios.post<
          APIResponse<{
            accessToken: string;
            refreshToken: string;
            role: string;
          }>
        >(`${config.BASE_URL}admin/auth/refresh`, { refreshToken });

        Cookies.set("accesstoken", refreshResponse.data.data.accessToken);
        Cookies.set("refreshtoken", refreshResponse.data.data.refreshToken);
        Cookies.set("role", refreshResponse.data.data.role);

        originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.data.accessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);

        Cookies.remove("accesstoken");
        Cookies.remove("refreshtoken");
        Cookies.remove("role");

        redirect("/login");
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
