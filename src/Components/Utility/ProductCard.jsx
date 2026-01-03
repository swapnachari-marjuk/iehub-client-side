import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const {
    product_image,
    product_name,
    price,
    origin_country,
    rating,
    available_quantity,
    _id,
  } = product || {};

  return (
    <div className="card bg-white dark:bg-gray-600 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1 rounded-xl overflow-hidden">
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
        <h2 className="card-title text-lg font-semibold text-gray-800 dark:text-gray-300">
          {product_name}
        </h2>

        {/* Price & Availability */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <p className="text-blue-600 dark:text-blue-300 font-semibold text-base">
            ${price}
          </p>
          <p className="text-gray-500 dark:text-gray-200 text-sm">
            Only {available_quantity} left
          </p>
        </div>

        {/* Rating & Country */}
        <div className="flex justify-between items-center">
          <p className="text-yellow-500 font-medium">⭐ {rating}</p>
          <p className="text-gray-400 italic text-sm">{origin_country}</p>
        </div>

        {/* View Details Button */}
        <Link
          to={`/viewDetails/${_id}`}
          className="btn btn-primary w-full mt-2  transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
