import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import ProductCard from "../Components/Utility/ProductCard";
import useAuth from "../hooks/useAuth";
import Loading from "../Components/Loading";
import { useLoaderData } from "react-router";

const AllProducts = () => {
  const data = useLoaderData();
  const axiosInstance = useAxios();
  const { loading } = useAuth();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setAllData(data);
  }, [data]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    if (!searchValue) {
      setAllData(data);
      return;
    }
    axiosInstance
      .get(`/search/${searchValue}`)
      .then((res) => setAllData(res.data))
      .catch((err) => console.log(err));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <title>IEHub | All Products</title>
      <h2 className="text-2xl font-bold text-center mt-5">All Products</h2>

      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center mt-3"
      >
        <input
          name="search"
          className="input join-item"
          placeholder="🔎Search"
        />
        <button className="btn join-item btn-primary">Subscribe</button>
      </form>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 my-10 gap-5">
        {allData.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
