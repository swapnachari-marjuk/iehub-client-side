import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

const secureInstance = axios.create({
  baseURL: "https://import-export-hub-server-api.vercel.app/",
});
const useAxiosSecure = () => {
  const { user } = useAuth();
  useEffect(() => {
    // request interceptor
    const requestInterceptor = secureInstance.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${user?.accessToken}`;

        return config;
      }
    );

    return () => secureInstance.interceptors.request.eject(requestInterceptor);
  }, [user]);
  return secureInstance;
};

export default useAxiosSecure;
