import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";

const Details = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  const [importQuantity, setImportQuantity] = useState("");
  const modalRef = useRef();

  useEffect(() => {
    axiosInstance.get(`imports/${id}`).then((axiosData) => {
      setProductData(axiosData.data[0]);
    });
  }, [axiosInstance, id]);

  const handleQuantity = (e) => {
    const value = e.target.value;
    setImportQuantity(value);
  };

  const handleImportData = (e) => {
    e.preventDefault();
    const importer_name = e.target.name.value;
    const importer_email = e.target.email.value;
    const import_quantity = e.target.quantity.value;
    const import_country = e.target.country.value;

    const importData = {
      importer_name,
      importer_email,
      import_quantity,
      imported_at: new Date().toLocaleTimeString(),
      import_country,
    };

    console.log(importData);
  };

  const {
    product_image,
    product_name,
    category,
    brand,
    price,
    origin_country,
    rating,
    available_quantity,
    description,
    import_date,
    supplier_name,
    supplier_email,
    shipping_cost,
    status,
    _id,
  } = productData;

  return (
    <div className="max-w-5xl mx-auto my-10 bg-white shadow-md rounded-xl p-6">
      {/* Product Image & Info Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg">
          <img
            src={product_image}
            alt={product_name}
            className="w-full max-w-sm object-contain rounded-lg"
          />
        </div>

        <div className="flex-1 space-y-3">
          <h1 className="text-2xl font-semibold text-gray-800">
            {product_name}
          </h1>
          <p className="text-sm text-gray-500 italic">
            {category} • {brand}
          </p>

          <p className="text-3xl font-bold text-blue-600">${price}</p>

          <div className="flex flex-wrap gap-4 text-gray-700 mt-4">
            <p>
              <span className="font-medium">Origin:</span> {origin_country}
            </p>
            <p>
              <span className="font-medium">Available:</span>{" "}
              {available_quantity}
            </p>
            <p>
              <span className="font-medium">Rating:</span> ⭐ {rating}
            </p>
            <p>
              <span className="font-medium">Status:</span> {status}
            </p>
          </div>

          <p className="text-gray-600 mt-3 leading-relaxed">{description}</p>

          <div className="border-t border-gray-100 pt-3 text-sm text-gray-500">
            <p>
              <span className="font-medium text-gray-700">Import Date:</span>{" "}
              {import_date}
            </p>
            <p>
              <span className="font-medium text-gray-700">Shipping Cost:</span>{" "}
              ${shipping_cost}
            </p>
          </div>
        </div>
      </div>

      {/* Supplier Info */}
      <div className="mt-8 bg-gray-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Supplier Information
        </h2>
        <div className="text-gray-600 space-y-1">
          <p>
            <span className="font-medium">Name:</span> {supplier_name}
          </p>
          <p>
            <span className="font-medium">Email:</span> {supplier_email}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-6">
        <button
          className="btn btn-primary"
          onClick={() => modalRef.current.showModal()}
        >
          Import Product
        </button>
      </div>

      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div>
            <h3 className="text-xl font-bold">
              Give your information to import this product
            </h3>

            <form onSubmit={handleImportData} className="card-body">
              <fieldset className="fieldset">
                {/* name */}
                <div>
                  <label className="label">Importer Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input w-full"
                    defaultValue={user.displayName}
                    readOnly
                  />
                </div>
                {/* email field */}
                <div>
                  <label className="label">Importer Email</label>
                  <input
                    type="text"
                    className="input w-full"
                    name="email"
                    defaultValue={user.email}
                    readOnly
                  />
                </div>
                {/* country field */}
                <div>
                  <label className="label">Import Country</label>
                  <input
                    type="text"
                    className="input w-full"
                    name="country"
                    placeholder="Import Country"
                  />
                </div>
                {/* quantity field */}
                <div>
                  <label className="label">How much</label>
                  <input
                    type="number"
                    className="input w-full"
                    name="quantity"
                    placeholder="Product quantity to import"
                    value={importQuantity}
                    onChange={handleQuantity}
                  />
                </div>

                <button
                  className="btn btn-primary mt-4"
                  disabled={
                    Number(available_quantity) < importQuantity ||
                    importQuantity < 1
                      ? true
                      : false
                  }
                >
                  Import Now
                </button>
              </fieldset>
            </form>

            <form method="dialog">
              <button className="btn border-0 w-full">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Details;
