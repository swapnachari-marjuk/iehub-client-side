import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import BannerSwiper from "../Components/BannerSwiper";

const Home = () => {
  const axiosInstance = useAxios();
  const [data, setData] = useState([]);

  console.log(data);
  useEffect(() => {
    axiosInstance.get("/latest-imports").then((axiosData) => {
      setData(axiosData.data);
    });
  }, [axiosInstance]);

  return (
    <div>
      <BannerSwiper />
    </div>
  );
};

export default Home;
