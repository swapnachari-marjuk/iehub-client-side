import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import ProductCard from "../Components/Utility/ProductCard";
import useAuth from "../hooks/useAuth";
import Loading from "../Components/Loading";

const AllProducts = () => {
  const axiosInstance = useAxios();
  const { loading } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance.get("/products").then((axiosData) => {
      setData(axiosData.data);
    });
  }, [axiosInstance]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-5">All Products</h2>

      <div className="grid grid-cols-3 my-10 gap-5">
        {data.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
