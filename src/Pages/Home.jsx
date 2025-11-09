import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import BannerSwiper from "../Components/BannerSwiper";
import ProductCard from "../Components/Utility/ProductCard";

const Home = () => {
  const axiosInstance = useAxios();
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance.get("/latest-imports").then((axiosData) => {
      setData(axiosData.data);
    });
  }, [axiosInstance]);

  return (
    <div>
      <BannerSwiper />
      <div>
        <h2 className="text-2xl font-bold text-center mt-5">Recent Products</h2>
        <div className="grid grid-cols-3 my-10 gap-5">
          {data.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
