import React, { useRef } from "react";
import { Link } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ExportsCard = ({ product }) => {
  const modalRef = useRef();

  const axiosSecure = useAxiosSecure();

  const {
    product_image,
    product_name,
    price,
    origin_country,
    rating,
    available_quantity,
    _id,
    category,
    brand,
    shipping_cost,
    description,
  } = product;

  //
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value,
      category: form.category.value,
      brand: form.brand.value,
      price: form.price.value,
      origin: form.origin.value,
      rating: form.rating.value,
      available_quantity: parseInt(form.quantity.value),
      description: form.description.value,
      image: form.image.value,
    };

    axiosSecure
      .put(`/products/toUpdateId/${_id}`, formData)
      .then((axiosData) => {
        console.log("updated data", axiosData.data);
        modalRef.current.close();
      })
      .catch((err) => console.log(err));
  };

  //
  const handleDelete = (id) => {
    console.log(id);
    axiosSecure
      .delete(`/products/deleteId/${id}`)
      .then((result) => console.log(result))
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
          <p className="text-gray-500 text-sm">
            Only {available_quantity} left
          </p>
        </div>

        {/* Rating & Country */}
        <div className="flex justify-between items-center">
          <p className="text-yellow-500 font-medium">⭐ {rating}</p>
          <p className="text-gray-400 italic text-sm">{origin_country}</p>
        </div>

        {/* action Buttons */}
        <button
          onClick={() => modalRef.current.showModal()}
          className="btn btn-primary w-full mt-2 hover:bg-blue-700 transition-colors"
        >
          Update
        </button>
        <button onClick={() => handleDelete(_id)} className="btn">
          Delete
        </button>
      </div>

      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleUpdate} className="space-y-4">
            {/* Product Name */}
            <div>
              <label className="block mb-1 font-medium">Product Name</label>
              <input
                type="text"
                name="name"
                defaultValue={product_name}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-1 font-medium">Category</label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Brand */}
            <div>
              <label className="block mb-1 font-medium">Brand</label>
              <input
                type="text"
                name="brand"
                defaultValue={brand}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block mb-1 font-medium">Price ($)</label>
              <input
                type="number"
                step="0.01"
                name="price"
                defaultValue={price}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Origin Country */}
            <div>
              <label className="block mb-1 font-medium">Origin Country</label>
              <input
                type="text"
                name="origin"
                defaultValue={origin_country}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block mb-1 font-medium">Rating</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                name="rating"
                defaultValue={rating}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Available Quantity */}
            <div>
              <label className="block mb-1 font-medium">
                Available Quantity
              </label>
              <input
                type="number"
                name="quantity"
                defaultValue={available_quantity}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Shipping Cost */}
            <div>
              <label className="block mb-1 font-medium">
                Shipping Cost ($)
              </label>
              <input
                type="number"
                step="0.01"
                name="shipping"
                defaultValue={shipping_cost}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block mb-1 font-medium">
                Product Description
              </label>
              <textarea
                name="description"
                defaultValue={description}
                className="textarea textarea-bordered w-full h-24"
              ></textarea>
            </div>

            {/* Image URL */}
            <div>
              <label className="block mb-1 font-medium">
                Product Image URL
              </label>
              <input
                type="url"
                name="image"
                defaultValue={product_image}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button className="btn btn-primary w-full">Update Item</button>
            </div>
          </form>
          <button
            onClick={() => modalRef.current.close()}
            className="btn w-full mt-2"
          >
            Cancel Update
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default ExportsCard;
