import React from "react";
// import useAxios from "../hooks/useAxios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const AddExport = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const productData = {
      product_image: form.image.value,
      product_name: form.name.value,
      category: form.category.value,
      brand: form.brand.value,
      price: parseFloat(form.price.value),
      origin_country: form.origin.value,
      rating: parseFloat(form.rating.value),
      available_quantity: parseInt(form.quantity.value),
      description: form.description.value || "No description added yet!",
      shipping_cost: parseFloat(form.shipping.value),
      import_date: new Date().toLocaleString(),
      supplier_name: user.displayName,
      supplier_email: user.email,
      status: "Available",
    };

    axiosSecure
      .post("/products", productData)
      .then(() => {
        toast.success("Product Exported successfully.");
        form.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-3xl mx-auto my-10 px-4">
      {/* ১. মেইন কার্ডে ডার্ক মোড ব্যাকগ্রাউন্ড এবং বর্ডার যোগ করা হয়েছে */}
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300">

        <title>IEHub | Add Export</title>

        {/* ২. টাইটেল সেকশন ডার্ক মোডে টেক্সট সাদা করা হয়েছে */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Add a New Product
        </h2>

        <form onSubmit={handleAddProduct} className="space-y-5">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Product Name */}
            <div className="form-control">
              <label className="label font-semibold dark:text-gray-300">Product Name</label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Handcrafted Cotton Kurta"
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-blue-500 transition-all"
                required
              />
            </div>

            {/* Category */}
            <div className="form-control">
              <label className="label font-semibold dark:text-gray-300">Category</label>
              <input
                type="text"
                name="category"
                placeholder="e.g. Clothing, Accessories"
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            {/* Brand */}
            <div className="form-control">
              <label className="label font-semibold dark:text-gray-300">Brand</label>
              <input
                type="text"
                name="brand"
                placeholder="e.g. LoomArt"
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            {/* Price */}
            <div className="form-control">
              <label className="label font-semibold dark:text-gray-300">Price ($)</label>
              <input
                type="number"
                step="0.01"
                name="price"
                placeholder="e.g. 28.50"
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            {/* Origin Country */}
            <div className="form-control">
              <label className="label font-semibold dark:text-gray-300">Origin Country</label>
              <input
                type="text"
                name="origin"
                placeholder="e.g. India"
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            {/* Rating */}
            <div className="form-control">
              <label className="label font-semibold dark:text-gray-300">Rating (0-5)</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                name="rating"
                placeholder="e.g. 4.6"
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            {/* Available Quantity */}
            <div className="form-control">
              <label className="label font-semibold dark:text-gray-300">Available Quantity</label>
              <input
                type="number"
                name="quantity"
                placeholder="e.g. 200"
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            {/* Shipping Cost */}
            <div className="form-control">
              <label className="label font-semibold dark:text-gray-300">Shipping Cost ($)</label>
              <input
                type="number"
                step="0.01"
                name="shipping"
                placeholder="e.g. 12.50"
                className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
          </div>

          {/*  description and url */}
          <div className="form-control">
            <label className="label font-semibold dark:text-gray-300">Product Image URL</label>
            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold dark:text-gray-300">Product Description</label>
            <textarea
              name="description"
              placeholder="Write a detailed description about your product..."
              className="textarea textarea-bordered w-full h-32 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-blue-500"
            ></textarea>
          </div>

          <div className="pt-6">
            <button className="btn btn-primary w-full h-14 text-lg font-bold shadow-xl shadow-blue-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all">
              Add Product to Inventory
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExport;
