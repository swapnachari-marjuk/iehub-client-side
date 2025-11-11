import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import ProductCard from "../Components/Utility/ProductCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "../Components/Loading";

const MyExport = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [exportProducts, setExportProducts] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/products/${user?.email}`)
      .then((res) => setExportProducts(res.data))
      .catch((err) => console.log(err));
  }, [axiosSecure, user]);

  if (loading) {
    return <Loading />;
  }

  if (!exportProducts?.length) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="bg-gray-100 p-5 rounded-2xl text-center text-gray-500">
          <h2 className="font-bold text-2xl">
            You have not exported any products yet.
          </h2>
          <p className="text-sm">You can export any product you want.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center pt-5">My Exports</h2>
      <div className="grid grid-cols-3 my-10 gap-5">
        {exportProducts.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default MyExport;
