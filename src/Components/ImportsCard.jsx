import React from "react";
import { Link } from "react-router";
import useAxios from "../hooks/useAxios";

const ImportsCard = ({ product, onDelete }) => {
  const axiosInstance = useAxios();
  const {
    product_image,
    product_name,
    price,
    import_country,
    rating,
    import_quantity,
    _id,
  } = product;

  const handleDelete = () => {
    axiosInstance
      .delete(`/imports/${_id}`)
      .then((res) => {
        onDelete(_id);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card bg-white shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 rounded-xl overflow-hidden">
      {/* product image */}
      <figure className="h-60 bg-gray-50 flex items-center justify-center">
        <img
          className="h-full object-contain"
          src={product_image}
          alt={product_name}
        />
      </figure>

      <div className="flex flex-col p-5 space-y-3">
        {/* Product Name */}
        <h2 className="card-title text-lg font-semibold text-gray-800">
          {product_name}
        </h2>

        {/* Price & Availability */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <p className="text-blue-600 font-semibold text-base">${price}</p>
          <p className="text-gray-500 text-sm">Quantity {import_quantity}</p>
        </div>

        {/* Rating & Country */}
        <div className="flex justify-between items-center">
          <p className="text-yellow-500 font-medium">⭐{rating}</p>
          <p className="text-gray-400 italic text-sm">{import_country}</p>
        </div>

        {/* actions Button */}
        <div className="space-y-4">
          <Link
            // to={`/viewDetails/${_id}`}
            className="btn btn-primary w-full mt-2 hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
          <button onClick={handleDelete} className="btn w-full">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportsCard;
