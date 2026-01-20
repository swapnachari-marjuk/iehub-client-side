import React, { useEffect, useState } from "react";
import ProductCard from "../Components/Utility/ProductCard";
import Loading from "../Components/Loading";
import useAxios from "../hooks/useAxios";

const AllProducts = () => {
  const axiosInstance = useAxios()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [dataCount, setDataCount] = useState(0)
  const limit = 9
  const totalPages = Math.ceil(dataCount / limit)


  useEffect(() => {

    const debounceFn = setTimeout(() => {
      setSearchTerm(search)
      console.log("calling api with", search);
    }, 500)

    return () => clearTimeout(debounceFn)
  }, [search])


  useEffect(() => {
    const fetchData = async (searchTerm, page) => {
      setLoading(true)

      try {
        const res = await axiosInstance(`/products?search=${searchTerm}&page=${page}&limit=${limit}`)
        setProducts(res.data.result);
        setDataCount(res.data.dataCount)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(searchTerm, page);
  }, [searchTerm, page, axiosInstance]);

  return (
    <div>
      <title>IEHub | All Products</title>
      <h2 className="md:text-xl font-bold text-center mt-5">All Products</h2>

      <div className="text-center">
        <input
          name="search"
          className="input join-item"
          placeholder="🔎 Search"
          onChange={(e) => { e.preventDefault(); setSearch(e.target.value) }}
        />
      </div>

      {loading ?
        <Loading />
        : products.length === 0 ?
          (
            <div className="flex justify-center items-center py-10">
              <div className="bg-gray-100 p-5 dark:bg-gray-800 rounded-2xl text-center text-gray-500 dark:text-white">
                <h2 className="font-bold text-2xl">
                  No data found in this page
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

      <div className="flex items-center justify-center space-x-4 my-8">
        {/* Prev Button */}
        <button
          disabled={page === 1}
          onClick={() => setPage(prev => prev - 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium transition-all
               hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-sm"
        >
          Prev
        </button>

        {/* Page Indicator */}
        <div className="text-sm font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
          Page <span className="text-blue-600">{page || 0}</span> of <span className="text-gray-900">{totalPages || 1}</span>
        </div>

        {/* Next Button */}
        <button
          disabled={page === totalPages}
          onClick={() => setPage(prev => prev + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium transition-all
               hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
