import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import ProductCard from "../Components/Utility/ProductCard";
import useAuth from "../hooks/useAuth";
import Loading from "../Components/Loading";

const AllProducts = () => {
  const axiosInstance = useAxios();
  const { loading } = useAuth();
  const [data, setData] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    if (!searchValue) {
      setData()
    }
    axiosInstance
      .get(`/search/${searchValue}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    console.log(searchValue);
  };

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

      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center"
      >
        <input
          name="search"
          className="input join-item"
          placeholder="🔎Search"
        />
        <button className="btn join-item btn-primary">Subscribe</button>
      </form>

      <div className="grid grid-cols-3 my-10 gap-5">
        {data.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
