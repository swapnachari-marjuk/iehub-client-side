import React, { useEffect, useState } from "react";
import ProductCard from "../Components/Utility/ProductCard";
import Loading from "../Components/Loading";
import useAxios from "../hooks/useAxios";

const AllProducts = () => {
  const axiosInstance = useAxios()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('')


  useEffect(() => {
    const fetchData = async (search) => {
      console.log(search);
      try {
        const res = await axiosInstance(`/products?search=${search}`)
        const data = res.data
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(search);
  }, [search, axiosInstance]);

  const handleSearch = (e) => {
    e.preventDefault()
    const form = e.target
    const searchValue = form.search.value
    console.log("btn clicked");
    console.log(searchValue);
    setSearch(searchValue)
  }

  return (
    <div>
      <title>IEHub | All Products</title>
      <h2 className="md:text-xl font-bold text-center mt-5">All Products</h2>

      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center mt-3"
      >
        <input
          name="search"
          className="input join-item"
          placeholder="🔎 Search"
        />
        <button className="btn join-item btn-primary">Search</button>
      </form>


      {loading ?
        <Loading />
        : products.length === 0 ?
          (
            <div className="flex justify-center items-center py-10">
              <div className="bg-gray-100 p-5 dark:bg-gray-800 rounded-2xl text-center text-gray-500 dark:text-white">
                <h2 className="font-bold text-2xl">
                  No data found
                </h2>
              </div>
            </div>
          )
          :
          (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 my-10 gap-5">
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                />
              ))}
            </div>
          )
      }
    </div>
  );
};

export default AllProducts;
