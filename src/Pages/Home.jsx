import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import BannerSwiper from "../Components/BannerSwiper";
import ProductCard from "../Components/Utility/ProductCard";
import Sponsors from "../Components/Sponsors";
import Mentorship from "../Components/Mentorship";

const Home = () => {
  const axiosInstance = useAxios();
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance.get("/latest-products").then((axiosData) => {
      setData(axiosData.data);
    });
  }, [axiosInstance]);

  return (
    <div>
      <title>IEHub | Home</title>
      <BannerSwiper />
      <div className="my-16">
        <h2 className="text-3xl font-bold text-center mb-5">Recent Products</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {data.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
      <div>
        <Sponsors />
      </div>
      <Mentorship></Mentorship>
    </div>
  );
};

export default Home;
