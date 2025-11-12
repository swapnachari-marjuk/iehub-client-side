import React from "react";
// import useAxios from "../hooks/useAxios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

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
      .then((axiosData) => console.log(axiosData.data))
      .catch((err) => console.log(err));

    console.log(productData);
    // form.reset();
  };

  return (
    <div className="max-w-3xl mx-auto my-10 bg-white shadow-md rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Add a New Product
      </h2>

      <form onSubmit={handleAddProduct} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block mb-1 font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Handcrafted Cotton Kurta"
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
            placeholder="e.g. Clothing, Accessories, Decor"
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
            placeholder="e.g. LoomArt"
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
            placeholder="e.g. 28.50"
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
            placeholder="e.g. India"
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
            placeholder="e.g. 4.6"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Available Quantity */}
        <div>
          <label className="block mb-1 font-medium">Available Quantity</label>
          <input
            type="number"
            name="quantity"
            placeholder="e.g. 200"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Shipping Cost */}
        <div>
          <label className="block mb-1 font-medium">Shipping Cost ($)</label>
          <input
            type="number"
            step="0.01"
            name="shipping"
            placeholder="e.g. 12.50"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Product Description</label>
          <textarea
            name="description"
            placeholder="Write a short description about your product..."
            className="textarea textarea-bordered w-full h-24"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-medium">Product Image URL</label>
          <input
            type="url"
            name="image"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <button className="btn btn-primary w-full">Update</button>
        </div>
      </form>
    </div>
  );
};

export default AddExport;
