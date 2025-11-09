import axios from "axios";
// import useAuth from "./useAuth";

// const {user} = useAuth()
const secureInstance = axios.create({
  baseURL: "http://localhost:3000/",
//   headers: { Authorization: `Bearer ${user.accessToken}` },
});
const useAxiosSecure = () => {
    return secureInstance
};

export default useAxiosSecure
