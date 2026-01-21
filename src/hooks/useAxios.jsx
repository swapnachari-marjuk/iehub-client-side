import axios from "axios";

const instance = axios.create({
  baseURL: "https://iehub-api-server.vercel.app",
  // baseURL: "http://localhost:3000",
});
const useAxios = () => {
  return instance;
};

export default useAxios;
