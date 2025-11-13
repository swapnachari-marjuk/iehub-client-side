import axios from "axios";

const instance = axios.create({
  baseURL: "https://import-export-hub-server-api.vercel.app/",
});
const useAxios = () => {
  return instance;
};

export default useAxios;
